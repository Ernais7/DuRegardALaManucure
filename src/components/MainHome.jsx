import React from "react";
import imageMains from "../assets/Image/Accueil/imageaccueil.png";
import "../style/components/MainHome.scss";

function MainHome() {
  return (
    <div className="mainHome">
      <div className="divMains">
        <img
          className="divMains__image"
          src={imageMains}
          alt="Mains qui se tiennent"
        />
      </div>
      <div className="titles">
        <h1 className="titles__first">DU REGARD A LA MANUCURE</h1>
        <h3 className="titles__second">
          DES MAINS PARFAITES, UN REGARD <br/>ENVOÛTANT, UNE SEULE ADRESSE
        </h3>
        <h3 className="titles__three">
          SUBLIMEZ VOS CILS ET <br/>SOURCILS AVEC DES SOINS DE <br/>PRECISIONS
        </h3>
      </div>
      <div className="buttonAppointment">
        <button>Prenez rendez-vous !</button>
      </div>
    </div>
  );
}

export default MainHome;
