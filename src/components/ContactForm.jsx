import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { site } from '../data/site.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [state, submitToFormspree, reset] = useForm(site.formspreeId, {
    data: { _subject: "New enquiry from the JJ's Advertising website" },
  });
  const [checkError, setCheckError] = useState('');
  const [networkFailed, setNetworkFailed] = useState(false);
  const [sender, setSender] = useState('');

  async function onSubmit(e) {
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email || !message) {
      e.preventDefault();
      setCheckError('Please fill in your name, email and message.');
      return;
    }
    if (!EMAIL_RE.test(email)) {
      e.preventDefault();
      setCheckError('That email address looks incomplete. Check it and try again.');
      return;
    }

    setCheckError('');
    setNetworkFailed(false);
    setSender(name);
    try {
      await submitToFormspree(e);
    } catch {
      setNetworkFailed(true);
    }
  }

  function startOver() {
    reset();
    setSender('');
    setCheckError('');
    setNetworkFailed(false);
  }

  if (state.succeeded) {
    return (
      <div className="form-success" role="status">
        <span className="label">Message sent</span>
        <h3>Thanks, {sender || 'friend'}.</h3>
        <p>Your message is with our team. We reply within one business day, usually sooner.</p>
        <button type="button" className="btn btn-ghost btn-sm" onClick={startOver}>Send another message</button>
      </div>
    );
  }

  const fieldErrors = field => state.errors?.getFieldErrors(field)?.length > 0;
  const sendFailed = networkFailed || (state.errors?.getFormErrors()?.length > 0);

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="f-name">Name</label>
        <input id="f-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="f-email">Email</label>
        <input id="f-email" name="email" type="email" autoComplete="email" required
          aria-invalid={fieldErrors('email') || undefined} aria-describedby="err-email" />
        <ValidationError id="err-email" className="field-error" prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="field">
        <label htmlFor="f-company">Company</label>
        <input id="f-company" name="company" type="text" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="f-service">What do you need?</label>
        <select id="f-service" name="service" defaultValue="">
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
        <select id="f-budget" name="budget" defaultValue="">
          <option value="">Choose a range</option>
          <option>Under $2,500</option>
          <option>$2,500 – $10,000</option>
          <option>$10,000 – $50,000</option>
          <option>$50,000+</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="f-message">Tell us about your project</label>
        <textarea id="f-message" name="message" required
          aria-invalid={fieldErrors('message') || undefined} aria-describedby="err-message" />
        <ValidationError id="err-message" className="field-error" prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Spam trap: hidden from people, filled in by bots. Formspree discards anything that fills it. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />

      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={state.submitting}>
          {state.submitting ? 'Sending…' : 'Send message'}
        </button>
        <span className={`form-status${checkError || sendFailed ? ' error' : ''}`} role="status" aria-live="polite">
          {checkError || (sendFailed ? `The message didn't go through. Try again, call us at ${site.phone}, or email us at ${site.email}.` : '')}
        </span>
      </div>
    </form>
  );
}
