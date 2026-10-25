import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import CtaBand from '../components/CtaBand.jsx';
import MockAd from '../components/MockAd.jsx';
import usePageTitle from '../components/usePageTitle.js';

const services = [
  { title: 'Brand strategy', text: 'Positioning, audience research and a clear message, so every ad says the same thing in its own way.', spec: 'Brand platform · messaging guide · audience profiles' },
  { title: 'Creative & copywriting', text: 'Headlines that stop people and visuals that make them look twice. Concepts built for every channel.', spec: 'Campaign concepts · copy · art direction' },
  { title: 'Search & display', text: 'Paid search and display campaigns, set up properly, tested weekly and reported in plain English.', spec: 'Search ads · 728 × 90 · 300 × 250 · retargeting' },
  { title: 'Print & outdoor', text: 'Billboards, transit, posters, flyers and magazine pages. Print-ready files, delivered to spec.', spec: '14 × 48 ft bulletins · posters · CMYK at 300 dpi' },
  { title: 'Media buying', text: 'We find the placements your customers actually see and negotiate the rates, so more budget goes to reach.', spec: 'Outdoor · radio · streaming · digital' },
  { title: 'Analytics & reporting', text: 'Tracking set up before launch, a live dashboard during, and a monthly report you can read in five minutes.', spec: 'Conversion tracking · dashboards · monthly reviews' },
];

const packages = [
  { name: 'Starter', for: 'For a business running its first paid campaign.', items: ['Campaign strategy session', 'One channel (social, search or print)', 'Ad creative in every size you need', 'Monthly results report'] },
  { name: 'Growth', for: 'For a business ready to grow across channels.', items: ['Everything in Starter', 'Up to three channels', 'Monthly new creative and testing', 'Email marketing setup', 'Fortnightly check-in calls'], featured: true },
  { name: 'Full service', for: 'For brands that want an outside marketing team.', items: ['Everything in Growth', 'All channels, including outdoor and video', 'Promotional video production', 'Media buying and negotiation', 'Dedicated account manager'] },
];

export default function Services() {
  usePageTitle('Advertising services');
  return (
    <>
      <PageHero
        proof="Proof 02 · Advertising services"
        eyebrow="Strategy · creative · media"
        title={<>Campaigns that run <span className="hit">everywhere</span> your customers look.</>}
        intro="From the big idea to the billboard on the highway, we handle every part of your advertising and tell you exactly what it's doing for your business."
        actions={<Link className="btn btn-primary" to="/contact">Get a quote</Link>}
      />

      <section className="section">
        <div className="wrap">
          <SectionHead label="Services" title="Everything a campaign needs" intro="Hire us for one piece or the whole job. Either way, strategy and creative stay in the same room." />
          <ul className="service-list">
            {services.map(s => (
              <li className="service" key={s.title}>
                <span className="swatch" aria-hidden="true" />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="label">{s.spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <SectionHead label="Formats" title="One idea, every size" intro="A good campaign holds up on a highway billboard and in a banner the width of your thumb. Here is ours, at the real proportions of each format." />
          <div className="format-grid">
            <figure className="format f-bill">
              <MockAd format="billboard" headline={<>You read this. <em>So will your customers.</em></>} tag="JJ's Advertising" bg="#ffffff" fg="#071226" accent="#0e8f84" label="Sample billboard: You read this. So will your customers." />
              <figcaption className="label"><strong>Billboard bulletin</strong><span>14 × 48 ft</span></figcaption>
            </figure>
            <figure className="format f-story">
              <MockAd format="story" headline="Stop scrolling. Start selling." tag="Sponsored" cta="Learn more" bg="#14b8a8" fg="#04121f" accent="#ffffff" />
              <figcaption className="label"><strong>Social story</strong><span>1080 × 1920 px</span></figcaption>
            </figure>
            <div className="f-side">
              <figure className="format f-rect">
                <MockAd format="rect" headline={<>300 × 250 pixels of <em>pure persuasion.</em></>} tag="Ad" bg="#0b1a35" fg="#ffffff" accent="#2ee6d0" label="Sample display ad: 300 by 250 pixels of pure persuasion." />
                <figcaption className="label"><strong>Medium rectangle</strong><span>300 × 250 px</span></figcaption>
              </figure>
              <figure className="format f-leader">
                <MockAd format="leader" headline="Your brand, everywhere it counts." cta="Talk to JJ's" bg="#2ee6d0" fg="#04121f" accent="#04121f" />
                <figcaption className="label"><strong>Leaderboard</strong><span>728 × 90 px</span></figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="Packages" title="Pick a starting point" intro="Every business is different, so we price each project after a free call. These packages show what's usually included." />
          <div className="packages">
            {packages.map(p => (
              <div className={`pkg${p.featured ? ' featured' : ''}`} key={p.name}>
                {p.featured && <span className="pkg-flag">Most popular</span>}
                <h3>{p.name}</h3>
                <p className="pkg-for">{p.for}</p>
                <ul>{p.items.map(i => <li key={i}>{i}</li>)}</ul>
                <Link className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'}`} to="/contact">Get a quote</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
