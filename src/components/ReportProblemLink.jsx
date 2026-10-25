import { useLocation } from 'react-router-dom';
import { problemMailto } from './reportProblem.js';

// The email details are refreshed at the moment of the tap, so they always name the page the visitor is on.
export default function ReportProblemLink({ className = '', children = 'Report a website problem', details }) {
  useLocation();
  return (
    <a
      className={className}
      href={problemMailto(details)}
      onClick={e => { e.currentTarget.href = problemMailto(details); }}
    >
      {children}
    </a>
  );
}
