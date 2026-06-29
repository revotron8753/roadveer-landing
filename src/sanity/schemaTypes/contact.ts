import { defineType } from "sanity";
import { L, LT, list, item } from "./helpers";

export const contact = defineType({
  name: "contact",
  title: "Contact / Get involved",
  type: "document",
  fields: [
    L("idx", "Index label"),
    L("title", "Title"),
    LT("lede", "Lede paragraph"),
    list("types", "Involvement types", [
      item("contactType", [L("title", "Title"), L("sub", "Subtitle")], {
        select: { title: "title.en" },
      }),
    ]),
  ],
  preview: { prepare: () => ({ title: "Contact / Get involved" }) },
});
