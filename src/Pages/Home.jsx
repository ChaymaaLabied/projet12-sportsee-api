import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Bienvenue sur SportSee</h1>
      <nav aria-label="x">
          <ul className="nav">
            <li className="nav__item">
              <NavLink
                to="/user/12"
                aria-label="Revenir à l'accueil"
                className="nav__link"
              >
                Karl
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/user/18"
                aria-label="aller à la page à propos"
                className="nav__link"
              >
                Cecilia
              </NavLink>
            </li>
          </ul>
        </nav>
    </>
  );
}
