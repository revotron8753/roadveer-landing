import { localeString, localeText } from "./localeTypes";
import { blockContent, localeBlock, post } from "./blog";
import { nav } from "./nav";
import { hero } from "./hero";
import { govt } from "./govt";
import { about } from "./about";
import { cofounder } from "./cofounder";
import { founder } from "./founder";
import { rtr } from "./rtr";
import { maharashtra } from "./maharashtra";
import { economy } from "./economy";
import { emergency } from "./emergency";
import { roadsafety } from "./roadsafety";
import { vendor } from "./vendor";
import { missionBand } from "./missionBand";
import { contact } from "./contact";
import { form } from "./form";
import { footer } from "./footer";

// Order here drives the document list order shown in the Studio.
export const sectionTypes = [
  nav,
  hero,
  govt,
  about,
  cofounder,
  founder,
  rtr,
  maharashtra,
  economy,
  emergency,
  roadsafety,
  vendor,
  missionBand,
  contact,
  form,
  footer,
];

export const schemaTypes = [
  // localized field building blocks
  localeString,
  localeText,
  blockContent,
  localeBlock,
  // section singletons
  ...sectionTypes,
  // blog collection
  post,
];
