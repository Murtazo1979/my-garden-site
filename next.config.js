---

### 📂 next.config.js
`js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "picsum.photos"], // External images
  },
  i18n: {
    locales: ["en", "uz", "ru"],
    defaultLocale: "en",
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
