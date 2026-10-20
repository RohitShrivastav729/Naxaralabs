import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="Naxara Labs home" onClick={() => setMenuOpen(false)}>
          <img src="/naxara-labs-logo.webp" alt="" className="brand-icon" width="60" height="60" />
          <span className="brand-text">
            <span className="brand-main">Naxara</span>
            <span className="brand-accent">Labs<span className="brand-period">.</span></span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="menu-lines" aria-hidden="true"><i /><i /></span>
        </button>

        <nav id="primary-navigation" className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <a href="/#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink className="nav-contact-mobile" to="/contact" onClick={() => setMenuOpen(false)}>
            Discuss a project <span aria-hidden="true">↗</span>
          </NavLink>
        </nav>
        <Link className="nav-cta" to="/contact">Discuss a project <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}

export default Navbar;
