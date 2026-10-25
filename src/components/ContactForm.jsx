import { useState } from 'react';
import { site } from '../data/site.js';

const empty = { name: '', email: '', company: '', service: '', budget: '', message: '' };

export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [status, setStatus] = useState({ text: '', error: false });
  const [sending, setSending] = useState(false);

  const update = e => setValues(v => ({ ...v, [e.target.name]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    const { name, email, message } = values;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ text: 'Please fill in your name, email and message.', error: true });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus({ text: 'That email address looks incomplete. Check it and try again.', error: true });
      return;
    }
    if (!site.formEndpoint) {
      setStatus({ text: `Online messages aren't set up yet. Please email us at ${site.email}.`, error: true });
      return;
    }
    setSending(true);
    setStatus({ text: 'Sending…', error: false });
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Bad response');
      setValues(empty);
      setStatus({ text: `Thanks, ${name.trim()}. We'll reply within one business day.`, error: false });
    } catch {
      setStatus({ text: `The message didn't go through. Please email us at ${site.email}.`, error: true });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="field">
        <label htmlFor="f-name">Name</label>
        <input id="f-name" name="name" type="text" autoComplete="name" value={values.name} onChange={update} required />
      </div>
      <div className="field">
        <label htmlFor="f-email">Email</label>
        <input id="f-email" name="email" type="email" autoComplete="email" value={values.email} onChange={update} required />
      </div>
      <div className="field">
        <label htmlFor="f-company">Company</label>
        <input id="f-company" name="company" type="text" autoComplete="organization" value={values.company} onChange={update} />
      </div>
      <div className="field">
        <label htmlFor="f-service">What do you need?</label>
        <select id="f-service" name="service" value={values.service} onChange={update}>
          <option value="">Choose a service</option>
          <option>Advertising campaign</option>
          <option>Facebook &amp; Instagram ads</option>
          <option>Email marketing</option>
          <option>Promotional video</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="f-budget">Monthly budget</label>
        <select id="f-budget" name="budget" value={values.budget} onChange={update}>
          <option value="">Choose a range</option>
          <option>Under $2,500</option>
          <option>$2,500 – $10,000</option>
          <option>$10,000 – $50,000</option>
          <option>$50,000+</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="f-message">Tell us about your project</label>
        <textarea id="f-message" name="message" value={values.message} onChange={update} required />
      </div>
      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'}</button>
        <span className={`form-status${status.error ? ' error' : ''}`} role="status" aria-live="polite">{status.text}</span>
      </div>
    </form>
  );
}
