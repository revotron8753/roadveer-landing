import type { Lang } from "./i18n";
import type { LocaleText } from "@/sanity/blog";

// Pick the active language, falling back to English so cards never go blank.
export const pickLocale = (o: LocaleText | undefined, lang: Lang): string =>
  o?.[lang] || o?.en || "";

export const formatDate = (iso: string, lang: Lang): string =>
  new Date(iso).toLocaleDateString(lang === "mr" ? "mr-IN" : "en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
