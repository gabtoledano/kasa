import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import locationsData from "../../data/locations.json";
import NotFound from "../NotFound/NotFound.jsx";
import Slideshow from "../../components/Slideshow/Slideshow.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import "./AppartmentDetail.css";

function AppartmentDetail() {
  const { id } = useParams();
  const apartment = locationsData.find((location) => location.id === id);

  if (!apartment) {
    return <NotFound />;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar key={i} className={`star ${i <= rating ? "filled" : ""}`} />
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
        <Collapse title="Description">
          <p>{apartment.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {apartment.equipments &&
              apartment.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default AppartmentDetail;
