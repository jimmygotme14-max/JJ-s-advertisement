import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import ReportProblemLink from '../components/ReportProblemLink.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <PageHero
      proof="Proof 404"
      eyebrow="Page not found"
      title={<>This page didn't make it to <span className="hit">print</span>.</>}
      intro="The link may be old or mistyped. Head back to the home page to find what you need."
      actions={<>
        <Link className="btn btn-primary" to="/">Go to the home page</Link>
        <ReportProblemLink className="btn btn-ghost">Report a broken link</ReportProblemLink>
      </>}
    />
  );
}
