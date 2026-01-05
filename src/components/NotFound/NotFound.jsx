import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2>Appartement introuvable</h2>
      <p className="notfound-message">
        Désolé, cet appartement n'existe pas ou a été supprimé.
      </p>
      
      <Link to="/" className="notfound-link">
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default NotFound;