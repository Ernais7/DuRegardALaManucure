import React from "react";
import { Link } from "react-router-dom";
import "../style/components/_About.scss";

export default function About() {
  return (
    <main className="about">
      <section className="about__intro">
        <h1 className="about__title">À propos de nous</h1>
        <p className="about__text">
          Bienvenue chez Du Regard à la Manucure, votre institut de beauté
          à Aincourt. Ici, chaque rendez-vous est pensé comme une parenthèse
          de douceur, où le soin du détail rencontre une véritable expertise
          des mains et du regard.
        </p>
        <p className="about__text">
          Passionnée par la beauté et le bien-être, je mets mon savoir-faire
          au service de votre confiance en vous, dans une ambiance chaleureuse
          et raffinée, pensée pour vous ressembler.
        </p>
      </section>

      <section className="about__values">
        <h2 className="about__subtitle">Notre philosophie</h2>
        <ul className="about__list">
          <li>Un accueil personnalisé, à l'écoute de vos envies</li>
          <li>Des techniques précises et des produits de qualité</li>
          <li>Une hygiène irréprochable à chaque prestation</li>
          <li>Une ambiance apaisante pour un vrai moment pour soi</li>
        </ul>
      </section>

      <section className="about__cta">
        <p className="about__text">
          Envie de découvrir nos prestations ou de prendre rendez-vous ?
        </p>
        <Link to="/services" className="about__button">
          Découvrir nos prestations
        </Link>
      </section>
    </main>
  );
}