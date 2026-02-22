import { Link } from "react-router-dom";
import logoIcon from "../../assets/NaxaraLabslogo.png";
import "../../styles/layout/navbar.css";

function Navbar(){
  return(
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
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  )
}

export default Navbar;