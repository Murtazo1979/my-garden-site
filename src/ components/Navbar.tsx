// src/components/Navbar.tsx
import Link from "next/link";
import { menuItems } from "../data/menu";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-green-600 to-emerald-500 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl">
          🌿 MyGarden
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="text-white hover:text-yellow-300 transition duration-300 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
