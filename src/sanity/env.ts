export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

// Safe defaults so importing the Sanity client never throws when the CMS env
// vars are absent (e.g. a static production deploy without Sanity). The
// `placeholder` projectId keeps createClient valid but is never reached because
// `sanityEnabled` gates every fetch.
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";

// Sanity is only "live" when its env vars are configured. When they're absent
// the site uses its local static content and never reaches out to Sanity, so
// the build succeeds with no CMS configured.
export const sanityEnabled = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET
);
