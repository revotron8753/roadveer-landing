import { defineType, defineField, defineArrayMember } from "sanity";
import { L, LT, S } from "./helpers";

export const hero = defineType({
  name: "hero",
  title: "Hero (top section)",
  type: "document",
  fields: [
    L("eyebrow", "Eyebrow"),
    defineField({
      name: "h1",
      title: "Headline",
      type: "object",
      options: { collapsible: true, collapsed: false },
      fields: [
        L("pre", "Before italic word"),
        L("em", "Italic word"),
        L("post", "After italic word"),
      ],
    }),
    L("sub", "Sub tagline"),
    L("quote", "Quote"),
    LT("lede", "Lede paragraph"),
    L("becomeRtr", "Button: Become an RTR"),
    L("registerVendor", "Link: Register as Vendor"),
    L("downloadApp", "Link: Download App"),
    L("figAlt", "Image alt text"),
    L("figTag", "Image tag (ministry)"),
    defineField({
      name: "cap",
      title: "Image caption",
      type: "object",
      options: { collapsible: true, collapsed: false },
      fields: [
        L("name1", "Name 1 (founder)"),
        L("mid", "Connecting text"),
        L("name2", "Name 2 (minister)"),
        L("tail", "Trailing text"),
      ],
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "stat",
          fields: [S("num", "Number"), S("acc", "Suffix"), L("label", "Label")],
          preview: { select: { title: "label.en", subtitle: "num" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Hero (top section)" }) },
});
