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
          <div key={location.id} className="appartment-card">
            <img
              src={location.cover}
              alt={location.title}
              className="appartment-image"
            />
            <div className="appartment-card-content">
              <h3 className="appartment-title">{location.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Appartments };


/* Notes:
// Navlink > diriger vers une url (url de l'appartement)
// 
useParams > récupérer les infos de l'url (id contenu dans l'url de l'appartement)
// 
// find > comparer l'id de l'url avec toutes les id de l'appart pour check si il existe si il n'existe pas = error 404*/