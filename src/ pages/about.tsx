// src/pages/about.tsx
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>How to Build a Garden Café That Attracts Customers | MyGarden</title>
        <meta
          name="description"
          content="Step-by-step guide on building a successful garden café that attracts American and European customers. From design to atmosphere."
        />
      </Head>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">
            ☕ How to Build a Garden Café That Attracts Customers
          </h1>
          <p className="text-lg text-gray-600">
            A complete guide for entrepreneurs and designers who want to create 
            unforgettable café experiences surrounded by nature.
          </p>
          <img
            src="/images/garden-cafe.jpg"
            alt="Garden café design with outdoor tables and greenery"
            className="rounded-lg shadow-lg mx-auto mt-6"
          />
        </section>

        <article className="prose lg:prose-lg">
          <h2>1. Choosing the Right Location</h2>
          <p>
            A garden café thrives when it is placed in the right environment. 
            For American cities, urban neighborhoods with lots of young 
            professionals are ideal. In Europe, historical districts and 
            cultural hubs attract tourists who love relaxing in outdoor cafés. 
            Accessibility and visibility are key.
          </p>

          <h2>2. Creating a Natural Ambience</h2>
          <p>
            Customers come to a garden café to escape noise and stress. Plants, 
            flowers, and natural wood instantly make people feel relaxed. Add 
            vertical gardens for small spaces, and consider seasonal plants to 
            keep the café looking fresh all year round.
          </p>

          <img
            src="/images/cafe-ambience.jpg"
            alt="Cozy garden café with flowers and natural wood furniture"
            className="rounded-md shadow-md my-6"
          />

          <h2>3. Furniture and Layout</h2>
          <p>
            Comfort matters. Use weather-resistant chairs and tables that are 
            still stylish. Americans often prefer spacious layouts, while 
            Europeans enjoy small cozy corners. Create both options if possible 
            to attract a wider audience.
          </p>

          <h2>4. Food and Drinks That Match the Theme</h2>
          <p>
            A garden café is incomplete without a menu that matches the 
            environment. Offer organic teas, fresh juices, and eco-friendly meals. 
            In Europe, local pastries work well; in the US, vegan and plant-based 
            options are extremely popular in 2025.
          </p>

          <h2>5. Lighting and Evening Atmosphere</h2>
          <p>
            Warm string lights, lanterns, and candles can transform your café 
            after sunset. Customers love places that are Instagram-worthy, and 
            lighting plays a huge role. Solar-powered lights also save energy and 
            promote sustainability.
          </p>

          <h2>6. Music and Cultural Vibes</h2>
          <p>
            Background music enhances the atmosphere. In New York, jazz is a 
            favorite, while in Paris, soft acoustic or French café music creates 
            the perfect vibe. Music should be subtle, not overwhelming, allowing 
            conversations to flow.
          </p>

          <img
            src="/images/cafe-music.jpg"
            alt="Romantic garden café with soft lighting and live music"
            className="rounded-md shadow-md my-6"
          />
          <h2>7. Marketing and Social Media Presence</h2>
          <p>
            A garden café must have a strong online presence. Instagram, TikTok, 
            and Google Maps reviews are essential for attracting both locals and 
            tourists. Encourage customers to share photos of your garden design 
            with hashtags. A photogenic garden café will market itself.
          </p>

          <h2>Conclusion</h2>
          <p>
            Building a garden café in 2025 means blending design, comfort, and 
            sustainability. By focusing on ambience, food, and marketing, your 
            café can become a favorite spot for both Americans and Europeans. 
            A garden café is not just a place to drink coffee — it’s an 
            experience people will return to.
          </p>

          <p className="mt-6 text-gray-700 italic">
            🌸 This article is part of the MyGarden blog series. Each guide is 
            unique, written with international readers in mind, and prepared for 
            AdSense approval.
          </p>
        </article>
      </main>
    </>
  );
}
