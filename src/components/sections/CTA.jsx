import { useNavigate } from "react-router-dom";
import "../../styles/sections/cta.css";

function CTA(){
  const navigate = useNavigate();

  return(
    <section className="cta">
      <div className="container">

        <div className="cta-box">
          <h2>Let’s Build Something Powerful Together</h2>

          <p>
            Partner with NaxaraLabs to design and develop intelligent digital 
            solutions that drive real business growth.
          </p>

          <div className="cta-buttons">
            <button 
              className="cta-primary"
              onClick={() => navigate("/contact")}
            >
              Book Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CTA;