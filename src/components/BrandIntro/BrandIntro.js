import './BrandIntro.css';

function BrandIntro() {
  return (
    <section className="brand-intro" id='about'>
      <div className="brand-intro-container">

        <div className="brand-intro-content">

          <p className="brand-intro-eyebrow">
            THE JAYGEE STORY
          </p>

          <h2>
            Where creativity meets
            craftsmanship.
          </h2>

          <p className="brand-intro-text">
            JayGee Couture is a fashion brand dedicated to creating
            beautiful, thoughtfully crafted pieces that celebrate
            individuality and timeless style.
          </p>

          <p className="brand-intro-text">
            From bespoke creations made especially for you to
            ready-to-wear designs you can shop and enjoy,
            every piece carries the JayGee signature.
          </p>

          <a href="#about" className="brand-intro-link">
            Discover JayGee →
          </a>

        </div>

        <div className="brand-intro-image">
          <img
            src="/images/about/F3.jpg"
            alt="JayGee Couture design"
          />
        </div>

      </div>
    </section>
  );
}

export default BrandIntro;