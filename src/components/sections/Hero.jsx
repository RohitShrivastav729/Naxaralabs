import { Link } from "react-router-dom";

function Hero(){
  return(
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Independent software studio</p>
          <h1 id="hero-title">
            Thoughtful software.<br />
            <span>Built for your business.</span>
          </h1>
          <p className="hero-description">
            Websites, web applications, mobile apps, and automation shaped around the way your business works.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">
              Discuss your project <span aria-hidden="true">↗</span>
            </Link>
            <a className="button button-secondary" href="#services">
              Explore services <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-note">
            <span className="hero-note-mark" aria-hidden="true">N</span>
            <span>From a clear first brief to a considered launch.</span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit art-orbit-one" />
          <div className="art-orbit art-orbit-two" />
          <div className="art-window">
            <div className="art-window-top">
              <span className="art-dots"><i /><i /><i /></span>
              <span className="art-address">studio.naxara / workspace</span>
              <span className="art-menu">•••</span>
            </div>
            <div className="art-window-body">
              <div className="art-sidebar"><b /><i /><i /><i /><i /></div>
              <div className="art-dashboard">
                <span className="art-kicker">PRODUCT WORKSPACE</span>
                <strong>Ideas into<br />useful software.</strong>
                <span className="art-line art-line-wide" />
                <span className="art-line art-line-short" />
                <span className="art-progress"><i /></span>
                <div className="art-metrics">
                  <span><b>01</b><small>Understand</small></span>
                  <span><b>02</b><small>Build</small></span>
                  <span><b>03</b><small>Improve</small></span>
                </div>
              </div>
            </div>
          </div>
          <div className="art-float art-float-top">
            <span className="art-float-icon">{`{ }`}</span>
            <span><b>Web + mobile</b><small>Connected experiences</small></span>
          </div>
          <div className="art-float art-float-bottom">
            <span className="art-status-dot" />
            <span><b>Built around your work</b><small>People · process · product</small></span>
          </div>
          <span className="art-plus art-plus-one">+</span>
          <span className="art-plus art-plus-two">+</span>
        </div>
      </div>
    </section>
  )
}

export default Hero;