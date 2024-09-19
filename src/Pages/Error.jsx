import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <>
      <h1>Erreur</h1>
      <nav>
        <NavLink to="/" aria-label="Revenir à l'accueil">
          revenir à la page d'acceuil
        </NavLink>
      </nav>
    </>
  );
}
