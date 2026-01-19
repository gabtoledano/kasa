import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>

      <Link to="/" className="notfound-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default NotFound;
