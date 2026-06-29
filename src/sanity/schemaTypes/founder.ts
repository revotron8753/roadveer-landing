import { defineType } from "sanity";
import { L, LT, list, locItem, object } from "./helpers";

export const founder = defineType({
  name: "founder",
  title: "Founder story",
  type: "document",
  fields: [
    L("name", "Name"),
    L("avatarAria", "Avatar aria-label"),
    L("role", "Role"),
    L("sub", "Subtitle"),
    list("tags", "Tags", [locItem()]),
    L("idx", "Index label"),
    L("title", "Title"),
    object("pullquote", "Pull quote", [
      LT("pre", "Lead-in text"),
      L("em", "Italic quote"),
    ]),
    LT("storyP1", "Story paragraph 1"),
    LT("storyP2", "Story paragraph 2"),
    object("storyP3", "Story paragraph 3", [
      L("strong", "Bold text"),
      LT("post", "After bold"),
    ]),
    L("ecoTitle", "Ecosystem panel title"),
    list("eco", "Ecosystem list", [locItem()]),
    object("closing", "Closing", [
      LT("normal", "Normal text"),
      L("strong", "Bold text"),
    ]),
    L("ctaPartner", "Button: Partner"),
    L("ctaRtr", "Button: Become RTR"),
  ],
  preview: { prepare: () => ({ title: "Founder story" }) },
});
