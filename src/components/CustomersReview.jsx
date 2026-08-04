import React, { useEffect, useRef, useState } from "react";
import "../style/components/_CustomersReview.scss";

const reviews = [
  {
    id: 1,
    name: "Noémie",
    service: "Pose semi-permanent",
    comment: "Super prestation, mes ongles sont parfaits et tiennent très bien !",
    rating: 5,
  },
  {
    id: 2,
    name: "Julie",
    service: "Rehaussement de cils",
    comment: "Un regard transformé, l'ambiance est très relaxante.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah",
    service: "Soin complet",
    comment: "Douceur et professionnalisme au rendez-vous. Je recommande.",
    rating: 4,
  },
  {
    id: 4,
    name: "Camille",
    service: "Extension de cils",
    comment: "Un résultat naturel et très soigné, je reviendrai sans hésiter.",
    rating: 5,
  },
  {
    id: 5,
    name: "Laura",
    service: "Pose gel",
    comment: "Un travail minutieux, mes ongles n'ont jamais été aussi beaux.",
    rating: 5,
  },
  {
    id: 6,
    name: "Emma",
    service: "Pédicure classique",
    comment: "Un vrai moment de détente, le résultat est impeccable.",
    rating: 4,
  },
];

function CustomersReview() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const isPaused = useRef(false);

  const goTo = (i) => {
    const newIndex = (i + reviews.length) % reviews.length;
    setIndex(newIndex);
    const card = trackRef.current?.children[newIndex];
    if (card) {
      trackRef.current.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused.current) goTo(index + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="customersReview">
      <h2 className="customersReview__title">Nos Retours Clients</h2>

      <div
        className="customersReview__carousel"
        onMouseEnter={() => (isPaused.current = true)}
        onMouseLeave={() => (isPaused.current = false)}
      >
        <button
          className="customersReview__arrow customersReview__arrow--left"
          onClick={() => goTo(index - 1)}
          aria-label="Avis précédent"
        >
          ‹
        </button>

        <div className="customersReview__track" ref={trackRef}>
          {reviews.map((review) => (
            <div key={review.id} className="customersReview__card">
              <div className="customersReview__stars">
                {"★".repeat(review.rating)}
              </div>
              <p className="customersReview__comment">"{review.comment}"</p>
              <div className="customersReview__info">
                <span className="customersReview__name">{review.name}</span>
                <span className="customersReview__service">{review.service}</span>
              </div>
            </div>
          ))}
        </div>

        <button
          className="customersReview__arrow customersReview__arrow--right"
          onClick={() => goTo(index + 1)}
          aria-label="Avis suivant"
        >
          ›
        </button>
      </div>

      <div className="customersReview__dots">
        {reviews.map((review, i) => (
          <button
            key={review.id}
            className={`customersReview__dot ${
              i === index ? "customersReview__dot--active" : ""
            }`}
            onClick={() => goTo(i)}
            aria-label={`Aller à l'avis ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default CustomersReview;