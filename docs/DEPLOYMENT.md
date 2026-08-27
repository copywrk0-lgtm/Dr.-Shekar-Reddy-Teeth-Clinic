# Deployment

## Vercel
1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Add `VITE_APPS_SCRIPT_URL` if lead capture is enabled.
6. Set the production domain.
7. Replace the placeholder domain in `index.html`, `public/robots.txt`, `public/sitemap.xml` and JSON-LD.
8. Deploy and test direct URLs such as `/about`, `/treatments/rct` and an unknown URL.

`vercel.json` rewrites application routes to `index.html` so the custom React 404 and client-side routing work after refresh.
