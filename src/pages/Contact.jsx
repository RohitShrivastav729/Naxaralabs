import { useState } from "react";

function Contact() {
  const [loading, setLoading] = useState(false);
  return (
    <section style={{ padding: "140px 0" }}>
      <div
        className="container"
        style={{ maxWidth: "850px", textAlign: "center" }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Book a Consultation
        </h1>
        <p style={{ fontSize: "18px", color: "#9aa4b2", marginBottom: "50px" }}>
          Tell us about your project and we’ll get back to you within 24 hours.
        </p>

        <form
          action="https://formsubmit.co/rohitshrivastav628@gmail.com"
          method="POST"
          onSubmit={() => setLoading(true)}
          style={{
            background: "#111827",
            padding: "50px",
            borderRadius: "16px",
            border: "1px solid #1f2937",
            textAlign: "left",
          }}
        >
          <input
            type="hidden"
            name="_next"
            value="https://naxaralabs.com/thank-you"
          />

          {/* Full Name */}
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            className="contact-input"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact-input"
            required
          />

          {/* Phone with Country Code */}
          <div className="phone-field">
            <label>Phone Number</label>

            <div className="phone-row">
              <select className="country-code">
                <option value="+91">🇮🇳 +91 India</option>
                <option value="+1">🇺🇸 +1 USA</option>
                <option value="+44">🇬🇧 +44 UK</option>
                <option value="+61">🇦🇺 +61 Australia</option>
              </select>

              <input
                type="tel"
                placeholder="Enter phone number"
                className="phone-input"
                required
              />
            </div>
          </div>

          {/* Company Name */}
          <input
            type="text"
            name="company"
            placeholder="Company Name (Optional)"
            className="contact-input"
          />

          {/* Service Required */}
          <select name="service_required" className="contact-input" required>
            <option value="">Select Service Required</option>
            <option>Website Development</option>
            <option>Web Application Development</option>
            <option>Mobile App Development</option>
            <option>AI Integration / Automation</option>
            <option>Custom Business Software</option>
            <option>Other</option>
          </select>

          {/* Project Description */}
          <textarea
            name="project_description"
            placeholder="Briefly describe your project requirements..."
            className="contact-input"
            rows="5"
            required
          />

          <button
            type="submit"
            className={`submit-btn ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? (
              <span className="btn-loader">
                <span className="spinner"></span>
                Sending Request...
              </span>
            ) : (
              "Submit Consultation Request"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
