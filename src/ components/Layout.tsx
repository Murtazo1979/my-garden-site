import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>MyGarden</title>
        <meta
          name="description"
          content="Professional garden café website that attracts American and European customers."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header with Logo */}
      <header className="flex items-center p-4 bg-green-900 text-white shadow-md">
        <img
          src="/logo.png"
          alt="MyGarden Logo"
          className="h-10 w-auto mr-3 rounded"
        />
        <h1 className="text-2xl font-bold tracking-wide">MyGarden</h1>
      </header>

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="min-h-screen bg-gray-50">{children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
}
