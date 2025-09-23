// src/layouts/MainLayout.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow container mx-auto px-4 py-6">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
