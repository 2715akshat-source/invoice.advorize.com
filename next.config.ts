import type { NextConfig } from "next";

/*
 * Deployments normalise file timestamps for reproducible builds — on Vercel
 * every file comes back as 2018-10-20 — so an mtime cannot date a page in
 * production. This is baked in at build time and used by the sitemap.
 */
const BUILD_TIME = new Date().toISOString();

const nextConfig: NextConfig = {
  env: { BUILD_TIME },

  /* The generator runs entirely in the browser, so every page is static. */
  reactStrictMode: true,

  /*
   * This project sits inside the main site's folder, which has its own
   * lockfile — without this, the bundler infers the parent as the workspace
   * root and traces the wrong tree.
   */
  turbopack: { root: __dirname },

  /*
   * Slugs people and other sites guess at. A permanent redirect keeps the
   * link working without publishing a second URL for the same page.
   */
  async redirects() {
    return [
      { source: "/invoice-generator", destination: "/", permanent: true },
      { source: "/free-invoice-generator", destination: "/", permanent: true },
      { source: "/gst-invoice", destination: "/gst-invoice-format", permanent: true },
      { source: "/gst-bill-format", destination: "/gst-invoice-format", permanent: true },
      { source: "/invoice-format", destination: "/invoice-format-india", permanent: true },
      { source: "/bill-format", destination: "/invoice-format-india", permanent: true },
      { source: "/guide", destination: "/how-to-make-an-invoice", permanent: true },
      { source: "/proforma-invoice", destination: "/proforma-invoice-format", permanent: true },
      { source: "/quotation", destination: "/quotation-format", permanent: true },
      { source: "/receipt-format", destination: "/payment-receipt-format", permanent: true },
      { source: "/credit-note", destination: "/credit-note-and-debit-note-format", permanent: true },
      { source: "/e-invoice", destination: "/e-invoice-india", permanent: true },
      { source: "/bill-of-supply", destination: "/tax-invoice-vs-bill-of-supply", permanent: true },
    ];
  },
};

export default nextConfig;
