import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { services } from "../src/data/services.js";
import { projects } from "../src/data/projects.js";

const DOMAIN = "https://yourdomain.com";

const staticPages = [
  "",
  "about",
  "services",
  "portfolio",
  "request-quote",
  "contact",
  "privacy-policy",
  "terms",
];

const today = new Date().toISOString().split("T")[0];

const urls = [];

// Static Pages
staticPages.forEach((page) => {
  urls.push(`
  <url>
      <loc>${DOMAIN}/${page}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`);
});

// Service Details
services.forEach((service) => {
  urls.push(`
  <url>
      <loc>${DOMAIN}/services/${service.slug}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
  </url>`);
});

// Portfolio Details
projects.forEach((project) => {
  urls.push(`
    <url>
      <loc>${DOMAIN}/portfolio/${project.slug}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  `);
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls.join("\n")}

</urlset>
`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(__dirname, "..", "public", "sitemap.xml");
fs.writeFileSync(outputPath, sitemap);

console.log("✅ Sitemap Generated Successfully");