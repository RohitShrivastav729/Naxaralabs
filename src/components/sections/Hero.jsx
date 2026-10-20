import { Link } from "react-router-dom";
import "../../styles/sections/hero.css";

function Hero(){
  return(
    <section className="hero">
      <div className="container hero-inner">
        <h1>
          Websites, web apps and mobile apps for your business
        </h1>

        <p>
          Naxara Labs develops business websites, full-stack web applications, Android and iOS apps, and custom workflow automation for small businesses, startups, and entrepreneurs.
        </p>

        <div className="hero-buttons">
          <Link
            className="primary-btn"
            to="/contact"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;