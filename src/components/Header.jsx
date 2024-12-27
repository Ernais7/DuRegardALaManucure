import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Image/Logo/logo.png";
import '../style/components/Header.scss';


function Header() {
  return (
    <header className="bar">
      <div className="bar__logo">
        <img className="bar__logo--image" src={logo} alt="Logo du site" />
      </div>
      <div className="bar__nav">
        <ul className="bar__list">
          <li className="bar__list-item">
            <NavLink className="bar__link" to="/about">A propos</NavLink>
          </li>
          <li className="bar__list-item">
            <NavLink className="bar__link" to="/services">Prestations</NavLink>
          </li>
          <li className="bar__list-item">
            <NavLink className="bar__link" to="/contact">Contact</NavLink>
          </li>
          <li className="bar__list-item">
            <NavLink className="bar__link" to="/prices">Nos Tarifs</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
