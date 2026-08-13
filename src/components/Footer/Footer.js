import './Footer.css';

import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaEnvelope,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="footer-main">

        {/* Brand */}

        <div className="footer-brand">

          <div className="footer-logo-wrapper">
            <img
              src="/images/logo/Jaygee.png"
              alt="JayGee Couture"
              className="footer-logo"
            />
          </div>

          <p>
            Bespoke fashion and ready-to-wear pieces
            crafted with intention.
          </p>

        </div>


        {/* Explore */}

        <div className="footer-column">

          <h3>Explore</h3>

          <a href="/">Home</a>

          <a href="#about">About</a>

          <a href="/by-design">JayGee by Design</a>

          <a href="#couture">JayGee Couture</a>

        </div>


        {/* Connect */}

        <div className="footer-column">

          <h3>Connect</h3>

          <div className="footer-socials">

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"

            >
              <FaInstagram />
            </a>

             <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
             >
                <FaFacebookF />
            </a>

            <a
              href="https://wa.me/2348058918075"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:jaygeecouture@gmail.com"
              aria-label="Email JayGee Couture"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>


        {/* Contact */}

        <div className="footer-column" id='#footer'>

          <h3>Contact</h3>

          <p>
            Available for bespoke enquiries
            and ready-to-wear orders.
          </p>

          <a
            href="mailto:jaygeecouture@gmail.com"
            className="footer-email"
          >
            jaygeecouture@gmail.com
          </a>

        </div>

      </div>


      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          © 2026 JayGee Couture. All rights reserved.
        </p>

        <p>
          Managed by Fortunella Tech.
        </p>

      </div>

    </footer>
  );
}

export default Footer;