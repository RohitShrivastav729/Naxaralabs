import { writeFileSync } from "node:fs";
import { getCanonicalUrl, ROUTE_METADATA } from "../src/seo/routes.js";

const urls = Object.entries(ROUTE_METADATA)
  .filter(([, metadata]) => metadata.indexable)
  .map(([pathname]) => `  <url><loc>${getCanonicalUrl(pathname)}</loc></url>`)
  .join("\n");

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);