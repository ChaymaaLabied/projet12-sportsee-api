import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Home/Home.scss";

export default function Home() {
  return (
    <>
      <h1>Bienvenue sur SportSee : </h1>
      <nav aria-label="lien vers les comptes">
        <ul className="nav">
          <li className="nav__item">
            <NavLink
              to="/user/12"
              aria-label="aller vers la page des données de Karl"
              className="nav__item--link"
            >
              Karl
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/user/18"
              aria-label="aller vers la page des données de Cecilia"
              className="nav__item--link"
            >
              Cecilia
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
