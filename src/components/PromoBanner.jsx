function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="promo-content">
        <h2>
          Become an <span>Asset Partner.</span> Earn Monthly.
        </h2>

        <div className="promo-benefits">

          <div className="promo-benefit">
            <small>EARNING BENEFITS</small>
            <strong>Monthly<br />Earnings</strong>
            <p>From rental assets</p>
          </div>

          <div className="promo-benefit">
            <small>UPTO</small>
            <strong>₹10,000</strong>
            <p>Instant Wallet credits</p>
          </div>

          <div className="promo-benefit">
            <small>RENTAL BENEFITS</small>
            <strong>10% Off</strong>
            <p>Exclusive discount when you rent</p>
          </div>

          <div className="promo-benefit">
            <small>RENTAL BENEFITS</small>
            <strong>Get 10% Cashback</strong>
            <p>On every order</p>
          </div>

        </div>

        <button className="promo-button">
          Know More ↗
        </button>
      </div>

      <div className="promo-decoration">
        🎮
      </div>
    </section>
  );
}

export default PromoBanner;