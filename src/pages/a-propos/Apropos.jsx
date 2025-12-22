import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Collapse.css";
import "./Apropos.css";

// Composant Collapse réutilisable
const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse-container">
      <button onClick={() => setIsOpen(!isOpen)} className="collapse-button">
        <span className="collapse-title">{title}</span>
        <FaChevronDown
          className={`collapse-icon ${isOpen ? "collapse-icon-open" : ""}`}
        />
      </button>

      <div
        className={`collapse-content ${isOpen ? "collapse-content-open" : ""}`}
      >
        <div className="collapse-text">{children}</div>
      </div>
    </div>
  );
};

// Composant Banner (exemple - vous pouvez utiliser votre Banner.jsx existant)
const Banner = ({ image, title }) => {
  return (
    <div className="banner">
      <img src={image} alt={title} className="banner-image" />
      <div className="banner-overlay"></div>
    </div>
  );
};

// Page À propos
const AboutPage = () => {
  const collapseData = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.",
    },
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <Banner
          image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop"
          title="À propos"
        />

        <div className="collapses-wrapper">
          {collapseData.map((item, index) => (
            <Collapse key={index} title={item.title}>
              {item.content}
            </Collapse>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
