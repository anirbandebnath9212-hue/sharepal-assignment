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

function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="google-rating">
        <span className="google-g">G</span>
        <span>★★★★★</span>
      </div>

      <p className="review-text">“ {review.review} ”</p>

      <div className="review-user">
        <div className="review-avatar">{review.initials}</div>

        <div>
          <strong>{review.name}</strong>
          <p>
            {review.location} • {review.category}
          </p>
        </div>
      </div>
    </article>
  );
}

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

      <div className="reviews-wrapper">
        <div className="reviews-track">
          {/* First set */}
          {reviews.map((review) => (
            <ReviewCard
              key={`first-${review.name}`}
              review={review}
            />
          ))}

          {/* Duplicate set for seamless infinite animation */}
          {reviews.map((review) => (
            <ReviewCard
              key={`second-${review.name}`}
              review={review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;