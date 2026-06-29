import { defineType } from "sanity";
import { L, LT, list, locItem, item } from "./helpers";

export const vendor = defineType({
  name: "vendor",
  title: "Vendor network",
  type: "document",
  fields: [
    L("idx", "Index label"),
    L("title", "Title"),
    LT("lede", "Lede paragraph"),
    list("cats", "Categories", [locItem()]),
    L("journeyTitle", "Journey title"),
    list("journey", "Journey steps", [
      item("vendorStep", [L("label", "Label"), L("sub", "Subtitle")], {
        select: { title: "label.en" },
      }),
    ]),
    L("registerVendor", "Button: Register as Vendor"),
  ],
  preview: { prepare: () => ({ title: "Vendor network" }) },
});
