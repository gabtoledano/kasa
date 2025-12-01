import "./Navbar.css";
import { NavLink } from "react-router";

function Navbar() {
  const menus = [
    {
      link: "/",
      label: "Accueil",
    },
    { link: "/a-propos", label: "À Propos" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.svg" alt="Logo Kasa" />
      </div>

      <ul className="navbar-menu">
        {menus.map((menu) => (
          <li key={menu.link}>
            <button>
              <NavLink to={menu.link}>{menu.label}</NavLink>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
