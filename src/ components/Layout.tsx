import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>MyGarden</title>
        <meta name="description" content="Garden café website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header with logo */}
      <header className="flex items-center p-4 bg-green-900 text-white">
        <img src="/logo.png" alt="MyGarden logo" className="h-10 w-auto mr-3" />
        <h1 className="text-xl font-bold">MyGarden</h1>
      </header>

      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}
