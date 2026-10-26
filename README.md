# JJ's Advertising website

A React website (Vite + React Router) with seven pages: Home, Advertising services, Facebook & Instagram, Email marketing, Promotional video, Portfolio and Contact.

## Run it

```bash
npm install
npm run dev       # local preview at http://localhost:5173
npm run build     # production files go to dist/
```

The `dist/` folder can be uploaded to any static host (GitHub Pages, Netlify, Vercel, cPanel). Links use `#/page` addresses, so no server setup is needed.

## Publishing on GitHub Pages

`.github/workflows/deploy.yml` builds and publishes the site every time `main` changes.

1. Make the repo public (free GitHub Pages needs this). The workflow skips itself while the repo is private.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Go to **Actions → Deploy website → Run workflow** for the first publish. After that it runs on every change.

The site is live at https://jjsadvertisement.com (custom domain set in **Settings → Pages**; DNS is at Cloudflare, set to "DNS only"). The misspelled jjsadvertismenet.com forwards there with a Cloudflare redirect rule.

**Custom domain:** buy the domain, then add it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions at your domain registrar.

## Where to edit

- **Agency details, email, Formspree form ID:** `src/data/site.js`
- **Portfolio pieces:** the `work` list in `src/data/site.js`. The current pieces are concept work; swap in real client projects when you have them.
- **Page text:** `src/pages/`
- **Colors and fonts:** the `:root` block at the top of `src/styles.css`
- **Logo:** `public/logo.jpg` and `public/logo-small.jpg`

## Contact form

The contact form sends through Formspree (form ID `xrpppgzz`, set in `src/data/site.js`) using `@formspree/react`. Messages go to the email address on your Formspree account, with the subject "New enquiry from the JJ's Advertising website". A hidden `_gotcha` field filters out spam bots.

## Before going live

- Check the contact email and phone number in `src/data/site.js` (currently `jjsadvertisment@gmail.com` and (843) 764-7517). Both are shown on the site and offered as fallbacks if the form can't send.
- If you change the email or phone, also update them in `index.html`. That copy is the backup message shown if the site fails to load.
- Optional: in Formspree's form settings, restrict submissions to your website's domain once it is live.
