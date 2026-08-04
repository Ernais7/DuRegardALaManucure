import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Image/Logo/logo.png";
import "../style/components/_Header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bar">
      {/* 1. Le Logo */}
      <div className="bar__logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="bar__logo--image" />
        </Link>
      </div>

      {/* 2. Le Bouton Burger (Visible uniquement sur mobile via CSS) */}
      <div
        className={`bar__burger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </div>

      {/* 3. La Navigation */}
      <nav className={`bar__nav ${isOpen ? "open" : ""}`}>
        <ul className="bar__list">
          <li className="bar__list-item">
            <Link to="/" className="bar__link" onClick={closeMenu}>
              Accueil
            </Link>
          </li>
          <li className="bar__list-item">
            <Link to="/about" className="bar__link" onClick={closeMenu}>
              A propos
            </Link>
          </li>
          <li className="bar__list-item">
            <Link to="/services" className="bar__link" onClick={closeMenu}>
              Prestations
            </Link>
          </li>
          <li className="bar__list-item">
            <Link to="/contact" className="bar__link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li className="bar__list-item">
            <Link to="/prices" className="bar__link" onClick={closeMenu}>
              Nos Tarifs
            </Link>
          </li>
          <li className="bar__list-item">
            <Link to="/conditions" className="bar__link" onClick={closeMenu}>
              Conditions
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
