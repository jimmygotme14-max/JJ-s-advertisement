import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import CtaBand from '../components/CtaBand.jsx';
import MockAd from '../components/MockAd.jsx';
import usePageTitle from '../components/usePageTitle.js';

const included = [
  { title: 'Campaign setup', text: 'Business Manager, ad accounts, pages and payment set up correctly from day one.' },
  { title: 'Scroll-stopping creative', text: 'Images, carousels and short videos designed for each placement, with copy that gets to the point.' },
  { title: 'Audience targeting', text: 'Local, interest and lookalike audiences built around your best customers.' },
  { title: 'Pixel & conversion tracking', text: 'Meta Pixel and Conversions API set up so every sale and lead is counted.' },
  { title: 'Retargeting', text: 'Follow-up ads for people who visited your site, watched your videos or engaged with your page.' },
  { title: 'Testing & reporting', text: 'New ads tested every month. A plain-English report on cost per lead, sales and return on ad spend.' },
];

const objectives = [
  { name: 'Awareness', text: 'Get your name in front of as many local people as possible.' },
  { name: 'Traffic', text: 'Send people to your website, menu or booking page.' },
  { name: 'Engagement', text: 'Grow followers, messages and video views.' },
  { name: 'Leads', text: 'Collect names and phone numbers with instant forms.' },
  { name: 'App promotion', text: 'Get more people to install and use your app.' },
  { name: 'Sales', text: 'Drive purchases on your online store.' },
];

const specs = [
  ['Facebook & Instagram feed', '4:5', '1080 × 1350 px'],
  ['Square post', '1:1', '1080 × 1080 px'],
  ['Stories & Reels', '9:16', '1080 × 1920 px'],
  ['Carousel', '1:1 or 4:5', '2 to 10 cards'],
  ['Primary text', '—', 'About 125 characters before it gets cut off'],
];

export default function Social() {
  usePageTitle('Facebook & Instagram marketing');
  return (
    <>
      <PageHero
        proof="Proof 03 · Facebook & Instagram"
        eyebrow="Paid social · 4:5 · 9:16"
        title={<>Ads that stop the <span className="hit">scroll</span>.</>}
        intro="We plan, design and manage Facebook and Instagram ads that reach the right people near you and turn them into customers."
        actions={<>
          <Link className="btn btn-primary" to="/contact">Get a free ad review</Link>
          <Link className="btn btn-ghost" to="/portfolio">See social work</Link>
        </>}
        aside={
          <div className="phones">
            <div className="phone">
              <div className="post-head"><span className="avatar" /> <span><b>yourbrand</b><small>Sponsored</small></span></div>
              <MockAd format="feed" headline="Your next customer is scrolling right now." tag="New this week" cta="Shop now" bg="#2ee6d0" fg="#04121f" accent="#071226" />
              <div className="post-actions" aria-hidden="true"><span /><span /><span /></div>
            </div>
            <div className="phone phone-story">
              <MockAd format="story" headline="Stop scrolling. Start selling." tag="Sponsored" cta="Learn more" bg="#0b1a35" fg="#ffffff" accent="#2ee6d0" />
            </div>
          </div>
        }
      />

      <section className="section">
        <div className="wrap">
          <SectionHead label="What's included" title="Everything handled, start to finish" intro="You approve the ads. We do the rest and keep you updated every month." />
          <ul className="service-list">
            {included.map(s => (
              <li className="service" key={s.title}>
                <span className="swatch" aria-hidden="true" />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <SectionHead label="Campaign goals" title="We start with what you want" intro="Meta asks every campaign to pick one of six objectives. We help you choose the one that matches your goal, then build the ads around it." />
          <div className="objectives">
            {objectives.map(o => (
              <div className="objective" key={o.name}>
                <h3>{o.name}</h3>
                <p>{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="Ad specs" title="Made to fit every placement" intro="We size every ad for where it will run, so nothing gets cropped or squashed." />
          <div className="table-wrap">
            <table className="spec-table">
              <thead><tr><th scope="col">Placement</th><th scope="col">Aspect ratio</th><th scope="col">Size</th></tr></thead>
              <tbody>
                {specs.map(([a, b, c]) => <tr key={a}><td>{a}</td><td>{b}</td><td>{c}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand title="Want more from your social ads?" text="Send us a link to your page. We'll look at your current ads and tell you what we'd change, free." />
    </>
  );
}
