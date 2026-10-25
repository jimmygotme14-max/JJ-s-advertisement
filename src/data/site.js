// Edit your agency details here. They are used across every page.
export const site = {
  name: "JJ's Advertising",
  email: 'hello@jjsadvertising.com',
  // Formspree form ID (from https://formspree.io/f/xrpppgzz). Contact form messages go to the email on that Formspree account.
  formspreeId: 'xrpppgzz',
};

export const nav = [
  { to: '/services', label: 'Services' },
  { to: '/facebook-instagram', label: 'Facebook & Instagram' },
  { to: '/email-marketing', label: 'Email' },
  { to: '/video', label: 'Video' },
  { to: '/portfolio', label: 'Portfolio' },
];

export const offerings = [
  {
    to: '/services',
    title: 'Advertising campaigns',
    text: 'Strategy, creative and media buying for billboards, print, search and display.',
    spec: '14 × 48 ft · 728 × 90 · 300 × 250',
  },
  {
    to: '/facebook-instagram',
    title: 'Facebook & Instagram',
    text: 'Paid social that stops the scroll, aimed at the people most likely to buy.',
    spec: '1080 × 1350 feed · 1080 × 1920 stories',
  },
  {
    to: '/email-marketing',
    title: 'Email marketing',
    text: 'Newsletters and automated emails that bring customers back again and again.',
    spec: '600 px templates · automated flows',
  },
  {
    to: '/video',
    title: 'Promotional video',
    text: 'Short spots for social, streaming and TV, from script to final cut.',
    spec: ':06 · :15 · :30 · :60',
  },
];

export const steps = [
  { title: 'Brief', text: 'We learn your business, your customers and what success looks like in numbers.' },
  { title: 'Strategy', text: 'We pick the audience, the message and the channels, and agree on a budget.' },
  { title: 'Create', text: "We write and design the campaign, then refine it with you until it's right." },
  { title: 'Launch', text: 'We book the media, deliver files to spec and put the campaign live.' },
  { title: 'Measure', text: "We track results, report what's working and shift spend toward it." },
];

// Concept pieces made to show range. Replace with real client work when you have it.
export const work = [
  { id: 'bakery', title: 'Still Warm', sector: 'Bakery', category: 'Social', format: 'story', formatLabel: 'Instagram story · 9:16',
    headline: 'Still warm at 7am.', tag: 'Sponsored', cta: 'Order ahead', bg: '#f4d9b8', fg: '#3a1f0b', accent: '#c2410c',
    text: 'A morning story ad that sends nearby customers to pre-order before the rush.' },
  { id: 'gym', title: 'Open Late', sector: 'Gym', category: 'Outdoor', format: 'billboard', formatLabel: 'Billboard · 14 × 48 ft',
    headline: "Your excuses close at 9. We don't.", tag: 'Open until midnight', bg: '#0b0f14', fg: '#ffffff', accent: '#2ee6d0',
    text: 'A roadside billboard aimed at commuters driving home after work.' },
  { id: 'auto', title: 'Spring Tune-Up', sector: 'Auto repair', category: 'Email', format: 'email', formatLabel: 'Email · 600 px',
    headline: 'Your car called. It wants a check-up.', tag: 'Spring service', cta: 'Book a slot', bg: '#1d4ed8', fg: '#ffffff', accent: '#facc15',
    text: 'A seasonal reminder email sent to past customers, with one-tap booking.' },
  { id: 'restaurant', title: 'Grand Opening', sector: 'Restaurant', category: 'Video', format: 'video', formatLabel: 'Video · :15 · 16:9',
    headline: 'Opening Friday. Bring an appetite.', tag: '0:07 / 0:15', bg: '#7f1d1d', fg: '#ffffff', accent: '#fbbf24',
    text: 'A fifteen-second launch spot for streaming and YouTube pre-roll.' },
  { id: 'boutique', title: 'Weekend Sale', sector: 'Clothing boutique', category: 'Display', format: 'rect', formatLabel: 'Display · 300 × 250',
    headline: '48 hours. 30% off. Go.', tag: 'Ad', cta: 'Shop now', bg: '#fdf2f8', fg: '#831843', accent: '#db2777',
    text: 'A retargeting banner shown to people who browsed but did not buy.' },
  { id: 'realty', title: 'New Listings', sector: 'Real estate', category: 'Social', format: 'feed', formatLabel: 'Facebook feed · 4:5',
    headline: 'Your next address is on our feed.', tag: 'Sponsored', cta: 'See homes', bg: '#e7efe9', fg: '#14301f', accent: '#15803d',
    text: 'A feed ad with a carousel of new listings for local home buyers.' },
  { id: 'salon', title: 'Fresh Start', sector: 'Hair salon', category: 'Social', format: 'square', formatLabel: 'Instagram post · 1:1',
    headline: 'Fresh cut. Fresh start.', tag: 'Sponsored', cta: 'Book now', bg: '#111827', fg: '#ffffff', accent: '#f472b6',
    text: 'A square post that books appointments straight from Instagram.' },
  { id: 'coffee', title: 'We Saved Your Seat', sector: 'Coffee shop', category: 'Email', format: 'email', formatLabel: 'Win-back email · 600 px',
    headline: 'We saved your seat.', tag: "It's been a while", cta: 'Claim a free refill', bg: '#3f2a1d', fg: '#fff7ed', accent: '#fb923c',
    text: 'A win-back email for loyalty members who have not visited in 60 days.' },
  { id: 'lawn', title: 'Summer Season', sector: 'Landscaping', category: 'Video', format: 'reel', formatLabel: 'Reel · :15 · 9:16',
    headline: 'Your lawn, but better.', tag: '0:04 / 0:15', bg: '#14532d', fg: '#ecfccb', accent: '#a3e635',
    text: 'A before-and-after reel for homeowners planning summer projects.' },
];
