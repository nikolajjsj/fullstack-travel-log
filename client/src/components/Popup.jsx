const MapPopup = ({ entry }) => {
  return (
    <div className="popup">
      <h4>{entry.title}</h4>
      {entry.rating && <p>Rating: {entry.rating}</p>}
      {entry.description && <p>{entry.description}</p>}
      {entry.comments && <p>{entry.comments}</p>}
      {entry.createdAt && <small>Visited on: {new Date(entry.createdAt).toLocaleDateString()}</small>}
      {entry.image && <img className="popup__image" src={entry.image} alt="Log images" />}
    </div>
  );
}

export default MapPopup;
