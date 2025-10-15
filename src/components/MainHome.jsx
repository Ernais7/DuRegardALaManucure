import React from "react";
import imageHand from "../assets/Image/Accueil/imageaccueil.png";
import "../style/components/MainHome.scss";

function MainHome() {
  return (
    <div className="mainHome">
      <div className="divHand">
        <img
          className="divHand__image"
          src={imageHand}
          alt="Mains qui se touchent"
        />
      </div>
      <div className="titles">
        <h1 className="titles__first">DU REGARD A LA MANUCURE</h1>
        <h3 className="titles__second">
          DES MAINS PARFAITES, UN REGARD <br />
          ENVOÛTANT, UNE SEULE ADRESSE !
        </h3>
        <h3 className="titles__three">
          SUBLIMEZ VOS CILS ET <br />
          SOURCILS AVEC DES SOINS DE <br />
          PRECISIONS
        </h3>
      </div>
      <div className="buttonHand">
        <button className="buttonHand__Appointment">
          Prendre rendez-vous !
        </button>
      </div>
    </div>
  );
}

export default MainHome;
