import { defineType } from "sanity";
import { L, LT, list, item, object } from "./helpers";

export const emergency = defineType({
  name: "emergency",
  title: "Emergency response",
  type: "document",
  fields: [
    L("idx", "Index label"),
    L("eyebrow", "Eyebrow"),
    object("title", "Title", [
      L("pre", "Before italic"),
      L("em", "Italic word"),
      L("post", "After italic"),
    ]),
    L("helplineLbl", "Helpline label"),
    list("cards", "Cards", [
      item("emgCard", [L("title", "Title"), LT("desc", "Description")], {
        select: { title: "title.en" },
      }),
    ]),
    L("flowEyebrow", "Flow eyebrow"),
    list("steps", "Flow steps", [
      item("emgStep", [L("title", "Title"), LT("desc", "Description")], {
        select: { title: "title.en" },
      }),
    ]),
  ],
  preview: { prepare: () => ({ title: "Emergency response" }) },
});
