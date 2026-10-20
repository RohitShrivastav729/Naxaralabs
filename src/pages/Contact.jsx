import { useState } from "react";

function Contact() {
  const [loading, setLoading] = useState(false);
  return (
    <main className="contact-page">
      <div className="container contact-layout">
        <section className="contact-intro" aria-labelledby="contact-title">
          <p className="eyebrow">Start a conversation</p>
          <h1 id="contact-title">Tell us what you’re building.</h1>
          <p>Share a little about your goals, your team, or a process you’d like to improve. We’ll get back to you within 24 hours.</p>
          <div className="contact-note">
            <span className="contact-note-mark" aria-hidden="true">↗</span>
            <div><strong>Prefer a quick chat?</strong><a href="https://wa.me/918708293816?text=Hi%20NaxaraLabs%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">Message Naxara Labs on WhatsApp</a></div>
          </div>
          <p className="contact-footnote">Your project details help us understand where to begin.</p>
        </section>

        <form
          className="contact-form"
          action="https://formsubmit.co/rohitshrivastav628@gmail.com"
          method="POST"
          onSubmit={() => setLoading(true)}
        >
          <input
            type="hidden"
            name="_next"
            value="https://www.naxaralabs.com/thank-you"
          />
          <div className="form-heading">
            <span className="form-step">PROJECT ENQUIRY</span>
            <h2>A few details to get started.</h2>
            <p>Fields marked required need to be completed.</p>
          </div>

          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="full-name">Full name <span>Required</span></label>
              <input id="full-name" type="text" name="full_name" autoComplete="name" placeholder="Your name" required />
            </div>
            <div className="form-field">
              <label htmlFor="email-address">Email address <span>Required</span></label>
              <input id="email-address" type="email" name="email" autoComplete="email" placeholder="you@company.com" required />
            </div>
            <div className="form-field form-field-wide">
              <label htmlFor="phone-number">Phone number <span>Required</span></label>
              <div className="phone-row">
                <select name="country_code" className="country-code" aria-label="Country calling code" autoComplete="tel-country-code">
                <option value="+91">🇮🇳 +91 India</option>
                <option value="+1">🇺🇸 +1 USA</option>
                <option value="+44">🇬🇧 +44 UK</option>
                <option value="+61">🇦🇺 +61 Australia</option>
              </select>
              <input
                type="tel"
                id="phone-number"
                name="phone"
                autoComplete="tel-national"
                inputMode="tel"
                placeholder="Your number"
                required
              />
            </div>
          </div>
            <div className="form-field">
              <label htmlFor="company-name">Company <span>Optional</span></label>
              <input id="company-name" type="text" name="company" autoComplete="organization" placeholder="Company or organization" />
            </div>
            <div className="form-field">
              <label htmlFor="service-required">Service <span>Required</span></label>
              <select id="service-required" name="service_required" required defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Website Development</option>
                <option>Web Application Development</option>
                <option>Mobile App Development</option>
                <option>Business Automation &amp; Integrations</option>
                <option>Custom Business Software</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-field form-field-wide">
              <label htmlFor="project-description">Project details <span>Required</span></label>
              <textarea id="project-description" name="project_description" placeholder="What would you like to create or improve?" rows="4" required />
            </div>
          </div>

          <div className="form-submit-row">
            <p>We’ll use these details to respond to your enquiry.</p>
            <button type="submit" className="button button-primary form-submit" disabled={loading} aria-live="polite">
            {loading ? (
              <>Sending request <span className="spinner" aria-hidden="true" /></>
            ) : (
              <>Send project enquiry <span aria-hidden="true">↗</span></>
            )}
          </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Contact;
