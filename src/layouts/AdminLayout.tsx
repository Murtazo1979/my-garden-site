// src/layouts/AdminLayout.tsx
import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-4">
          <a href="/admin/dashboard" className="block hover:text-yellow-300">
            📊 Dashboard
          </a>
          <a href="/admin/posts" className="block hover:text-yellow-300">
            📝 Posts
          </a>
          <a href="/admin/settings" className="block hover:text-yellow-300">
            ⚙️ Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
