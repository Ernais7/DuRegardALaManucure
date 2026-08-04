import React from "react";
import { Link } from "react-router-dom";
import "../style/components/_Services.scss";

const serviceCategories = [
  {
    title: "Manucure - Pédicure - Regard",
    items: [
      {
        name: "Manucure classique",
        description:
          "Soin des mains comprenant limage des ongles et entretien des cuticules, pour un résultat net et élégant.",
      },
      {
        name: "Pose vernis semi-permanent",
        description:
          "Une tenue impeccable jusqu'à 3 semaines, dans la couleur de votre choix.",
      },
      {
        name: "Pose gel",
        description:
          "Renforcement et allongement de l'ongle naturel, pour un résultat durable.",
      },
      {
        name: "Pose à l'américaine",
        description:
          "Décorations personnalisées pour sublimer chaque ongle selon vos envies.",
      },
      {
        name: "Nail Art",
        description:
          "Décorations personnalisées pour sublimer chaque ongle selon vos envies.",
      },
      {
        name: "Pédicure classique",
        description:
          "Soin des pieds comprenant limage des ongles et entretien des cuticules, pour un résultat net et élégant.",
      },
      {
        name: "Beauté des pieds complète",
        description:
          "Soin complet des pieds avec gommage, retrait des cuticules et des callosités, suivi d'un massage relaxant. Vernis non inclus.",
      },
      {
        name: "Vernis des pieds semi-permanent",
        description:
          "Une couleur éclatante et une tenue impeccable jusqu'à 3 semaines, pour des pieds soignés durablement.",
      },
      {
        name: "Rehaussement de cils",
        description:
          "Un regard ouvert et intense, sans extension, pour un effet naturel.",
      },
    ],
  },
];

export default function Services() {
  return (
    <main className="services">
      <section className="services__intro">
        <h1 className="services__title">Nos Prestations</h1>
        <p className="services__text">
          Des soins pensés pour révéler l'éclat de vos mains et l'intensité de
          votre regard, dans une ambiance chaleureuse et raffinée.
        </p>
      </section>

      <section className="services__categories">
        {serviceCategories.map((category) => (
          <div className="services__category" key={category.title}>
            <h2 className="services__categoryTitle">{category.title}</h2>
            <div className="services__grid">
              {category.items.map((item) => (
                <div className="services__card" key={item.name}>
                  <h3 className="services__cardTitle">{item.name}</h3>
                  <p className="services__cardText">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="services__cta">
        <p className="services__text">
          Retrouvez le détail de nos tarifs ou prenez rendez-vous dès
          maintenant.
        </p>
        <div className="services__ctaButtons">
          <Link to="/prices" className="services__button">
            Voir les tarifs
          </Link>
          <Link
            to="/contact"
            className="services__button services__button--outline"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </main>
  );
}
