import React from "react";
import { Link } from "react-router-dom";
import "../style/components/_Prices.scss";

const priceCategories = [
  {
    title: "Mains",
    items: [
      { name: "Semi-permanent", price: "35 €" },
      { name: "Dépose/ Pose semi-permanent", price: "45 €" },
      { name: "Depose semi-permanent", price: "10 €" },
      { name: "Gel X", price: "50 €" },
      { name: "Pose / depose Gel X", price: "60 €" },
      { name: "Depose Gel X", price: "20 €" },
      { name: "Dépose pose extérieure", price: "20 €" },
      { name: "Renfort ongles naturels", price: "40 €" },
      { name: "Remplissage", price: "50 €" },
      { name: "Soin Manucure + Vernis simple", price: "20 €" },
      { name: "Decoration", price: "5 €" },
      { name: "Nail Art", price: "1 € / doigt" },
      { name: "Baby Bloomer / French", price: "10 €" },
      { name: "Camaieu de couleurs", price: "5 €" },
    ],
  },
  {
    title: "Pieds",
    items: [
      { name: "Semi-Permanent", price: "40 €" },
      { name: "Dépose/pose semi-permanent", price: "45 €" },
      { name: "Beauté des pieds complète", price: "50 €" },
      { name: "Beauté des pieds + Semi permanent", price: "60 €" },
      { name: "Dépose semi-permanent", price: "15 €" },
      { name: "Soin + vernis classique", price: "20 €" },
    ],
  },
];

export default function Prices() {
  return (
    <main className="prices">
      <section className="prices__intro">
        <h1 className="prices__title">Nos Tarifs</h1>
        <p className="prices__text">
          Des prestations sur-mesure pour sublimer vos mains et vos pieds.
          Tarifs indicatifs, n'hésitez pas à nous contacter pour toute
          question.
        </p>
      </section>

      <section className="prices__categories">
        {priceCategories.map((category) => (
          <div className="prices__category" key={category.title}>
            <h2 className="prices__categoryTitle">{category.title}</h2>
            <ul className="prices__list">
              {category.items.map((item) => (
                <li className="prices__item" key={item.name}>
                  <span className="prices__itemName">{item.name}</span>
                  <span className="prices__itemDots" />
                  <span className="prices__itemPrice">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="prices__cta">
        <p className="prices__text">
          Une question sur nos prestations ou nos tarifs ?
        </p>
        <Link to="/contact" className="prices__button">
          Nous contacter
        </Link>
      </section>
    </main>
  );
}