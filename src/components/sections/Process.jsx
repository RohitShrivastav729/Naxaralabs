
import "../../styles/sections/process.css";

function Process(){
  return(
    <section className="process">
      <div className="container">

        <div className="process-header">
          <h2>Our Development Process</h2>
          <p>
            A structured and transparent workflow that ensures high-quality,
            scalable, and business-focused digital solutions.
          </p>
        </div>

        <div className="process-steps">

          <div className="process-card">
            <div className="step-number">01</div>
            <h3>Discovery & Strategy</h3>
            <p>
              We understand your business, goals, and requirements to create
              a clear roadmap for development.
            </p>
          </div>

          <div className="process-card">
            <div className="step-number">02</div>
            <h3>Planning & Architecture</h3>
            <p>
              We design scalable system architecture and technical strategy
              for long-term performance.
            </p>
          </div>

          <div className="process-card">
            <div className="step-number">03</div>
            <h3>Design & Development</h3>
            <p>
              Our team builds modern, secure, and high-performance applications
              using the latest technologies.
            </p>
          </div>

          <div className="process-card">
            <div className="step-number">04</div>
            <h3>Testing & Optimization</h3>
            <p>
              Every product is tested thoroughly for performance, security,
              and seamless user experience.
            </p>
          </div>

          <div className="process-card">
            <div className="step-number">05</div>
            <h3>Launch & Support</h3>
            <p>
              We deploy and provide continuous support to ensure smooth
              operations and future scalability.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Process;