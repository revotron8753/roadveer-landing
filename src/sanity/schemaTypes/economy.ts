import { defineType } from "sanity";
import { L, LT, S, list, locItem, item, object } from "./helpers";

export const economy = defineType({
  name: "economy",
  title: "Highway economy",
  type: "document",
  fields: [
    L("idx", "Index label"),
    object("title", "Title", [
      L("pre", "Before italic"),
      L("em", "Italic word"),
      L("post", "After italic"),
    ]),
    LT("lede", "Lede paragraph"),
    list("pillars", "Pillars", [
      item("ecoPillar", [L("name", "Name"), LT("desc", "Description")], {
        select: { title: "name.en" },
      }),
    ]),
    L("subhead", "Sub-heading"),
    list("cards", "Economy cards", [
      item(
        "ecoCard",
        [
          L("name", "Name"),
          LT("desc", "Description"),
          list("tags", "Tags", [locItem()]),
        ],
        { select: { title: "name.en" } }
      ),
    ]),
    object("visionTitle", "Vision title", [
      L("pre", "Before italic"),
      L("em", "Italic word"),
      L("post", "After italic"),
    ]),
    LT("visionDesc", "Vision description"),
    list("vision", "Vision stats", [
      item("ecoVision", [S("n", "Number"), L("t", "Label")], {
        select: { title: "t.en", subtitle: "n" },
      }),
    ]),
  ],
  preview: { prepare: () => ({ title: "Highway economy" }) },
});
