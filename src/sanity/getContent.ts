import "server-only";
import { client } from "./client";
import { sanityEnabled } from "./env";
import { SECTIONS_QUERY } from "./queries";
import { CONTENT, type Content } from "@/lib/content";

export type ContentBundle = { en: Content; mr: Content };

type Lang = "en" | "mr";
/* eslint-disable @typescript-eslint/no-explicit-any */

function isLocale(n: any): boolean {
  return (
    n &&
    typeof n === "object" &&
    (n._type === "localeString" || n._type === "localeText")
  );
}

// Collapse a raw Sanity tree (localized fields as { en, mr }) into a single
// language, stripping Sanity's internal `_` keys. Empty Marathi falls back to
// English so the page never renders blank on the Marathi toggle.
function pick(node: any, lang: Lang): any {
  if (node === null || node === undefined) return node;
  if (isLocale(node)) return node[lang] || node.en || "";
  if (Array.isArray(node)) return node.map((n) => pick(n, lang));
  if (typeof node === "object") {
    const out: Record<string, any> = {};
    for (const k of Object.keys(node)) {
      if (k.startsWith("_")) continue;
      out[k] = pick(node[k], lang);
    }
    return out;
  }
  return node;
}

function isPlainObject(v: any): boolean {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

// Overlay CMS values on top of the static dictionary. Fields present in Sanity
// win; anything missing keeps the static fallback. Arrays/primitives replace.
function deepMerge(base: any, over: any): any {
  if (over === undefined || over === null) return base;
  if (isPlainObject(base) && isPlainObject(over)) {
    const out: Record<string, any> = { ...base };
    for (const k of Object.keys(over)) out[k] = deepMerge(base[k], over[k]);
    return out;
  }
  return over;
}

export async function getContent(): Promise<ContentBundle> {
  // CMS not configured → serve the local static content, no network call.
  if (!sanityEnabled) {
    return { en: CONTENT.en, mr: CONTENT.mr };
  }

  let raw: Record<string, any> = {};
  try {
    raw =
      (await client.fetch(
        SECTIONS_QUERY,
        {},
        { next: { revalidate: 60, tags: ["content"] } }
      )) || {};
  } catch (err) {
    console.error("[getContent] Sanity fetch failed; using static content", err);
  }

  const enOver: Record<string, any> = {};
  const mrOver: Record<string, any> = {};
  for (const key of Object.keys(raw)) {
    if (!raw[key]) continue; // section not migrated yet → keep static
    enOver[key] = pick(raw[key], "en");
    mrOver[key] = pick(raw[key], "mr");
  }

  return {
    en: deepMerge(CONTENT.en, enOver) as Content,
    mr: deepMerge(CONTENT.mr, mrOver) as Content,
  };
}
