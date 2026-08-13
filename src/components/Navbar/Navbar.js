import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img 
            src='/images/logo/Jaygee.png'
            alt='JayGee Couture'
          />
        </Link>

        {/* Navigation */}
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/by-design">By Design</Link>
          <a href="#about">About</a>
          <a href="#couture">Couture</a>
          <a href="#footer">Contact</a>
        </div>

        {/* WhatsApp */}
        <a
          href="https://wa.me/2348058918075"
          className="navbar-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with JayGee Couture on WhatsApp"
        >
          <FaWhatsapp />
        </a>

      </div>
    </nav>
  );
}

export default Navbar;