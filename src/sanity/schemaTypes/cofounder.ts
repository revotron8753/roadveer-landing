import { defineType } from "sanity";
import { L, LT, list, locItem, item, object } from "./helpers";

export const cofounder = defineType({
  name: "cofounder",
  title: "Co-Founder",
  type: "document",
  fields: [
    L("photoAlt", "Photo alt text"),
    L("name", "Name"),
    L("role", "Role"),
    L("sub", "Subtitle"),
    list("tags", "Tags", [locItem()]),
    L("idx", "Index label"),
    L("eyebrow", "Eyebrow"),
    object("title", "Title", [
      L("pre", "Before italic"),
      L("em", "Italic word"),
      L("post", "After italic"),
    ]),
    LT("lede", "Lede paragraph"),
    list("rows", "Detail rows", [
      item("cofRow", [L("k", "Label"), LT("v", "Value")], {
        select: { title: "k.en" },
      }),
    ]),
    LT("quote", "Quote"),
  ],
  preview: { prepare: () => ({ title: "Co-Founder" }) },
});
