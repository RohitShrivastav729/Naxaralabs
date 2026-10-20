
import { Link } from "react-router-dom";

function WhyUs(){
  const principles = [
    ["01", "Start with the real need", "We begin with your goals, constraints, and the people who will use the product."],
    ["02", "Choose tools for the job", "The approach follows the problem, whether that means a website, application, or connected workflow."],
    ["03", "Make room to maintain", "We consider clarity and future changes as part of how a solution is put together."],
    ["04", "Keep decisions visible", "A clear process helps you stay involved as requirements become a working product."],
  ];

  return(
    <section className="why" aria-labelledby="why-title">
      <div className="container">
        <div className="why-layout">
          <div className="why-header section-heading">
            <p className="eyebrow">How we think</p>
            <h2 id="why-title">Good software starts with good questions.</h2>
            <p>Technology is useful when it fits the people, process, and purpose behind it.</p>
            <Link className="text-link" to="/about">More about our approach</Link>
          </div>
          <div className="why-grid">
            {principles.map(([number, title, description]) => (
              <article className="why-item" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs;