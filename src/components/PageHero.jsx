import TintBar from './TintBar.jsx';

// Crop-marked "proof" frame used at the top of every page.
export default function PageHero({ proof, eyebrow, title, intro, actions, aside, home = false }) {
  return (
    <section className={`page-hero${home ? ' is-home' : ''}`}>
      <div className="wrap">
        <div className="proof">
          <span className="crop tl" /><span className="crop tr" /><span className="crop bl" /><span className="crop br" />
          <div className="proof-meta">
            <span className="label">{proof}</span>
            <span className="label">{eyebrow}</span>
          </div>
          <div className={`hero-grid${aside ? '' : ' single'}`}>
            <div className="hero-copy">
              <h1>{title}</h1>
              {intro && <p className="hero-intro">{intro}</p>}
              {actions && <div className="hero-actions">{actions}</div>}
            </div>
            {aside && <div className="hero-aside">{aside}</div>}
          </div>
          <TintBar />
        </div>
      </div>
    </section>
  );
}
