import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. A stray package-lock.json in the
  // home directory was making Next.js infer C:\Users\anshu as the root, so
  // Turbopack tried to watch the entire home folder and ran out of memory.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
