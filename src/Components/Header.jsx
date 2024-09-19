import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../style/Header/Header.scss";

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <Link to="/" className="acceuilLink">
          Accueil
        </Link>{" "}
        {/* Utiliser Link pour créer un lien */}
        <span>Profil</span>
        <span>Réglage</span>
        <span className="communaute">Communauté</span>
      </nav>
    </header>
  );
}

export default Header;
