import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import LogEntryForm from './LogEntryForm';
import MapPopup from './Popup';

const Map = ({ logs, fetcEntries }) => {
  const [newEntry, addNewEntry] = useState(null);
  const [showPopup, togglePopup] = useState({});
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 2,
  });

  const showAddLogPopup = (event) => {
    const [ longitude, latitude ] = event.lngLat;
    addNewEntry({ longitude, latitude });
  }

  return (
    <ReactMapGL
      {...viewport}
      mapStyle={'mapbox://styles/niko2931/ckomq7gel12od17leoc7q9l5c'}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      onDblClick={showAddLogPopup}
    >
      {logs.map((entry) => (
        <div key={entry._id}>
          <Marker
            latitude={entry.latitude}
            longitude={entry.longitude}
          >
            <div onClick={() => togglePopup({ [entry._id]: true })}>
              <svg className="map-marker" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
          </Marker>
          {showPopup[entry._id] && (
            <Popup
              latitude={entry.latitude}
              longitude={entry.longitude}
              closeButton={true}
              closeOnClick={false}
              dynamicPosition={true}
              onClose={() => togglePopup({})}
              anchor="top"
            >
              <MapPopup entry={entry} />
            </Popup>
          )}
        </div>
      ))}
      {newEntry &&
      <>
        <Marker
          latitude={newEntry.latitude}
          longitude={newEntry.longitude}
        >
          <svg className="map-marker" viewBox="0 0 24 24">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </Marker>
        <Popup
          latitude={newEntry.latitude}
          longitude={newEntry.longitude}
          closeButton={true}
          closeOnClick={false}
          dynamicPosition={true}
          onClose={() => addNewEntry(null)}
          anchor="top"
        >
          <div className="popup">
            <LogEntryForm
              onClose={() => {
                addNewEntry(null);
                fetcEntries();
              }}
              location={newEntry} 
            />
          </div>
        </Popup>
      </>}
    </ReactMapGL>
  );
};

export default Map;
