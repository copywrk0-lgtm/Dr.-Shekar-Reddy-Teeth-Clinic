import fs from 'node:fs';
import path from 'node:path';
const domain = process.argv[2];
if (!domain) throw new Error('Usage: node scripts/set-domain.mjs https://example.com');
const clean = domain.replace(/\/$/, '');
const files = ['index.html','public/robots.txt','public/sitemap.xml','README.md','docs/DEPLOYMENT.md','docs/SEO.md'];
for (const file of files) {
  const p = path.resolve(file);
  if (fs.existsSync(p)) fs.writeFileSync(p, fs.readFileSync(p,'utf8').replaceAll('https://YOUR-PRODUCTION-DOMAIN.example', clean));
}
console.log(`Production domain set to ${clean}`);
