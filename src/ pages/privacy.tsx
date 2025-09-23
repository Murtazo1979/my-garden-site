// src/pages/privacy.tsx
import Head from "next/head";

export default function Privacy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 leading-relaxed">
      <Head>
        <title>Privacy Policy | MyGarden</title>
        <meta
          name="description"
          content="Read the Privacy Policy of MyGarden. Learn how we collect, use, and protect your personal information when you use our website."
        />
      </Head>

      <h1 className="text-4xl font-bold text-emerald-700 mb-6">
        Privacy Policy
      </h1>
      <p className="text-gray-600 mb-4">
        Effective date: <strong>September 2025</strong>
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
        <p>
          Welcome to <strong>MyGarden</strong>. We value your privacy and are
          committed to protecting your personal data. This Privacy Policy
          explains how we collect, use, and safeguard your information when you
          use our website and services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
        <ul className="list-disc ml-6">
          <li>Personal information (name, email, phone number)</li>
          <li>Log data (IP address, browser type, pages visited)</li>
          <li>Cookies and usage data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. How We Use Information</h2>
        <p>
          The collected information may be used to:
        </p>
        <ul className="list-disc ml-6">
          <li>Provide and improve our services</li>
          <li>Respond to your inquiries</li>
          <li>Send updates, newsletters, and promotional materials</li>
          <li>Ensure website security and prevent fraud</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Sharing of Information</h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share information with trusted service
          providers who assist us in operating the website or conducting
          business, as long as they agree to keep the information confidential.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal
          information. To exercise these rights, please contact us at:
        </p>
        <p className="mt-2">
          📧 Email: <a href="mailto:murtazo1979@gmail.com" className="text-emerald-600 underline">murtazo1979@gmail.com</a><br />
          📞 Phone: +998 97 300 0116<br />
          📍 Location: Bukhara City, Uzbekistan
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated effective date.
        </p>
      </section>

      <p className="text-gray-600 mt-6">
        By using our website, you consent to the terms of this Privacy Policy.
      </p>
    </main>
  );
}
