import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-eyebrow">JAYGEE COUTURE</p>

          <h1>
            Elegance,
            <br />
            Designed for You.
          </h1>

          <p className="hero-description">
            Bespoke fashion and ready-to-wear designs crafted
            with intention.
          </p>

          <div className="hero-buttons">
            <a href="/by-design" className="hero-button hero-button-primary">
              Shop Ready-to-Wear
            </a>

            <a href="/couture" className="hero-button hero-button-secondary">
              Explore Couture
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;