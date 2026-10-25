import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Steps from '../components/Steps.jsx';
import CtaBand from '../components/CtaBand.jsx';
import WorkCard from '../components/WorkCard.jsx';
import usePageTitle from '../components/usePageTitle.js';
import { offerings, steps, work } from '../data/site.js';

const reasons = [
  { title: 'One team, start to finish', text: 'Strategy, writing, design, video and media buying under one roof. No hand-offs, no finger-pointing.' },
  { title: 'Reports in plain English', text: 'Every month you see what you spent, what it brought in, and what we are changing next.' },
  { title: 'Built for every screen', text: 'Each idea is made to work on a billboard, in a feed, in an inbox and on video.' },
];

export default function Home() {
  usePageTitle('');
  return (
    <>
      <PageHero
        home
        proof="Proof 01 · JJ's Advertising"
        eyebrow="Final art · approved for press"
        title={<>Ads people <span className="hit">remember</span>.</>}
        intro={<><strong>JJ's Advertising</strong> plans, writes, designs and runs campaigns for businesses that want to be noticed: advertising, Facebook and Instagram, email and video.</>}
        actions={<>
          <Link className="btn btn-primary" to="/contact">Start a project</Link>
          <Link className="btn btn-ghost" to="/portfolio">See our work</Link>
        </>}
        aside={<img className="hero-logo" src="./logo.jpg" width="720" height="720"
          alt="JJ's Advertising logo: a winking megaphone giving a thumbs up, surrounded by social media icons and a rising arrow" />}
      />

      <section className="section">
        <div className="wrap">
          <SectionHead label="What we do" title="Four ways to reach more customers"
            intro="Use one service or combine them. Every campaign is planned around what you want to sell and who you want to reach." />
          <div className="offer-grid">
            {offerings.map(o => (
              <Link className="offer" to={o.to} key={o.to}>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
                <span className="label">{o.spec}</span>
                <span className="offer-more">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap split">
          <SectionHead label="Why JJ's" title="Less noise, more customers" />
          <ul className="ruled">
            {reasons.map(r => (
              <li key={r.title}><h3>{r.title}</h3><p>{r.text}</p></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="How it works" title="From brief to results" intro="Five steps, the same every time, so you always know what happens next." />
          <Steps items={steps} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="head-row">
            <SectionHead label="Portfolio" title="Recent concepts" />
            <Link className="btn btn-ghost" to="/portfolio">View all work</Link>
          </div>
          <div className="work-grid">
            {work.filter(w => ['gym', 'bakery', 'restaurant'].includes(w.id)).map(w => <WorkCard key={w.id} item={w} />)}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
