function Footer() {
  return (
    <footer className="sharepal-footer">

      {/* Statistics */}
      <section className="footer-stats">
        <div className="footer-stat">
          <strong>250Cr+</strong>
          <span>Saved Together</span>
        </div>

        <div className="footer-stat">
          <strong>4.5M Kg</strong>
          <span>CO₂e Emissions Saved</span>
        </div>

        <div className="footer-stat">
          <strong>100K+</strong>
          <span>Products in Circulation</span>
        </div>
      </section>


      {/* Main footer */}
      <div className="footer-main">

        <div className="footer-brand">
          <div className="footer-logo">
            Share<span>Pal</span>
          </div>

          <p>
            Rent the things you need and share the things
            you don't. Save money, reduce waste and live
            better with SharePal.
          </p>

          <div className="footer-socials">
            <button>Instagram</button>
            <button>Facebook</button>
            <button>LinkedIn</button>
          </div>
        </div>


        <div className="footer-column">
          <h3>SharePal</h3>

          <a href="#">About Us</a>
          <a href="#">How It Works</a>
          <a href="#">Contact Us</a>
          <a href="#">Careers</a>
          <a href="#">FAQs</a>
        </div>


        <div className="footer-column">
          <h3>Popular Categories</h3>

          <a href="#">Gaming</a>
          <a href="#">Photography</a>
          <a href="#">Outdoor</a>
          <a href="#">PS5 on Rent</a>
          <a href="#">Gaming Consoles</a>
        </div>


        <div className="footer-column">
          <h3>For Partners</h3>

          <a href="#">Become an Asset Partner</a>
          <a href="#">Rent Out Your Gear</a>
          <a href="#">Earn With Us</a>
          <a href="#">Partner Login</a>
        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">
        <span>© 2026 SharePal. All rights reserved.</span>

        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;