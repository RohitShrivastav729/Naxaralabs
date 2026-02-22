import { useNavigate } from "react-router-dom";
import "../../styles/sections/hero.css";

function Hero(){
  const navigate = useNavigate();

  return(
    <section className="hero">
      <div className="container hero-inner">
        <h1>
          AI-Driven Digital Solutions <br/> for Modern Businesses
        </h1>

        <p>
          NaxaraLabs engineers intelligent web and mobile applications powered 
          by modern AI technologies to help businesses scale faster and operate smarter.
        </p>

        <div className="hero-buttons">
          <button 
            className="primary-btn"
            onClick={() => navigate("/contact")}
          >
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero;