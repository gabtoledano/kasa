import { NavLink } from "react-router-dom";
import locationsData from "../../data/locations.json";
import "./Appartments.css";

const Appartments = () => {
  const locations = locationsData.map((location) => ({
    id: location.id,
    title: location.title,
    cover: location.cover,
  }));

  return (
    <div className="appartments-container">
      <div className="appartments-grid">
        {locations.map((location) => (
          <NavLink
            key={location.id}
            to={`/appartements/${location.id}`}
            className="appartment-card-link"
          >
            <div className="appartment-card">
              <img
                src={location.cover}
                alt={location.title}
                className="appartment-image"
              />
              <div className="appartment-card-content">
                <h3 className="appartment-title">{location.title}</h3>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export { Appartments };
