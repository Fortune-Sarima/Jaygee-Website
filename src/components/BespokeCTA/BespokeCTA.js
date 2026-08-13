import './BespokeCTA.css';

function BespokeCTA() {
  const whatsappNumber = '2348058918075';

  const message = encodeURIComponent(
    "Hello JayGee Couture, I'd like to make an enquiry about a bespoke outfit."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="bespoke-cta" id="couture">

      <div className="bespoke-cta-content">

        <p className="bespoke-cta-eyebrow">
          JAYGEE COUTURE
        </p>

        <h2>
          Something made
          <br />
          just for you?
        </h2>

        <p className="bespoke-cta-description">
          From your vision to the finished piece,
          let's create something uniquely yours.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bespoke-cta-button"
        >
          Start a Bespoke Enquiry →
        </a>

      </div>

      <div className="bespoke-cta-image">
        <img
          src="/images/hero/C2 (1).jpg"
          alt="JayGee Couture bespoke design"
        />
      </div>

    </section>
  );
}

export default BespokeCTA;