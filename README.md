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

- **Agency details, email, form setup:** `src/data/site.js`
- **Portfolio pieces:** the `work` list in `src/data/site.js`. The current pieces are concept work; swap in real client projects when you have them.
- **Page text:** `src/pages/`
- **Colors and fonts:** the `:root` block at the top of `src/styles.css`
- **Logo:** `public/logo.jpg` and `public/logo-small.jpg`

## Before going live

- Replace the placeholder email `hello@jjsadvertising.com` in `src/data/site.js`.
- The contact form doesn't send anywhere yet. Create a form endpoint (for example at formspree.io) and paste its URL into `formEndpoint` in `src/data/site.js`.
