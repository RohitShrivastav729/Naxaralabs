import logoIcon from "../../assets/NaxaraLabslogo.png";
import "../../styles/layout/footer.css";

function Footer(){
  return(
    <footer className="footer">

      <div className="container footer-center">

        <img src={logoIcon} alt="NaxaraLabs" className="footer-logo"/>

        <h2 className="footer-name">
          <span className="footer-main">Naxara</span>
          <span className="footer-accent">Labs</span>
        </h2>

        <p className="footer-tag">
          AI-Driven Digital Solutions for Modern Businesses
        </p>

        <div className="footer-divider"></div>

        <p className="footer-copy">
          © {new Date().getFullYear()} NaxaraLabs. All rights reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer;