import "server-only";
import type { PortableTextBlock } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

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
  const slice = limit ? `[0...${limit}]` : "";
  const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)${slice}${CARD_PROJECTION}`;
  return (await client.fetch(query, {}, fetchOpts)) || [];
}

export async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    "slug": slug.current,
    title,
    excerpt,
    author,
    publishedAt,
    "cover": coverImage,
    body
  }`;
  return (await client.fetch(query, { slug }, fetchOpts)) || null;
}

export async function getPostSlugs(): Promise<string[]> {
  const query = `*[_type == "post" && defined(slug.current)].slug.current`;
  return (await client.fetch(query)) || [];
}
