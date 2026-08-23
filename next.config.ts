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
      { source: "/invoice-format", destination: "/gst-invoice-format", permanent: true },
      { source: "/how-to-make-an-invoice", destination: "/guide", permanent: true },
    ];
  },
};

export default nextConfig;
