const reviews = [
  {
    initials: "SB",
    name: "Satyaki",
    location: "Kolkata",
    category: "Trending Gear",
    review:
      "I would recommend SharePal for anybody looking to rent trekking gears, on time delivery, condition of products delivered were very good, super transparent deposit return.",
  },
  {
    initials: "AS",
    name: "Afrana",
    location: "Bangalore",
    category: "Gaming Console",
    review:
      "Have used their services twice now. They never disappoint. Quick responses, polite, transparent, hassle free, great products as well.",
  },
  {
    initials: "KK",
    name: "Kanthikiran",
    location: "Bangalore",
    category: "Riding Gear",
    review:
      "It's an amazing service, starting from the quality of the gear provided to the pickup and drop at doorstep facility.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">

      <div className="breadcrumb">
        <span>Bangalore</span>
        <span>›</span>
        <strong>Gaming gadgets on rent</strong>
      </div>

      <h2>
        Served more than <span>1 Lakh Orders</span>
      </h2>

      <div className="reviews-grid">

        {reviews.map((review) => (
          <article
            className="review-card"
            key={review.name}
          >

            <div className="google-rating">
              <span className="google-g">G</span>

              <span>★★★★★</span>
            </div>

            <p className="review-text">
              “ {review.review} ”
            </p>

            <div className="review-user">

              <div className="review-avatar">
                {review.initials}
              </div>

              <div>
                <strong>{review.name}</strong>

                <p>
                  {review.location} • {review.category}
                </p>
              </div>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;