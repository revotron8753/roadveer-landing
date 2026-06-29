import { defineType } from "sanity";
import { L, LT, list, locItem, object } from "./helpers";

export const about = defineType({
  name: "about",
  title: "About / Mission",
  type: "document",
  fields: [
    L("imgAlt", "Image alt text"),
    LT("quoteP", "Quote"),
    L("quoteCite", "Quote citation"),
    L("idx", "Index label"),
    L("eyebrow", "Eyebrow"),
    L("title", "Title"),
    LT("lede", "Lede paragraph"),
    list("mission", "Mission list", [locItem()]),
    object("belief", "Belief", [
      L("pre", "Before bold"),
      L("strong", "Bold text"),
      LT("post", "After bold"),
    ]),
  ],
  preview: { prepare: () => ({ title: "About / Mission" }) },
});
