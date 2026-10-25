import { useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import ContactForm from '../components/ContactForm.jsx';
import ReportProblemLink from '../components/ReportProblemLink.jsx';
import usePageTitle from '../components/usePageTitle.js';
import { site } from '../data/site.js';

const next = [
  { title: 'We reply', text: 'Within one business day, with a few questions about your goals.' },
  { title: 'Free call', text: 'A 30-minute call to learn about your business and customers.' },
  { title: 'Your plan', text: 'A short proposal with recommended channels and a clear quote.' },
];

const faqs = [
  { q: 'Do you work with small businesses?', a: 'Yes. Many of our services are designed for local and growing businesses, and our Starter package is built for a first paid campaign.' },
  { q: 'Do I have to sign a long contract?', a: 'No. Most clients start with a single campaign. If it works, we keep going month to month.' },
  { q: 'Can you work with my existing ads or email list?', a: 'Yes. We often start by reviewing what you already have and improving it before building anything new.' },
  { q: 'Who owns the ads and videos you make?', a: 'You do. Once a project is paid for, the final files and ad accounts belong to your business.' },
];

export default function Contact() {
  usePageTitle('Contact');
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.getElementById('contact-email');
      const range = document.createRange();
      range.selectNodeContents(el);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }

  return (
    <>
      <PageHero
        proof="Proof 07 · Contact"
        eyebrow="Reply within one business day"
        title={<>Let's make something people <span className="hit">notice</span>.</>}
        intro={`Tell us about your business and what you want to achieve, or call us at ${site.phone}. There's no cost and no obligation.`}
      />

      <section className="section section-tight">
        <div className="wrap contact-grid">
          <div className="contact-panel">
            <ContactForm />
          </div>
          <aside className="contact-aside">
            <div>
              <span className="label">Email us directly</span>
              <p className="contact-email" id="contact-email">{site.email}</p>
              <button type="button" className="btn btn-ghost btn-sm" onClick={copyEmail}>{copied ? 'Copied' : 'Copy email'}</button>
            </div>
            <div>
              <span className="label">Call us</span>
              <a className="contact-email contact-phone" href={`tel:${site.phoneLink}`}>{site.phone}</a>
            </div>
            <div className="problem-note">
              <span className="label">Website not working?</span>
              <p>If a page won't load, a button does nothing or something looks wrong, email us. We'll include the page you're on so we can fix it fast.</p>
              <ReportProblemLink className="btn btn-ghost btn-sm">Report a website problem</ReportProblemLink>
            </div>
            <div>
              <span className="label">What happens next</span>
              <ol className="next-steps">
                {next.map(n => <li key={n.title}><b>{n.title}</b><span>{n.text}</span></li>)}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap split">
          <SectionHead label="Questions" title="Before you get in touch" />
          <div className="faq">
            {faqs.map(f => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
