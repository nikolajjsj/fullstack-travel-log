import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = ({ logs }) => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 2
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle={'mapbox://styles/niko2931/ckomq7gel12od17leoc7q9l5c'}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default Map
