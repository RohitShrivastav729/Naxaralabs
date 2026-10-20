
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    code: "WEB",
    title: "Website development",
    description: "A clear, fast business website that gives customers a confident first step.",
    detail: "Static websites · Responsive design",
  },
  {
    number: "02",
    code: "APP",
    title: "Web applications",
    description: "Full-stack products and custom software shaped around your data and workflows.",
    detail: "Product builds · Custom software",
  },
  {
    number: "03",
    code: "iOS / AND",
    title: "Mobile applications",
    description: "Android and iOS apps designed for the people who will use them every day.",
    detail: "Android · iOS",
  },
  {
    number: "04",
    code: "FLOW",
    title: "Business automation",
    description: "Practical automations and integrations that connect tools and remove repeat work.",
    detail: "Workflows · Integrations",
  },
];

function Services(){
  return(
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="services-heading section-heading">
          <p className="eyebrow">What we make</p>
          <h2 id="services-title">The right tools for<br />what comes next.</h2>
          <p>Four ways we help turn business needs into useful digital products.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-code">{service.code}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-card-bottom">
                <span>{service.detail}</span>
                <Link to="/contact" aria-label={`Discuss ${service.title.toLowerCase()}`}>
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;