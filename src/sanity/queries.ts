import { groq } from "next-sanity";

// Pulls every section singleton as a raw document (localized fields stay as
// { _type, en, mr } objects). Sections not yet created return null and fall
// back to the static dictionary in src/lib/content.ts.
export const SECTIONS_QUERY = groq`{
  "nav": *[_type=="nav"][0],
  "hero": *[_type=="hero"][0],
  "govt": *[_type=="govt"][0],
  "about": *[_type=="about"][0],
  "cofounder": *[_type=="cofounder"][0],
  "founder": *[_type=="founder"][0],
  "rtr": *[_type=="rtr"][0],
  "maharashtra": *[_type=="maharashtra"][0],
  "economy": *[_type=="economy"][0],
  "emergency": *[_type=="emergency"][0],
  "roadsafety": *[_type=="roadsafety"][0],
  "vendor": *[_type=="vendor"][0],
  "missionBand": *[_type=="missionBand"][0],
  "contact": *[_type=="contact"][0],
  "form": *[_type=="form"][0],
  "footer": *[_type=="footer"][0]
}`;
