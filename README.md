# THE CLASSIC FURNITURE

Premium furniture showroom website for **THE CLASSIC FURNITURE**, Ahmedabad, Gujarat.

Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide icons. Static data only — ready for a future CMS/ERP.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — ESLint

## Business details

Edit `data/site-config.ts` for:

- Showroom name, address, city
- Phone / WhatsApp (`7801908203`)
- Email, hours, Google Maps URLs
- Social links

Products, categories, gallery and testimonials live in `data/`.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/furniture` | All categories |
| `/furniture/[category]` | Category listing |
| `/products/[slug]` | Product detail |
| `/custom-furniture` | Custom enquiry |
| `/manufacturing` | Manufacturing story |
| `/gallery` | Image gallery + lightbox |
| `/about` | About |
| `/contact` | Contact + map |

## Notes

- Images currently use Unsplash placeholders — replace with your photography under `public/images/` when ready.
- Enquiry forms are UI-only; WhatsApp is the primary working lead channel.
- SEO: Metadata API, `robots.ts`, `sitemap.ts`, and JSON-LD for local business / products / breadcrumbs.
