"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  name: "tiger-roadveer",
  title: "Tiger Roadveer",
  // Local dev: "/studio". Production (admin subdomain): set to "/" via env so
  // the Studio lives at admin.tiger.roadveer.com root with clean URLs.
  basePath: process.env.NEXT_PUBLIC_STUDIO_BASE_PATH || "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  // Sections are singletons (no "create"); only blog posts can be created.
  document: {
    newDocumentOptions: (prev) =>
      prev.filter((tpl) => tpl.templateId === "post"),
  },
});
