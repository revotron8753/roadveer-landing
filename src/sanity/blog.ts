import "server-only";
import type { PortableTextBlock } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "./client";
import { sanityEnabled } from "./env";

export type LocaleText = { en?: string; mr?: string };

export type PostCard = {
  slug: string;
  title: LocaleText;
  excerpt: LocaleText;
  author: LocaleText;
  publishedAt: string;
  cover: SanityImageSource | null;
};

export type Post = PostCard & {
  body: { en?: PortableTextBlock[]; mr?: PortableTextBlock[] };
};

const CARD_PROJECTION = `{
  "slug": slug.current,
  title,
  excerpt,
  author,
  publishedAt,
  "cover": coverImage
}`;

const fetchOpts = { next: { revalidate: 60, tags: ["content"] } };

export async function getPosts(limit?: number): Promise<PostCard[]> {
  if (!sanityEnabled) return [];
  const slice = limit ? `[0...${limit}]` : "";
  const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)${slice}${CARD_PROJECTION}`;
  try {
    return (await client.fetch(query, {}, fetchOpts)) || [];
  } catch (err) {
    console.error("[getPosts] Sanity fetch failed", err);
    return [];
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!sanityEnabled) return null;
  const query = `*[_type == "post" && slug.current == $slug][0]{
    "slug": slug.current,
    title,
    excerpt,
    author,
    publishedAt,
    "cover": coverImage,
    body
  }`;
  try {
    return (await client.fetch(query, { slug }, fetchOpts)) || null;
  } catch (err) {
    console.error("[getPost] Sanity fetch failed", err);
    return null;
  }
}

export async function getPostSlugs(): Promise<string[]> {
  if (!sanityEnabled) return [];
  const query = `*[_type == "post" && defined(slug.current)].slug.current`;
  try {
    return (await client.fetch(query)) || [];
  } catch (err) {
    console.error("[getPostSlugs] Sanity fetch failed", err);
    return [];
  }
}
