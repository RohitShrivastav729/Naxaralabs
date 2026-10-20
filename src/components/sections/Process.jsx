
function Process(){
  const steps = [
    ["01", "Understand", "We listen to your goals, requirements, and constraints."],
    ["02", "Plan", "We shape the scope and choose an appropriate technical direction."],
    ["03", "Build", "Design and engineering come together in an iterative process."],
    ["04", "Test & deliver", "We review the details and prepare the product for launch."],
  ];

  return(
    <section className="process" aria-labelledby="process-title">
      <div className="container">
        <div className="process-heading section-heading">
          <p className="eyebrow">A clear path forward</p>
          <h2 id="process-title">From first conversation to launch.</h2>
          <p>A straightforward process keeps the work connected to your goals at every step.</p>
        </div>
        <div className="process-steps">
          {steps.map(([number, title, description]) => (
            <article className="process-step" key={number}>
              <span className="step-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Process;