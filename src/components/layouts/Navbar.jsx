import { Link } from "react-router-dom";
import logoIcon from "../../assets/NaxaraLabslogo.png";
import "../../styles/layout/navbar.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        {/* LOGO + TEXT */}
        <Link to="/" className="brand">
          <img src={logoIcon} alt="NaxaraLabs" className="brand-icon" />
          <span className="brand-text">
            <span className="brand-main">Naxara</span>
            <span className="brand-accent">Labs</span>
          </span>
        </Link>

        {/* NAV LINKS */}
        {/* MOBILE MENU BUTTON */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* NAV LINKS */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
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
