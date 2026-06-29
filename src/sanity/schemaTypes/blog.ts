import { defineType, defineField, defineArrayMember } from "sanity";
import { L, LT } from "./helpers";

// Rich-text body: standard blocks + inline images.
export const blockContent = defineType({
  name: "blockContent",
  title: "Body content",
  type: "array",
  of: [
    defineArrayMember({ type: "block" }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string" }),
      ],
    }),
  ],
});

// Bilingual rich text: an English body and a Marathi body.
export const localeBlock = defineType({
  name: "localeBlock",
  title: "Localized body",
  type: "object",
  options: { columns: 1 },
  fields: [
    defineField({ name: "en", title: "English", type: "blockContent" }),
    defineField({ name: "mr", title: "मराठी (Marathi)", type: "blockContent" }),
  ],
});

// Blog post — a collection (full create/read/update/delete in the Studio).
export const post = defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  fields: [
    L("title", "Title"),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title.en", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    L("author", "Author"),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    LT("excerpt", "Excerpt (card summary)"),
    defineField({ name: "body", title: "Body", type: "localeBlock" }),
  ],
  orderings: [
    {
      title: "Published, newest first",
      name: "publishedDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title.en", subtitle: "author.en", media: "coverImage" },
  },
});
