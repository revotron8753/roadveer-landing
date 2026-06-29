import { defineType, defineField } from "sanity";

// The two supported languages. `en` is the source; `mr` is the translation.
export const LANGUAGES = [
  { id: "en", title: "English" },
  { id: "mr", title: "मराठी (Marathi)" },
] as const;

// A short, single-line localized field: { en, mr }.
export const localeString = defineType({
  name: "localeString",
  title: "Localized string",
  type: "object",
  options: { columns: 2 },
  fields: LANGUAGES.map((lang) =>
    defineField({ name: lang.id, title: lang.title, type: "string" })
  ),
});

// A multi-line localized field for longer copy: { en, mr }.
export const localeText = defineType({
  name: "localeText",
  title: "Localized text",
  type: "object",
  options: { columns: 1 },
  fields: LANGUAGES.map((lang) =>
    defineField({ name: lang.id, title: lang.title, type: "text", rows: 3 })
  ),
});
