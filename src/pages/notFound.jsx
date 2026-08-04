import React from "react";
import { Link } from "react-router-dom";
import "../style/components/_NotFound.scss";

export default function NotFound() {
  return (
    <main className="notFound">
      <p className="notFound__code">404</p>
      <h1 className="notFound__title">Page introuvable</h1>
      <p className="notFound__text">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link to="/" className="notFound__button">
        Retour à l'accueil
      </Link>
    </main>
  );
}