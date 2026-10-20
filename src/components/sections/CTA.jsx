import { Link } from "react-router-dom";

function CTA(){
  return(
    <section className="cta" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-panel">
          <div>
            <p className="eyebrow">Have a project in mind?</p>
            <h2 id="cta-title">Let’s make the next step clear.</h2>
            <p>Share what you’re working on. We’ll start with a conversation about what would help.</p>
          </div>
          <Link className="button button-primary cta-button" to="/contact">
            Start a project conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default CTA;