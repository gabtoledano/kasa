import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import locationsData from "../../data/locations.json";
import NotFound from "../NotFound/NotFound.jsx";
import Slideshow from "../../components/Slideshow/Slideshow.jsx";
import "./AppartmentDetail.css";

function AppartmentDetail() {
  const { id } = useParams();
  const apartment = locationsData.find((location) => location.id === id);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(true);

  if (!apartment) {
    return <NotFound />;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? "filled" : ""}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="apartment-detail-container">
      <Slideshow images={apartment.pictures} />

      <div className="apartment-header">
        <div className="apartment-info-left">
          <h1>{apartment.title}</h1>
          <p className="apartment-location">{apartment.location}</p>

          <div className="apartment-tags">
            {apartment.tags &&
              apartment.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
          </div>
        </div>

        <div className="apartment-info-right">
          <div className="apartment-host">
            <p className="host-name">{apartment.host.name}</p>
            <img
              src={apartment.host.picture}
              alt={apartment.host.name}
              className="host-picture"
            />
          </div>

          <div className="apartment-rating">
            {renderStars(parseInt(apartment.rating))}
          </div>
        </div>
      </div>

      <div className="apartment-details-section">
        <div className="accordion">
          <button
            className="accordion-header"
            onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
          >
            Description
            <span
              className={`accordion-icon ${isDescriptionOpen ? "open" : ""}`}
            >
              ▼
            </span>
          </button>
          {isDescriptionOpen && (
            <div className="accordion-content">
              <p>{apartment.description}</p>
            </div>
          )}
        </div>

        <div className="accordion">
          <button
            className="accordion-header"
            onClick={() => setIsEquipmentsOpen(!isEquipmentsOpen)}
          >
            Équipements
            <span
              className={`accordion-icon ${isEquipmentsOpen ? "open" : ""}`}
            >
              ▼
            </span>
          </button>
          {isEquipmentsOpen && (
            <div className="accordion-content">
              <ul>
                {apartment.equipments &&
                  apartment.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <Link to="/" className="back-link">
        ← Retour à l'accueil
      </Link>
    </div>
  );
}

export default AppartmentDetail;
