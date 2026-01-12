import React from "react";
import "../style/components/_Footer.scss"; // N'oublie pas de créer ce fichier SCSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Colonne 1 : Logo / Marque */}
        <div className="footer__column">
          <h3 className="footer__logo">Du Regard à la Manucure</h3>
          <p>Votre institut de beauté à Aincourt.</p>
        </div>

        {/* Colonne 2 : Liens rapides */}
        <div className="footer__column">
          <h4>Liens utiles</h4>
          <ul>
            <li>
              <a href="/mentions-legales">Mentions Légales</a>
            </li>
            <li>
              <a href="/tarifs">Nos Tarifs</a>
            </li>
            <li>
              <a href="/contact">Prendre RDV</a>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Contact */}
        <div className="footer__column">
          <h4>Contact</h4>
          <p>📍 12 Rue de la Mairie, Aincourt</p>
          <p>📞 06 00 00 00 00</p>
          <p>✉️ contact@duregard.fr</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} Ernais. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
