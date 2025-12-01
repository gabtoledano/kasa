import "../styles/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar__logo">
            <img src="logo-kasa.png" alt="Logo Kasa" />
        </div>
        <ul className="navbar__menu">
            <li><a href="accueil">Acceuil</a></li>
            <li><a href="apropos">A Propos</a></li>
        </ul>
    
    </nav>
  )
}

export default Navbar