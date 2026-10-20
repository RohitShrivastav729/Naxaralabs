import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="section center">
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link to="/">Return to the Naxara Labs homepage</Link>
    </main>
  );
}

export default NotFound;