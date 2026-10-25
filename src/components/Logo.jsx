import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link className="logo" to="/" aria-label="JJ's Advertising home">
      <img src="./logo-small.jpg" alt="" width="44" height="44" />
      <span className="logo-word">JJ<b>'</b>s</span>
      <small>Advertising</small>
    </Link>
  );
}
