import { useParams } from "react-router-dom";
import locationsData from "../../data/locations.json";
import NotFound from "../../components/NotFound/NotFound.jsx";
import "./AppartmentDetail.css";

function ApartmentDetail() {
  const { id } = useParams();

  const apartment = locationsData.find((location) => location.id === id);

  if (!apartment) {
    return <NotFound />;
  }

  return (
    <div className="apartment-detail-container">
      <h1>{apartment.title}</h1>
      <img
        src={apartment.cover}
        alt={apartment.title}
        className="apartment-detail-image"
      />
      <div className="apartment-info-card">
        <p>{apartment.location}</p>
        <p>{apartment.host.name}</p>
        <p>{apartment.rating}</p>
        <div className="apartment-tags">
          {apartment.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="apartment-description">
          <h3>Description</h3>
          <p>{apartment.description}</p>
        </div>
        <div className="apartment-equipments">
          <h3>Équipements</h3>
          <ul>
            {apartment.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ApartmentDetail;
