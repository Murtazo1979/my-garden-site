import fs from "fs";
import path from "path";
import matter from "gray-matter"; // agar blog postlarda frontmatter ishlatsangiz
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const siteUrl = "https://mygarden.com"; // ❗ o'z domeningizga almashtiring
const blogDir = path.join(__dirname, "../src/pages/blog");

function getPosts() {
  const files = fs.readdirSync(blogDir);
  return files
    .filter((file) => file.endsWith(".md") || file.endsWith(".tsx"))
    .map((file) => {
      const filePath = path.join(blogDir, file);
      const slug = file.replace(/\.md|\.tsx/, "");
      let title = slug;
      let description = "Blog post about gardening.";

      if (file.endsWith(".md")) {
        const raw = fs.readFileSync(filePath, "utf-8");
        const parsed = matter(raw);
        if (parsed.data.title) title = parsed.data.title;
        if (parsed.data.description) description = parsed.data.description;
      }

      return { slug, title, description };
    });
}

function generateRSS(posts) {
  const items = posts
    .map(
      (post) => 
    <item>
      <title>${post.title}</title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <description>${post.description}</description>
    </item>
    )
    .join("");

  return <?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>MyGarden RSS Feed</title>
      <link>${siteUrl}</link>
      <description>Latest posts from MyGarden blog</description>
      ${items}
    </channel>
  </rss>;
}

const posts = getPosts();
const rss = generateRSS(posts);

fs.writeFileSync(path.join(__dirname, "../public/rss.xml"), rss);
console.log("✅ RSS feed generated: public/rss.xml");
