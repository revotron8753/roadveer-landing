/**
 * Embedded Sanity Studio, served at /studio.
 * Authenticates with your Sanity login — no API token needed to edit here.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
