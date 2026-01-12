import React from "react";
import imageServices from "../assets/Image/Accueil/serviceImg.png";
import "../style/components/_ServicesBanner.scss";

function ServicesBanner() {
  return (
    <section className="servicesBanner">
      <div className="servicesBanner__imageContainer">
        <img
          className="servicesBanner__image"
          src={imageServices}
          alt="Clients qui reçois une prestation"
        />
      </div>
      <div className="servicesBanner__textContainer">
        <h4 className="servicesBanner__title">
          Votre insitut de beauté à Aincourt
        </h4>
        <p className="servicesBanner__description">
          Chez Du Regard à la Manucure, révélez l’éclat de <br />
          vos mains et l’intensité de votre regard <br />dans une ambiance chaleureuse
          et raffinée.
        </p>
        <div className="servicesBanner__buttonContainer">
          <button className="servicesBanner__button">Nos prestations</button>
        </div>
      </div>
    </section>
  );
}

export default ServicesBanner;
