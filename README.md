# Property Booking

Modern, minimal 5-page website for **Property Booking** — houses, construction services
and highrise projects in Pakistan.

🌐 **Pages:** `index.html` (Home) · `houses.html` (listings + EMI calculator) ·
`construction.html` (cost estimator + sample quotations) · `highrise.html` (projects) ·
`contact.html` (enquiry form → WhatsApp)

## Quick facts

- **Static site** — no build step. Deploy as-is to Vercel / Netlify / GitHub Pages.
- **Contact:** 0303 0292114 · WhatsApp `wa.me/923030292114` · info@propertybooking.pk
- **Fonts:** Fraunces + Inter (Google Fonts CDN)
- **Images:** bundled locally in `images/` (Unsplash, free to use)

## Editing content

All sample listings, projects, areas, testimonials and construction rates live in
**one file: `js/data.js`** — clearly marked as examples. Replace with real
inventory anytime; every page renders from it.

| What | Where |
|---|---|
| House listings (price, beds, baths, area, photo) | `LISTINGS` in `js/data.js` |
| Highrise projects (units, payment plans, amenities) | `PROJECTS` in `js/data.js` |
| Construction rates (PKR / sq ft) & plot sizes | `TIERS` / `PLOT_SIZES` in `js/data.js` |
| Popular areas, testimonials | `AREAS` / `TESTIMONIALS` in `js/data.js` |
| Phone / WhatsApp / email | `PHONE_*`, `WHATSAPP`, `EMAIL` in `js/data.js` (+ `tel:`/`wa.me` links in HTML) |
| Logo | `images/logo.svg` (SVG, easy to swap) |

## Notes

- The enquiry form opens WhatsApp with a pre-filled message — no backend needed.
- All prices/quotations are labelled as examples until replaced with live figures.
- See `PLAN.md` for the original build plan.
