import { defineType } from "sanity";
import { L, LT, S, list, item, object } from "./helpers";

export const maharashtra = defineType({
  name: "maharashtra",
  title: "Maharashtra strategy",
  type: "document",
  fields: [
    L("idx", "Index label"),
    L("eyebrow", "Eyebrow"),
    object("title", "Title", [
      L("pre", "Before italic"),
      L("em", "Italic word"),
      L("post", "After italic"),
    ]),
    LT("lede", "Lede paragraph"),
    list("stages", "Stages", [
      item(
        "mhStage",
        [L("stage", "Stage"), L("title", "Title"), LT("desc", "Description")],
        { select: { title: "title.en", subtitle: "stage.en" } }
      ),
    ]),
    L("cardTag", "Card tag"),
    S("cardTitle", "Card title (code)"),
    S("cardSub", "Card subtitle"),
    LT("cardDesc", "Card description"),
    list("stats", "Stats", [
      item("mhStat", [S("n", "Number"), L("t", "Label")], {
        select: { title: "t.en", subtitle: "n" },
      }),
    ]),
  ],
  preview: { prepare: () => ({ title: "Maharashtra strategy" }) },
});
