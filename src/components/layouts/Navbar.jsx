import { Link } from "react-router-dom";
import "../../styles/layout/navbar.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        {/* LOGO + TEXT */}
        <Link to="/" className="brand">
          <img src="/naxara-labs-logo.webp" alt="Naxara Labs" className="brand-icon" width="60" height="60" />
          <span className="brand-text">
            <span className="brand-main">Naxara</span>
            <span className="brand-accent">Labs</span>
          </span>
        </Link>

        {/* NAV LINKS */}
        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* NAV LINKS */}
        <nav id="primary-navigation" className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
