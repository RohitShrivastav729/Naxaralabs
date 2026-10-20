import { Link } from "react-router-dom";

function About(){
  return(
    <main className="about-page">
      <section className="about-hero">
        <div className="container about-hero-layout">
          <div>
            <p className="eyebrow">About Naxara Labs</p>
            <h1>Technology should make work feel <span>more possible.</span></h1>
          </div>
          <p className="about-intro">
            Naxara Labs builds digital products for startups and growing businesses, from focused websites to full-stack applications and connected workflows.
          </p>
        </div>
      </section>
      <section className="about-content">
        <div className="container about-content-layout">
          <div className="about-marker"><span>N</span><small>Ideas, made useful.</small></div>
          <div className="about-copy">
            <p className="eyebrow">Our approach</p>
            <h2>Start with the business. Then shape the technology.</h2>
            <p>Naxara Labs is a software development company focused on building scalable, secure, and high-performance digital solutions for startups and growing businesses.</p>
            <p>We help businesses use technology to improve efficiency, automate processes, and build with more confidence. That work begins by understanding the goal, then choosing an appropriate design and engineering approach.</p>
            <p>From websites and mobile applications to custom software and automation, we combine modern design with strong engineering practices to support long-term use and change.</p>
            <Link className="button button-primary" to="/contact">Discuss your project <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About;