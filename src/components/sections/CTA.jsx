import { Link } from "react-router-dom";
import "../../styles/sections/cta.css";

function CTA(){
  return(
    <section className="cta">
      <div className="container">

        <div className="cta-box">
          <h2>Let’s Build Something Powerful Together</h2>

          <p>
            Tell us what you are building or where your current process needs help. We can discuss the right software or automation approach for your project.
          </p>

          <div className="cta-buttons">
            <Link
              className="cta-primary"
              to="/contact"
            >
              Contact Naxara Labs
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CTA;