import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import TintBar from './TintBar.jsx';
import { nav, site } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Advertising, social, email and video for businesses that want to be noticed.</p>
        </div>
        <div>
          <span className="label">Pages</span>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            {nav.map(item => <li key={item.to}><Link to={item.to}>{item.label}</Link></li>)}
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <span className="label">Get in touch</span>
          <p className="footer-email">{site.email}</p>
          <a className="footer-email footer-phone" href={`tel:${site.phoneLink}`}>{site.phone}</a>
          <Link className="btn btn-ghost btn-sm" to="/contact">Start a project</Link>
        </div>
      </div>
      <div className="wrap footer-base">
        <TintBar thin />
        <span className="label">© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
