import { site } from '../data/site.js';

// Builds a mailto link that opens the visitor's email app with the problem details filled in.
// Email is used (not the contact form) so reports still reach you when parts of the site are broken.
export function problemMailto(details = '') {
  const page = typeof window !== 'undefined' ? window.location.href : '';
  const title = typeof document !== 'undefined' ? document.title : site.name;
  const screen = typeof window !== 'undefined' ? `${window.innerWidth} × ${window.innerHeight}` : '';
  const browser = typeof navigator !== 'undefined' ? navigator.userAgent : '';

  const subject = `Website problem: ${title}`;
  const body = [
    'Hi JJ\'s Advertising,',
    '',
    'Something isn\'t working on your website.',
    '',
    'What happened:',
    '',
    '',
    '',
    '---',
    'These details help us fix it (please leave them in):',
    `Page: ${page}`,
    details ? `Error: ${details}` : null,
    `Screen: ${screen}`,
    `Browser: ${browser}`,
  ].filter(line => line !== null).join('\n');

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
