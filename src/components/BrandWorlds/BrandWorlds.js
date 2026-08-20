import './BrandWorlds.css';

function BrandWorlds() {
  return (
    <section className="brand-worlds">

      <div className="brand-worlds-heading">
        <p className="brand-worlds-eyebrow">
          THE JAYGEE EXPERIENCE
        </p>

        <h2>
          Two expressions.
          <br />
          One signature.
        </h2>
      </div>

      <div className="brand-worlds-grid">

        {/* JayGee Couture */}

        <article className="brand-world-card couture-card">

          <div className="brand-world-overlay">

            <div className="brand-world-content">

              <p className="brand-world-label">
                BESPOKE
              </p>

              <h3>
                JayGee Couture
              </h3>

              <p>
                Thoughtfully crafted pieces designed
                specifically for you.
              </p>

              <a href="#couture">
                Explore Couture →
              </a>

            </div>

          </div>

        </article>

        {/* JayGee by Design */}

        <article className="brand-world-card design-card">

          <div className="brand-world-overlay">

            <div className="brand-world-content">

              <p className="brand-world-label">
                READY-TO-WEAR
              </p>

              <h3>
                JayGee by Design
              </h3>

              <p>
                Beautiful ready-to-wear pieces
                available to order.
              </p>

              <a href="/by-design">
                Shop the Collection →
              </a>

            </div>

          </div>

        </article>

      </div>

    </section>
  );
}

export default BrandWorlds;