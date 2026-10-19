# PB Outsourcing — Next.js starter

A starter website for PB Outsourcing, a real estate photo editing and visual media services business.

## Included

- Next.js App Router + React + TypeScript
- Responsive Home, Services, Portfolio, About, and Contact pages
- Tailored green/ivory visual theme
- Reusable header, footer, service cards, comparison slider, gallery/lightbox, and quote form
- SEO metadata
- Accessible focus styles and reduced-motion support
- Contact and WhatsApp links for `+91 99443 10379`

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Important before publishing

1. Replace all Unsplash demo images with licensed, client-approved images.
2. The hero comparison uses illustrative images that are not a genuine matching before/after pair. Replace both with the same source photograph and its edited version.
3. The contact form is only a UI prototype. It does not send or store enquiries. Connect it to a backend or form provider before launch.
4. Add the correct production domain in `app/layout.tsx` metadata.
5. Add real business details, privacy policy, terms, and verified testimonials only after the client supplies them.
6. Review image licensing, SEO metadata, keyboard interactions, and mobile layouts before production deployment.

## Project structure

```text
app/
  about/page.tsx
  contact/page.tsx
  portfolio/page.tsx
  services/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  before-after-slider.tsx
  contact-form.tsx
  footer.tsx
  header.tsx
  portfolio-gallery.tsx
data/
  services.tsx
```

## Deployment

Deploy to Vercel or another platform that supports Next.js. Configure the production domain and any form-provider environment variables in the deployment dashboard. Never commit API keys or secrets.
