import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-panel">
        <span className="not-found-code">404</span>
        <p className="eyebrow">Nothing to see here</p>
        <h1>That page isn’t here.</h1>
        <p>The address may have changed, or the page may no longer exist.</p>
        <Link className="button button-primary" to="/">Return to Naxara Labs <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}

export default NotFound;