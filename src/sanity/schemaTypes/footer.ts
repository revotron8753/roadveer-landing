import { defineType } from "sanity";
import { L, LT, S, list, item } from "./helpers";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    L("logoAlt", "Logo alt text"),
    LT("tagline", "Tagline"),
    L("colPlatform", "Column title: Platform"),
    L("colSafety", "Column title: Road Safety"),
    L("colOrg", "Column title: Organisation"),
    list("platform", "Platform links", [
      item("platformLink", [S("href", "URL"), L("label", "Label")], {
        select: { title: "label.en", subtitle: "href" },
      }),
    ]),
    list("safety", "Road safety links", [
      item("safetyLink", [S("href", "URL"), L("label", "Label")], {
        select: { title: "label.en", subtitle: "href" },
      }),
    ]),
    list("org", "Organisation links", [
      item("orgLink", [S("href", "URL"), L("label", "Label")], {
        select: { title: "label.en", subtitle: "href" },
      }),
    ]),
    LT("copyright", "Copyright line"),
    L("flagAlt", "Flag alt text"),
    LT("natl", "National operations line"),
  ],
  preview: { prepare: () => ({ title: "Footer" }) },
});
