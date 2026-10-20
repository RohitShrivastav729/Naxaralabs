import { Link } from "react-router-dom";

const featuredProject = {
  name: "Daily Game World",
  url: "https://dailygameworld.com/",
  category: "Interactive web product",
  description:
    "A free browser-based gaming platform bringing daily challenges, brain games, quizzes, classic solitaire, and word puzzles together in one approachable experience.",
  challenges: [
    { icon: "◉", name: "Guess Country", kind: "VISUAL CLUE", tone: "mint" },
    { icon: "▣", name: "Guess Movie", kind: "MOVIE CLUE", tone: "lavender" },
    { icon: "✳", name: "Daily Trivia", kind: "QUICK KNOWLEDGE", tone: "peach" },
  ],
  moreGames: ["Sudoku", "Solitaire", "Word games"],
};

function ProductPreview({ project }) {
  return (
    <div className="work-preview-wrap">
      <div className="work-preview-note">
        <span className="work-live-dot" />
        Product interface preview <span>·</span> not a screenshot
      </div>
      <div className="work-browser" aria-label="Illustrative preview of the Daily Game World interface">
        <div className="work-browser-bar" aria-hidden="true">
          <span className="work-browser-dots"><i /><i /><i /></span>
          <span className="work-browser-address">dailygameworld.com</span>
          <span className="work-browser-menu">•••</span>
        </div>
        <div className="game-interface">
          <div className="game-topbar">
            <div className="game-wordmark"><span className="game-wordmark-icon">D</span><span>DAILY<span>GAME</span>WORLD</span></div>
            <div className="game-nav"><span>Daily Games</span><span>Brain Games</span><span>Solitaire</span><span>Word Games</span></div>
            <span className="game-menu" aria-hidden="true">☰</span>
          </div>
          <div className="game-content">
            <div className="game-date-row"><span className="game-date-pill">TODAY'S LINEUP</span><span>Fresh challenges, ready to play</span></div>
            <div className="game-intro">
              <div><span className="game-overline">YOUR DAILY GAME JOURNEY</span><strong>A little play,<br />every day.</strong></div>
              <div className="game-day-mark"><span>DAILY</span><b>03</b><small>CHALLENGES</small></div>
            </div>
            <div className="game-challenge-head"><span>Today's daily challenge</span><span>01 — 03</span></div>
            <div className="game-challenge-list">
              {project.challenges.map((challenge, index) => (
                <div className="game-challenge" key={challenge.name}>
                  <span className={`game-challenge-icon ${challenge.tone}`} aria-hidden="true">{challenge.icon}</span>
                  <span className="game-challenge-copy"><small>{challenge.kind}</small><b>{challenge.name}</b></span>
                  <span className="game-play" aria-hidden="true">↗</span>
                  <span className="game-challenge-index">0{index + 1}</span>
                </div>
              ))}
            </div>
            <div className="game-more-row">
              <span>PLAY ANYTIME</span>
              {project.moreGames.map((game) => <span className="game-chip" key={game}>{game}</span>)}
            </div>
          </div>
        </div>
        <span className="work-preview-orbit work-preview-orbit-one" aria-hidden="true" />
        <span className="work-preview-orbit work-preview-orbit-two" aria-hidden="true" />
      </div>
      <div className="work-preview-caption"><span>DAILY CHALLENGES</span><i /><span>QUICK, BROWSER-BASED PLAY</span></div>
    </div>
  );
}

function SelectedWork() {
  return (
    <section className="selected-work" aria-labelledby="selected-work-title">
      <div className="container">
        <div className="work-section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="selected-work-title">Ideas turned into real digital experiences.</h2>
          </div>
          <p>Explore a digital product built by Naxara Labs, combining thoughtful user experience, interactive features, and a responsive web experience.</p>
        </div>

        <article className="featured-project" aria-labelledby="featured-project-title">
          <div className="featured-project-copy">
            <div className="featured-project-meta">
              <span className="featured-label"><i /> Featured project</span>
              <span className="project-category">{featuredProject.category}</span>
            </div>
            <h3 id="featured-project-title">{featuredProject.name}</h3>
            <p className="featured-description">{featuredProject.description}</p>
            <div className="project-capabilities">
              <span className="capability-label">A world of ways to play</span>
              <div className="capability-list">
                <span>Daily challenges</span>
                <span>Brain games & quizzes</span>
                <span>Word puzzles</span>
                <span>Classic solitaire</span>
              </div>
            </div>
            <div className="project-signature">
              <span className="signature-mark">N<span>.</span></span>
              <span>Designed & built by <b>Naxara Labs</b></span>
            </div>
            <div className="project-actions">
              <a className="button button-primary project-live-cta" href={featuredProject.url} target="_blank" rel="noopener noreferrer">
                Explore live project <span aria-hidden="true">↗</span>
              </a>
              <Link className="project-contact-link" to="/contact">Discuss a similar project <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <ProductPreview project={featuredProject} />
        </article>
      </div>
    </section>
  );
}

export default SelectedWork;