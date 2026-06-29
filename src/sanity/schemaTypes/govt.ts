import { defineType } from "sanity";
import { L, LT, S, list, item } from "./helpers";

export const govt = defineType({
  name: "govt",
  title: "Government strip",
  type: "document",
  fields: [
    L("flagAlt", "Flag alt text"),
    L("leadStrong", "Lead heading"),
    LT("leadSpan", "Lead text"),
    L("alignedWith", "'Aligned With' label"),
    list("pills", "Org pills", [
      item("govtPill", [S("href", "URL"), L("label", "Label")], {
        select: { title: "label.en", subtitle: "href" },
      }),
    ]),
  ],
  preview: { prepare: () => ({ title: "Government strip" }) },
});
