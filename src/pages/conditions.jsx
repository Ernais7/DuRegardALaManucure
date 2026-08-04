import React from "react";
import "../style/components/_Conditions.scss";

export default function Conditions() {
  return (
    <main className="conditions">
      <section className="conditions__intro">
        <h1 className="conditions__title">Conditions de réservation</h1>
        <p className="conditions__text">
          Afin de garantir la sécurité et la qualité de chaque prestation,
          Du Regard à la Manucure applique les conditions suivantes. Merci
          de les lire attentivement avant votre prise de rendez-vous.
        </p>
      </section>

      <section className="conditions__block">
        <h2 className="conditions__blockTitle">Contre-indications</h2>
        <p className="conditions__text">
          Pour votre sécurité et celle de vos ongles, certaines prestations
          ne peuvent malheureusement pas être réalisées dans les cas
          suivants :
        </p>
        <ul className="conditions__list">
          <li>
            Les personnes de moins de 16 ans, l'ongle n'étant pas encore
            suffisamment mature, avec un risque accru de malformation.
          </li>
          <li>
            Les personnes sous traitement médicamenteux à base de
            stéroïdes ou sous antibiotiques prolongés, en raison d'un
            risque de mauvaise adhérence des produits.
          </li>
          <li>
            Toute maladie de l'ongle, comme une mycose, afin d'éviter
            tout risque de contamination.
          </li>
          <li>Les personnes allergiques aux produits utilisés.</li>
          <li>
            Les femmes enceintes au-delà du 7ème mois de grossesse, ou
            en cas d'intervention chirurgicale récente.
          </li>
        </ul>
      </section>

      <section className="conditions__block">
        <h2 className="conditions__blockTitle">Prise de rendez-vous</h2>
        <p className="conditions__text">
          Pour réserver une prestation, merci de m'envoyer un message
          privé en précisant : vos disponibilités, la prestation
          souhaitée, une photo de vos ongles ainsi que vos coordonnées
          (nom, prénom, téléphone).
        </p>
        <p className="conditions__text">
          N'hésitez pas à être la plus précise possible sur la prestation
          ou la couleur souhaitée : ne pouvant transporter l'intégralité
          de mes vernis, cela me permet de préparer au mieux votre
          rendez-vous.
        </p>
        <p className="conditions__text">
          Un acompte de 30% est demandé pour valider toute réservation, et
          une confirmation de votre part est nécessaire la veille du
          rendez-vous.
        </p>
      </section>

      <section className="conditions__block">
        <h2 className="conditions__blockTitle">Tarifs et paiement</h2>
        <ul className="conditions__list">
          <li>
            Les remplissages réalisés à l'extérieur ne sont pas acceptés.
            Dans ce cas, la dépose sera ajoutée au tarif de la prestation
            choisie.
          </li>
          <li>Les paiements s'effectuent uniquement par PayPal ou en espèces.</li>
          <li>
            Un supplément de 10€ est appliqué pour toute prestation
            réalisée un dimanche ou un jour férié.
          </li>
        </ul>
      </section>

      <section className="conditions__block">
        <h2 className="conditions__blockTitle">Prestations à domicile</h2>
        <p className="conditions__text">
          Je me déplace directement chez vous. Merci de prévoir l'espace
          nécessaire à l'installation de mon matériel (table de manucure
          et table de massage).
        </p>
      </section>
    </main>
  );
}