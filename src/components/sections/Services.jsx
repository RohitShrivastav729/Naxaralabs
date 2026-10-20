
import "../../styles/sections/services.css";

function Services(){
  return(
    <section className="services">
      <div className="container">

        <div className="services-header">
          <h2>Software Development Services</h2>
          <p>
            Practical software development for businesses that need a stronger web presence, custom applications, or more efficient workflows.
          </p>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <h3>Business Website Development</h3>
            <p>
              Static business websites designed to explain your offer clearly, reach customers, and make it easy to enquire.
            </p>
          </div>

          <div className="service-card">
            <h3>Full-Stack Web Applications</h3>
            <p>
              Database-backed web applications and custom software built around your product, team, or business process.
            </p>
          </div>

          <div className="service-card">
            <h3>Mobile App Development</h3>
            <p>
              Android and iOS application development shaped around your users, product requirements, and core workflows.
            </p>
          </div>

          <div className="service-card">
            <h3>Business Automation</h3>
            <p>
              Custom workflow automation and system integrations that reduce repetitive work and connect the tools your business uses.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Services;