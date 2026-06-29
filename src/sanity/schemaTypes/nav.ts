import { defineType } from "sanity";
import { L, S, list, item } from "./helpers";

export const nav = defineType({
  name: "nav",
  title: "Navigation",
  type: "document",
  fields: [
    list("links", "Links", [
      item(
        "navLink",
        [
          S("href", "Anchor (href)"),
          L("label", "Label"),
          L("mobile", "Mobile label"),
        ],
        { select: { title: "label.en", subtitle: "href" } }
      ),
    ]),
    L("register", "Button: Register"),
    L("joinRtr", "Button: Join RTR"),
    L("registerContact", "Mobile: Register / Contact"),
    L("homeAria", "Home aria-label"),
    L("logoAlt", "Logo alt text"),
  ],
  preview: { prepare: () => ({ title: "Navigation" }) },
});
