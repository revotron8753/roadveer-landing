import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

// Read-only client for the website. The `production` dataset is public,
// so no token is needed for reads. `useCdn` serves cached, fast responses;
// the webhook-triggered revalidation keeps content fresh.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});
