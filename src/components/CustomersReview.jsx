import React from "react";
import "../style/components/_CustomersReview.scss";

function CustomersReview() {
  const reviews = [
    {
      id: 1,
      name: "Noémie",
      service: "Pose semi-permanent",
      comment:
        "Super prestation, mes ongles sont parfaits et tiennent très bien !",
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
  ];

  return (
    <section className="customersReview">
      <h2 className="customersReview__title">Nos Retours Clients</h2>

      <div className="customersReview__container">
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
    </section>
  );
}

export default CustomersReview;
