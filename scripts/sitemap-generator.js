import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const siteUrl = "https://mygarden.com"; // ❗ o'z domeningizni yozing
const pagesDir = path.join(__dirname, "../src/pages");

function getPages(dir, basePath = "") {
  const files = fs.readdirSync(dir);
  let urls = [];

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      urls = urls.concat(getPages(fullPath, basePath + "/" + file));
    } else if (file.endsWith(".tsx") && !file.startsWith("_")) {
      const slug = file.replace(/\.tsx$/, "");
      const route = slug === "index" ? "" : slug;
      urls.push(basePath + "/" + route);
    }
  });

  return urls;
}

function generateSitemap(urls) {
  const items = urls
    .map(
      (url) => 
    <url>
      <loc>${siteUrl}${url}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
    )
    .join("");

  return <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${items}
  </urlset>;
}

const urls = getPages(pagesDir);
const sitemap = generateSitemap(urls);

fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemap);
console.log("✅ Sitemap generated: public/sitemap.xml");
