import products from "../data/products";

function Hero() {
  const ps5 = products.find((product) =>
    product.name.toLowerCase().includes("ps5")
  );

  const xbox = products.find((product) =>
    product.name.toLowerCase().includes("xbox")
  );

  const vr = products.find((product) =>
    product.name.toLowerCase().includes("oculus")
  );

  return (
    <section className="gaming-hero">
      {/* Left product */}
      {xbox && (
        <img
          src={xbox.image}
          alt="Xbox gaming console"
          className="hero-product hero-xbox"
        />
      )}

      {/* Main content */}
      <div className="hero-content">
        <h1>Gaming Consoles</h1>

        <p>
          Rent the latest gaming gadgets from{" "}
          <strong>SharePal</strong>, PS5, Xbox,
          <br />
          Oculus VR, Racing Wheel on rent.
        </p>

        <div className="hero-brands">
          <span>◉ XBOX</span>
          <span>◉ PS5</span>
          <span>◉ Meta</span>
        </div>
      </div>

      {/* Right PS5 */}
      {ps5 && (
        <img
          src={ps5.image}
          alt="PS5 gaming console"
          className="hero-product hero-ps5"
        />
      )}

      {/* VR */}
      {vr && (
        <img
          src={vr.image}
          alt="VR headset"
          className="hero-product hero-vr"
        />
      )}

      <div className="hero-glow hero-glow-left"></div>
      <div className="hero-glow hero-glow-right"></div>
    </section>
  );
}

export default Hero;