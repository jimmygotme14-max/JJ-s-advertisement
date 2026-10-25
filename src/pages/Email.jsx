import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import CtaBand from '../components/CtaBand.jsx';
import usePageTitle from '../components/usePageTitle.js';

const inbox = [
  { from: 'Your Brand', subject: 'We saved your seat ☕', preview: 'It has been a while. Your next refill is on us.', time: '9:41', unread: true },
  { from: 'Your Brand', subject: 'You left something behind', preview: 'Your cart is waiting. Free shipping ends tonight.', time: '8:15', unread: true },
  { from: 'Your Brand', subject: 'Welcome! Here is 10% off', preview: 'Thanks for joining. Here is what to expect from us.', time: 'Yesterday' },
  { from: 'Your Brand', subject: 'This month: new arrivals', preview: 'Five things we think you will love this spring.', time: 'Mon' },
];

const flows = [
  { name: 'Welcome series', trigger: 'Someone joins your list', emails: ['Welcome and offer', 'Your story', 'Best sellers'] },
  { name: 'Abandoned cart', trigger: 'A shopper leaves without buying', emails: ['Reminder', 'Reviews and FAQs', 'Last chance'] },
  { name: 'Post-purchase', trigger: 'A customer places an order', emails: ['Thank you', 'How to use it', 'Ask for a review'] },
  { name: 'Win-back', trigger: 'A customer goes quiet for 60 days', emails: ['We miss you', 'A reason to return', 'Final offer'] },
];

const included = [
  { title: 'Email strategy', text: 'A sending calendar, list segments and goals for every message.' },
  { title: 'Template design', text: 'Branded 600 px templates that look right on phones, desktops and in dark mode.' },
  { title: 'Copywriting', text: 'Subject lines that get opened and emails that get clicked.' },
  { title: 'List growth', text: 'Sign-up forms, pop-ups and offers that turn visitors into subscribers.' },
  { title: 'Deliverability', text: 'SPF, DKIM and DMARC set up so your emails land in the inbox, not spam.' },
  { title: 'Testing & reporting', text: 'A/B tests on subject lines and offers, with opens, clicks and sales reported monthly.' },
];

export default function Email() {
  usePageTitle('Email marketing');
  return (
    <>
      <PageHero
        proof="Proof 04 · Email marketing"
        eyebrow="Newsletters · automations · 600 px"
        title={<>Emails people actually <span className="hit">open</span>.</>}
        intro="Email is the one channel you own. We design, write and automate emails that keep customers coming back, long after their first visit."
        actions={<Link className="btn btn-primary" to="/contact">Plan my emails</Link>}
        aside={
          <div className="inbox" role="img" aria-label="Example inbox showing four emails a business might send">
            <div className="inbox-top"><span className="label">Inbox</span><span className="label">Example</span></div>
            {inbox.map(m => (
              <div className={`inbox-row${m.unread ? ' unread' : ''}`} key={m.subject}>
                <div className="inbox-line"><b>{m.from}</b><span>{m.time}</span></div>
                <div className="inbox-subject">{m.subject}</div>
                <div className="inbox-preview">{m.preview}</div>
              </div>
            ))}
          </div>
        }
      />

      <section className="section">
        <div className="wrap">
          <SectionHead label="Automations" title="Emails that send themselves" intro="Set up once, these flows work around the clock. Each one starts when a customer does something and sends the right message at the right time." />
          <div className="flows">
            {flows.map(f => (
              <div className="flow" key={f.name}>
                <h3>{f.name}</h3>
                <p className="flow-trigger"><span className="label">Starts when</span>{f.trigger}</p>
                <ol className="flow-steps">
                  {f.emails.map(e => <li key={e}>{e}</li>)}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <SectionHead label="What's included" title="Strategy, design and the technical bits" intro="We work in the email platform you already use, or help you choose one that fits." />
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

      <CtaBand title="Got a list you're not using?" text="Tell us how many subscribers you have and what you sell. We'll suggest the first three emails to send." />
    </>
  );
}
