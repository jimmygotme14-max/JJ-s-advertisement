# JJ's Advertising website

A React website (Vite + React Router) with seven pages: Home, Advertising services, Facebook & Instagram, Email marketing, Promotional video, Portfolio and Contact.

## Run it

```bash
npm install
npm run dev       # local preview at http://localhost:5173
npm run build     # production files go to dist/
```

The `dist/` folder can be uploaded to any static host (GitHub Pages, Netlify, Vercel, cPanel). Links use `#/page` addresses, so no server setup is needed.

## Where to edit

- **Agency details, email, Formspree form ID:** `src/data/site.js`
- **Portfolio pieces:** the `work` list in `src/data/site.js`. The current pieces are concept work; swap in real client projects when you have them.
- **Page text:** `src/pages/`
- **Colors and fonts:** the `:root` block at the top of `src/styles.css`
- **Logo:** `public/logo.jpg` and `public/logo-small.jpg`

## Contact form

The contact form sends through Formspree (form ID `xrpppgzz`, set in `src/data/site.js`) using `@formspree/react`. Messages go to the email address on your Formspree account, with the subject "New enquiry from the JJ's Advertising website". A hidden `_gotcha` field filters out spam bots.

## Before going live

- Replace the placeholder email `hello@jjsadvertising.com` in `src/data/site.js`. It is shown on the site and used as the fallback if the form can't send.
- Optional: in Formspree's form settings, restrict submissions to your website's domain once it is live.
