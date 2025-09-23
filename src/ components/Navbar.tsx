// src/components/Navbar.tsx
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { menuItems } from "../data/menu";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gradient-to-r from-green-600 to-emerald-500 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl flex items-center">
          🌿 MyGarden
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="text-white hover:text-yellow-300 transition duration-300 font-medium"
            >
              {item.label}
            </Link>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 rounded bg-white/20 text-white hover:bg-white/30 transition"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </nav>
  );
}
