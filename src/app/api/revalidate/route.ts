/**
 * Sanity webhook → on-demand revalidation.
 * Configure a webhook in Sanity (Manage → API → Webhooks) pointing to
 * https://<your-domain>/api/revalidate with the secret SANITY_REVALIDATE_SECRET.
 * On any publish it purges the cached content so the live site updates in seconds.
 */
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature } = await parseBody<{ _type: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 });
    }

    // All section content is fetched under the "content" cache tag.
    // Next 16: second arg is the stale-while-revalidate window ("max" = longest).
    revalidateTag("content", "max");
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[revalidate]", message);
    return new Response(message, { status: 500 });
  }
}
