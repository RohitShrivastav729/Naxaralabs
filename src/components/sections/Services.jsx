
import "../../styles/sections/services.css";

function Services(){
  return(
    <section className="services">
      <div className="container">

        <div className="services-header">
          <h2>Intelligent Technology Services</h2>
          <p>
            We build scalable digital products powered by modern AI 
            and engineered for long-term business growth.
          </p>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <h3>Custom Web Development</h3>
            <p>
              High-performance websites and platforms built with modern
              frameworks, optimized for scalability and growth.
            </p>
          </div>

          <div className="service-card">
            <h3>AI-Integrated Applications</h3>
            <p>
              Intelligent web applications leveraging AI automation,
              analytics, and smart business workflows.
            </p>
          </div>

          <div className="service-card">
            <h3>Mobile App Development</h3>
            <p>
              Premium Android and iOS applications designed with
              performance, security, and user experience in mind.
            </p>
          </div>

          <div className="service-card">
            <h3>Business Automation</h3>
            <p>
              Streamline operations with AI-driven automation systems
              tailored to your business processes.
            </p>
          </div>

          <div className="service-card">
            <h3>Scalable Architecture</h3>
            <p>
              Backend systems built for reliability, scalability,
              and long-term technical sustainability.
            </p>
          </div>

          <div className="service-card">
            <h3>Product Strategy & Consulting</h3>
            <p>
              From idea validation to technical roadmap, we guide
              businesses toward intelligent digital transformation.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Services;