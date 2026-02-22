
import "../../styles/sections/whyus.css";

function WhyUs(){
  return(
    <section className="why">
      <div className="container">

        <div className="why-header">
          <h2>Why Businesses Choose NaxaraLabs</h2>
          <p>
            We combine modern AI technology with strong engineering practices 
            to build digital solutions that scale, perform, and deliver real business value.
          </p>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <h3>AI-First Approach</h3>
            <p>
              We integrate modern AI capabilities into products to improve efficiency,
              automation, and decision-making for businesses.
            </p>
          </div>

          <div className="why-card">
            <h3>Scalable Engineering</h3>
            <p>
              Our systems are built with scalability and performance in mind,
              ensuring long-term reliability as your business grows.
            </p>
          </div>

          <div className="why-card">
            <h3>Business-Focused Solutions</h3>
            <p>
              We don’t just write code — we design technology solutions aligned
              with your business goals and growth strategy.
            </p>
          </div>

          <div className="why-card">
            <h3>Clean & Modern UI/UX</h3>
            <p>
              Every product is crafted with premium user experience and modern
              design standards to ensure customer satisfaction.
            </p>
          </div>

          <div className="why-card">
            <h3>Secure & Reliable</h3>
            <p>
              Security and reliability are built into every layer of our
              development process from day one.
            </p>
          </div>

          <div className="why-card">
            <h3>Long-Term Partnership</h3>
            <p>
              We work as a technology partner for businesses, providing
              continuous support and future scalability.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default WhyUs;