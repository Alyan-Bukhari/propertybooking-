# Property Booking — Website Build Plan v1
**Date:** 2026-10-17 | **Repo:** `Alyan-Bukhari/propertybooking-` (exists, empty) | **Contact:** 03030292114

## 1. Concept
A modern, minimal, highly-interactive 5-page lead-generation website for a Pakistani
property business: finished houses, construction services, and highrise projects.
Static HTML/CSS/JS — deploys straight to Vercel from the GitHub repo, no build step.

## 2. Design system
- **Palette:** Deep Teal `#0C3A36` (primary / trust), Warm Gold `#C6A15B` (accent / premium),
  Off-white `#F7F6F2` (background), Ink `#1B1E1D` (text). Dark footer in deep teal.
- **Typography:** Fraunces (display headings, premium editorial feel) + Inter (body/UI).
- **Motion (performant, no scroll-jacking):** reveal-on-scroll, animated stat counters,
  hover lift + image zoom on cards, slow ken-burns hero, sticky glass navbar,
  FAQ accordions, gallery lightbox, animated filter transitions, floating WhatsApp bubble.
- **Mobile-first responsive** — majority of PK traffic is mobile.

## 3. Logo (SVG, designed in-house)
Rounded-square deep-teal badge containing a gold line-art house whose door is a
keyhole — "your booked home". Wordmark "Property Booking" in clean sans next to it.
Ships as `images/logo.svg` + favicon. Light/dark variants.

## 4. Pages & sections

### index.html — Home
1. Sticky glass navbar (logo, links, Call button)
2. Hero: headline + subline, **search widget with tabs** (Houses / Construction / Highrise)
   + size selector (5 / 10 marla / 1 kanal) → jumps to filtered Houses page
3. Trust stats band (animated counters: homes delivered, marla constructed, years, happy families)
4. Featured Houses (3 cards, link to Houses page)
5. Popular Areas strip (DHA, Bahria Town, Gulberg, Johar Town — card images)
6. Construction teaser (image + estimator CTA)
7. Highrise teaser (project render + CTA)
8. "How booking works" — 3 steps (Browse → Book → Own)
9. Testimonials (3 cards)
10. CTA banner (Call / WhatsApp)
11. Footer (quick links, contact, socials)

### houses.html — Houses for sale
- Filter bar: size (5 marla / 10 marla / 1 kanal), price range, bedrooms, sort (price ↑↓, newest)
- 9 example listings grid: photo, price (PKR, bold), beds/baths icons, marla-kanal badge,
  society/location line, status ribbon (Ready / New), verified tick
- "Enquire" on each card → contact form pre-filled with that property
- EMI / monthly-installment calculator widget (price, down payment, years → monthly)
- CTA band

### construction.html — Construction services
- Hero + intro, 4-step process (Design → Grey structure → Finishing → Handover)
- **Interactive cost estimator:** plot size (5/10 marla, 1/2 kanal) × quality tier
  (Grey structure / Standard+ / Luxury) → live PKR quote with animated counting numbers
- Example quotation tables: grey-structure rate + finishing rate per sq ft for each size,
  with covered-area math shown (clearly labeled as examples)
- What's included list, materials note, small gallery, mini-FAQ, CTA

### highrise.html — Highrise projects
- 2 example projects, each: render hero, overview, payment-plan table
  (down payment / installments / possession), amenities icon grid,
  location + completion-status timeline
- Developer trust note + CTA

### contact.html — Contact
- Info cards: Phone 03030292114 (tap-to-call), WhatsApp (wa.me/923030292114),
  email (placeholder), office hours
- Enquiry form: name, phone, interested in (houses/construction/highrise),
  message → submits via **WhatsApp deep-link** (no backend needed; message pre-filled)
- FAQ accordion (booking process, payment plans, possession, documentation)
- Map embed (Lahore — generic until office address confirmed)
- Footer

## 5. Must-haves added from research (things not explicitly asked for)
- Floating WhatsApp bubble on every page (PK market = primary contact channel)
- Sticky mobile call bar
- Verified-listing badges, testimonials, animated counters (trust signals)
- EMI calculator (Houses) + construction cost estimator (differentiator — none of the
  big portals do this well)
- Popular Areas strip (browsing aid + SEO), per-page SEO meta, semantic HTML
- "Similar properties" cross-links, enquiry pre-fill from listing cards
- `js/data.js` holds all listings/projects/prices as **clearly-marked sample data**,
  one file to edit when real inventory is ready

## 6. Open questions for Alyan
1. Email address for the site? (Using `info@propertybooking.pk` as placeholder.)
2. City/areas focus? (Assuming Lahore: DHA / Bahria / Gulberg / Johar Town.)
3. Office address for the map pin? (Generic Lahore embed until confirmed.)
4. Highrise project names? (Using tasteful placeholder names he can rename.)
5. All prices/listings are realistic **examples** — he'll replace with real inventory via `js/data.js`.

## 7. Phase gate
Planning (this doc) → **Alyan approves** → Development → QA (desktop + mobile
screenshots, animation checks) → **Alyan reviews screenshots** → Push to GitHub.
