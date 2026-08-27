# Dr. Shekar Reddy Teeth Clinic — Client Handoff

## Included
- Original project structure and all original clinic images preserved.
- Vite + React + TypeScript production build setup.
- Browser-history routing for Home, About, Treatments, Team, Gallery, Contact, Privacy, Terms and treatment detail URLs.
- Treatment detail landing pages with WhatsApp and booking CTAs.
- Scroll progress indicator.
- Scroll reveal animations with blur/scale/slide transitions.
- Existing Framer Motion page transitions, counters, modal animation, gallery animation and hover micro-interactions retained.
- Reduced-motion accessibility support.
- Keyboard focus states and improved interactive affordances.
- `robots.txt`, `sitemap.xml`, Vercel SPA fallback and canonical URL handling.
- Dynamic document titles and canonical URLs.

## Before the client launch
1. Verify the clinic name, address, phone numbers, hours, doctor names/qualifications and every treatment claim.
2. Replace any stock imagery with real clinic photography where possible.
3. Confirm that every review/rating shown on the site is genuine and attributable to the clinic.
4. Replace the placeholder domain in `public/sitemap.xml` with the final production domain.
5. Set up Google Search Console and submit the sitemap.
6. Add the clinic's official Google Business Profile URL if available.
7. Test WhatsApp, phone, Maps, booking modal, mobile bottom actions and all routes on the final domain.
8. Run `npm ci` followed by `npm run build` on a machine with network access.
9. Deploy the generated `dist` directory to Vercel or another static host.

## Important booking behavior
The website treats a booking as an appointment *request*. The visitor is sent to WhatsApp for clinic confirmation. It does not claim live appointment availability or automatic appointment confirmation.

## Animation behavior
The site intentionally uses multiple layers of motion:
- Page enter/exit transitions
- Scroll reveal: opacity + vertical movement + subtle blur/scale
- Staggered card reveals
- Animated counters
- Gallery/modal transitions
- Button and image hover micro-interactions
- Floating WhatsApp pulse
- Scroll progress indicator

Users who enable reduced motion receive a minimal-motion experience.
