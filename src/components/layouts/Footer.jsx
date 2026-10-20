import { Link } from "react-router-dom";

function Footer(){
  return(
    <footer className="footer">

      <div className="container footer-inner">
        <div className="footer-brand-block">
          <Link to="/" className="footer-brand" aria-label="Naxara Labs home">
            <img src="/naxara-labs-logo.webp" alt="" className="footer-logo" width="44" height="44" />
            <span>Naxara<span>Labs</span><i>.</i></span>
          </Link>
          <p>Software shaped around the way your business works.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <a href="/#services">Services</a>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Naxara Labs. All rights reserved.</span>
          <a href="https://wa.me/918708293816?text=Hi%20NaxaraLabs%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
      </div>

    </footer>
  )
}

export default Footer;