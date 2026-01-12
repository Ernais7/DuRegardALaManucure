import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Image/Logo/logo.png"; // Vérifie que ton chemin d'image est bon
import "../style/components/_Header.scss";

function Header() {
  // Création de l'état pour gérer l'ouverture du menu
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état (ouvert <-> fermé)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fonction pour fermer le menu quand on clique sur un lien
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bar">
      {/* 1. Le Logo */}
      <div className="bar__logo">
        <img src={logo} alt="Logo" className="bar__logo--image" />
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
      {/* On ajoute une classe conditionnelle "open" si isOpen est vrai */}
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
