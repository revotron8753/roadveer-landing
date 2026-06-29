import { defineType } from "sanity";
import { L, LT } from "./helpers";

export const missionBand = defineType({
  name: "missionBand",
  title: "Mission band",
  type: "document",
  fields: [
    LT("pre", "Before italic"),
    L("em", "Italic text"),
    L("join", "Button: Join the Mission"),
  ],
  preview: { prepare: () => ({ title: "Mission band" }) },
});
