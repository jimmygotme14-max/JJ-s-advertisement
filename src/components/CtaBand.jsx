import { Link } from 'react-router-dom';

export default function CtaBand({ title = 'Ready to be noticed?', text = 'Tell us what you want to achieve. We reply within one business day with next steps.' }) {
  return (
    <section className="cta-band">
      <div className="wrap cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="hero-actions">
          <Link className="btn btn-dark" to="/contact">Start a project</Link>
          <Link className="btn btn-outline-dark" to="/portfolio">See our work</Link>
        </div>
      </div>
    </section>
  );
}
