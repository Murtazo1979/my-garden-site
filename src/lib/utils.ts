// src/lib/utils.ts

// Sana форматлаш
export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// SEO-friendly slug
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// Уникал ID
export function generateId(prefix = "id"): string {
  return ${prefix}-${Math.random().toString(36).substr(2, 9)};
}

// Матнни қисқартириш (preview учун)
export function truncate(text: string, length = 150): string {
  return text.length > length ? text.substring(0, length) + "..." : text;
}
