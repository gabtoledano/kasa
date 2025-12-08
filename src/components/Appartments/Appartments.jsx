import "./Appartments.css";

const Appartments = () => {
  const locations = [
    { id: 1, title: "Titre de la location" },
    { id: 2, title: "Titre de la location" },
    { id: 3, title: "Titre de la location" },
    { id: 4, title: "Titre de la location" },
    { id: 5, title: "Titre de la location" },
    { id: 6, title: "Titre de la location" },
  ];

  return (
    <div className="appartments-container">
      <div className="appartments-wrapper">
        <div className="appartments-grid">
          {locations.map((location) => (
            <div key={location.id} className="appartment-card">
              <div className="appartment-card-content">
                <h3 className="appartment-title">{location.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Appartments };