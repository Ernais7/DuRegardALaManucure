import React from "react";
import { Link } from "react-router-dom";
import "../style/components/_Prices.scss";

const priceCategories = [
  {
    title: "Manucure",
    items: [
      { name: "Pose vernis semi-permanent", price: "35 €" },
      { name: "Pose gel", price: "45 €" },
      { name: "Remplissage gel", price: "38 €" },
      { name: "Nail art (par ongle)", price: "3 €" },
    ],
  },
  {
    title: "Regard",
    items: [
      { name: "Rehaussement de cils", price: "40 €" },
      { name: "Extension de cils (pose complète)", price: "60 €" },
      { name: "Remplissage extensions", price: "35 €" },
      { name: "Restructuration sourcils", price: "20 €" },
    ],
  },
  {
    title: "Soins",
    items: [
      { name: "Soin complet mains", price: "50 €" },
      { name: "Soin découverte", price: "65 €" },
    ],
  },
];

export default function Prices() {
  return (
    <main className="prices">
      <section className="prices__intro">
        <h1 className="prices__title">Nos Tarifs</h1>
        <p className="prices__text">
          Des prestations sur-mesure pour sublimer vos mains et votre regard.
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