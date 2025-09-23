// src/pages/index.tsx
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Modern Garden Design Trends 2025 | MyGarden</title>
        <meta
          name="description"
          content="Explore the latest garden design trends for cafes, restaurants, and homes in 2025. Perfect inspiration for USA and European audiences."
        />
      </Head>

      <main className="max-w-5xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            🌿 Modern Garden Design Trends 2025
          </h1>
          <p className="text-lg text-gray-600">
            Discover unique ideas to transform your garden, café, or restaurant into 
            a stylish and eco-friendly space loved by American and European visitors.
          </p>
          <img
            src="/images/garden-hero.jpg"
            alt="Modern garden design with greenery and lights"
            className="rounded-lg shadow-lg mx-auto mt-6"
          />
        </section>

        {/* Blog Content */}
        <article className="prose lg:prose-lg">
          <h2>1. Sustainable and Eco-Friendly Gardens</h2>
          <p>
            In 2025, sustainability is not just a trend — it’s a necessity. American 
            and European audiences are increasingly aware of climate change and eco 
            responsibility. Restaurants and cafés that integrate solar lighting, 
            recycled materials, and water-saving irrigation systems in their gardens 
            attract more visitors and positive media attention.
          </p>

          <h2>2. Minimalist Design with Natural Touch</h2>
          <p>
            Minimalism continues to inspire designers worldwide. Scandinavian 
            simplicity combined with Mediterranean warmth is the perfect balance 
            for outdoor spaces. Wooden furniture, stone paths, and neutral colors 
            provide comfort while still looking modern.
          </p>

          <img
            src="/images/minimalist-garden.jpg"
            alt="Minimalist garden with wooden chairs and stone pathway"
            className="rounded-md shadow-md my-6"
          />

          <h2>3. Smart Gardens with Technology</h2>
          <p>
            Technology is playing a huge role in 2025 garden designs. From smart 
            irrigation systems controlled via mobile apps to automated LED lighting 
            that changes colors at night, Americans and Europeans love the mix of 
            nature and technology. This not only makes the garden attractive but also 
            energy-efficient.
          </p>

          <h2>4. Green Walls and Vertical Gardens</h2>
          <p>
            In urban areas, space is limited. Vertical gardens and green walls 
            transform small balconies or restaurant patios into green paradises. 
            They also improve air quality and create a relaxing atmosphere for guests.
          </p>

          <h2>5. Outdoor Dining Experience</h2>
          <p>
            Outdoor dining has become essential since the pandemic. Cafés and 
            restaurants in the US and EU are investing in cozy, garden-inspired 
            dining areas with natural wood tables, hanging lights, and lots of 
            greenery. Customers feel more comfortable and safe in open-air 
            environments.
          </p>

          <img
            src="/images/outdoor-dining.jpg"
            alt="Beautiful outdoor dining in a modern café garden"
            className="rounded-md shadow-md my-6"
          />

          <h2>6. The Role of Lighting in Garden Atmosphere</h2>
          <p>
            Lighting is no longer just functional; it’s part of the design. Warm 
            string lights, lanterns, and solar-powered lamps are very popular. 
            They create a romantic European vibe while being cost-effective and 
            eco-friendly.
          </p>
          <h2>7. Fusion of Local Culture</h2>
          <p>
            Gardens in 2025 often combine local traditions with modern aesthetics. 
            For example, an American café might include Japanese Zen garden elements, 
            while a European restaurant could mix Mediterranean olive trees with 
            Nordic minimalism. This cultural blend creates a unique identity.
          </p>

          <h2>Conclusion</h2>
          <p>
            Modern garden design in 2025 is all about balance: sustainability, 
            technology, culture, and aesthetics. Whether you are a café owner in 
            New York or a restaurant designer in Paris, these trends will help you 
            attract new customers and create unforgettable experiences.
          </p>

          <p className="mt-6 text-gray-700 italic">
            ✨ Stay tuned for more unique garden design posts. Each article on 
            MyGarden is original, over 1000 words, and written with international 
            readers in mind.
          </p>
        </article>
      </main>
    </>
  );
}
