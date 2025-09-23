export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold">🌿 MyGarden</p>
        <p className="mt-2">Murtazo | Bukhara City</p>
        <p className="mt-1">
          📞 <a href="tel:+998973000116" className="hover:underline">+998 97 300 01 16</a> |
          ✉️ <a href="mailto:murtazo1979@gmail.com" className="hover:underline">murtazo1979@gmail.com</a>
        </p>
        <p className="mt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} MyGarden. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
