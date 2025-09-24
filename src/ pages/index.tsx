import { Seo } from "../lib/seo";
export default function Home() {
  return (
    <>
      <Seo
        title="MyGarden | Modern Garden Design Trends 2025"
        description="Explore modern garden café design trends. Unique ideas to attract American and European visitors with eco-friendly and stylish solutions."
        />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 bg-gradient-to-r from-green-700 to-emerald-500 text-white py-20 rounded-xl shadow-lg">
          <h1 className="text-5xl font-extrabold mb-6">
            🌿 Modern Garden Design Trends 2025
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Discover eco-friendly and stylish garden café designs loved by
            American and European visitors. Bring nature and comfort together.
          </p>
          <Link
            href="/contact"
            className="bg-yellow-400 text-green-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-500 transition"
          >
            Contact Us
          </Link>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-8 text-center mb-16">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-700 mb-3">Eco-Friendly</h3>
            <p>
              Sustainable materials and green design that respect nature and
              attract eco-conscious visitors.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-700 mb-3">Modern Look</h3>
            <p>
              Blend of modern architecture and natural vibes that make your café
              stand out.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-700 mb-3">Customer Focus</h3>
            <p>
              Designed for comfort, relaxation, and Instagram-worthy
              experiences.
            </p>
          </div>
        </section>

        {/* Card Grid Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-emerald-700">
            Featured Ideas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1563714193017-5a5fb60bc02b?w=600&auto=format&fit=crop&q=60"
                alt="Outdoor café with garden tables"
                className="rounded-t-xl w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">Outdoor Café Vibes</h3>
                <p>
                  Wooden tables surrounded by nature – perfect for cozy
                  gatherings.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1503602642458-232111445657?w=600&auto=format&fit=crop&q=60"
                alt="Garden café with colorful chairs"
                className="rounded-t-xl w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">Colorful Comfort</h3>
                <p>
                  Bright and modern designs that attract both locals and
                  tourists.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=600&auto=format&fit=crop&q=60"
                alt="Romantic evening lights in garden café"
                className="rounded-t-xl w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">Evening Romance</h3>
                <p>
                  Soft lighting and green atmosphere – ideal for late-night
                  talks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-green-100 py-12 rounded-xl shadow-inner">
          <h2 className="text-3xl font-bold mb-4 text-green-800">
            Ready to Build Your Dream Garden Café?
          </h2>
          <p className="mb-6 text-gray-700">
            Contact our team today and transform your vision into reality. Let’s
            design a space that will attract customers and inspire visitors.
          </p>
          <Link
            href="/contact"
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-800 transition"
          >
            Get in Touch
          </Link>
        </section>
      </main>
    </>
  );
}
