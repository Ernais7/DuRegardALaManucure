import "../style/components/_Contact.scss";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Message de ${formData.name} via le site`
    );
    const body = encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\n\nMessage :\n${formData.message}`
    );

    window.location.href = `mailto:duregardalamanucure@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact">
      <section className="contact__intro">
        <h1 className="contact__title">Contactez-nous</h1>
        <p className="contact__text">
          Une question, une envie de rendez-vous ? Écrivez-nous, nous vous
          répondrons avec plaisir.
        </p>
      </section>

      <section className="contact__content">
        <div className="contact__infos">
          <h2 className="contact__subtitle">Nos coordonnées</h2>
          <p className="contact__infoLine">📍 13 résidence les cadenas, 95510, Aincourt</p>
          <p className="contact__infoLine">📞 0763740471</p>
          <p className="contact__infoLine">✉️ duregardalamanucure@gmail.com</p>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="contact__label" htmlFor="name">
            Nom
          </label>
          <input
            className="contact__input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className="contact__label" htmlFor="email">
            Email
          </label>
          <input
            className="contact__input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="contact__label" htmlFor="message">
            Message
          </label>
          <textarea
            className="contact__textarea"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button className="contact__button" type="submit">
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
}