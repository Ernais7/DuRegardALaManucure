import React from "react";
import "../style/components/_Done.scss";
import img1 from "../assets/Image/Accueil/doneImg1.png";
import img2 from "../assets/Image/Accueil/doneImg2.png";
import img3 from "../assets/Image/Accueil/doneImg3.png";

function Done() {
  return (
    <section className="doneContain">
      <div className="doneContain__title">
        <h4 className="doneContain__title--string">Nos réalisations...</h4>
      </div>
      <div className="doneContain__images">
        <img className="doneContain__images--pic" src={img1} alt="" />
        <img className="doneContain__images--pic" src={img2} alt="" />
        <img className="doneContain__images--pic" src={img3} alt="" />
      </div>
    </section>
  );
}
export default Done;
