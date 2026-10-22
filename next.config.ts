import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. A stray package-lock.json in the
  // home directory was making Next.js infer C:\Users\anshu as the root, so
  // Turbopack tried to watch the entire home folder and ran out of memory.
  turbopack: {
    root: path.join(__dirname),
  },
  // Serve the policy PDFs at clean URLs. Rewrites mask the destination, so the
  // address bar keeps /privacy-policy and /terms while the PDF is served.
  async rewrites() {
    return [
      { source: "/privacy-policy", destination: "/privacy-policy.pdf" },
      { source: "/terms", destination: "/terms.pdf" },
      // QR landing page (static HTML in /public) served at a clean URL.
      { source: "/qr-app", destination: "/qr-app.html" },
    ];
  },
};

export default nextConfig;
