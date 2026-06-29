import { defineType } from "sanity";
import { L, LT, S, list, locItem, item } from "./helpers";

export const rtr = defineType({
  name: "rtr",
  title: "RTR Network",
  type: "document",
  fields: [
    L("idx", "Index label"),
    L("eyebrow", "Eyebrow"),
    L("title", "Title"),
    LT("lede", "Lede paragraph"),
    list("benefits", "Benefits", [
      item("rtrBenefit", [L("title", "Title"), L("sub", "Subtitle")], {
        select: { title: "title.en" },
      }),
    ]),
    L("registerRtr", "Button: Register as RTR"),
    S("panelNum", "Panel number"),
    L("panelNumL", "Panel number label"),
    LT("panelDesc", "Panel description"),
    list("steps", "Steps", [locItem()]),
    L("certLabel", "Certification label"),
    list("certs", "Certification levels", [locItem()]),
    L("becomeToday", "Button: Become RTR Today"),
  ],
  preview: { prepare: () => ({ title: "RTR Network" }) },
});
