import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import { nav } from '../data/site.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Logo />
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(o => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav aria-label="Main">
          <ul id="nav-links" className={`nav-links${open ? ' open' : ''}`}>
            {nav.map(item => (
              <li key={item.to}>
                <NavLink to={item.to} className="nav-link">{item.label}</NavLink>
              </li>
            ))}
            <li><Link className="btn btn-primary" to="/contact">Contact us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
