import { defineType } from "sanity";
import { L, LT, S, list, locItem, item } from "./helpers";

export const roadsafety = defineType({
  name: "roadsafety",
  title: "Road safety / MoRTH",
  type: "document",
  fields: [
    L("idx", "Index label"),
    L("eyebrow", "Eyebrow"),
    L("title", "Title"),
    LT("lede", "Lede paragraph"),
    L("apexTag", "Apex tag"),
    S("apexTitle", "Apex title (code)"),
    L("apexSub", "Apex subtitle"),
    LT("apexDesc", "Apex description"),
    S("apexLink", "Apex link text"),
    list("morthFacts", "MoRTH facts", [locItem()]),
    L("hierLabel", "Hierarchy label"),
    list("underMorth", "Bodies under MoRTH", [
      item(
        "morthBody",
        [
          S("href", "URL"),
          S("name", "Name (code)"),
          S("org", "Organisation"),
          LT("desc", "Description"),
          S("link", "Link text"),
        ],
        { select: { title: "name", subtitle: "org" } }
      ),
    ]),
    L("assocHead", "Associates heading"),
    list("assoc", "Associate orgs", [
      item(
        "assocOrg",
        [S("href", "URL"), S("name", "Name"), S("url", "URL text")],
        { select: { title: "name", subtitle: "url" } }
      ),
    ]),
  ],
  preview: { prepare: () => ({ title: "Road safety / MoRTH" }) },
});
