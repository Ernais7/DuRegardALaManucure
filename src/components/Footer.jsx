import React from "react";
import logo from "../assets/Image/Logo/logo.png";
import "../style/components/_Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Colonne 1 : Logo / Marque */}
        <div className="footer__column">
          <div className="bar__logo">
            <img src={logo} alt="Logo" className="bar__logo--image" />
          </div>
          <p>Votre institut de beauté à Aincourt.</p>
        </div>

        {/* Colonne 2 : Liens rapides */}
        <div className="footer__column">
          <h4>Liens utiles</h4>
          <ul>
            <li>
              <Link to="/mentions-legales">Mentions Légales</Link>
            </li>
            <li>
              <Link to="/prices">Nos Tarifs</Link>
            </li>
            <li>
              <Link to="/contact">Prendre RDV</Link>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Contact */}
        <div className="footer__column">
          <h4>Contact</h4>
          <p>📍 13 résidence les cadenas, 95510, Aincourt</p>
          <p>📞 07 63 74 04 71</p>
          <p>✉️ duregardalamanucure@gmail.com</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} Ernais. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
