import logo from "../assets/logo.png"
import "../style/Header/Header.scss";


function Header () {
  return (
    <header>
      <nav>
        <img src={logo} alt='logo' />
        <span> Accueil </span>
        <span> Profil </span>
        <span> Réglage </span>
        <span className='communaute'> Communauté </span>
      </nav>
    </header>

  )
}

export default Header