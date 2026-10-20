
import { Link } from "react-router-dom";

function ThankYou(){
  return(
    <main className="confirmation-page">
      <section className="confirmation-panel">
        <span className="confirmation-mark" aria-hidden="true">✓</span>
        <p className="eyebrow">Enquiry received</p>
        <h1>Thank you for reaching out.</h1>
        <p>Your consultation request has been received. Our team will get back to you within 24 hours.</p>
        <Link className="button button-primary" to="/">Back to the homepage <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  )
}

export default ThankYou;