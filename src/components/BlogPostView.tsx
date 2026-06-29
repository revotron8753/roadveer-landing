"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";
import { useLang } from "@/lib/i18n";
import { pickLocale, formatDate } from "@/lib/blogFormat";
import { urlFor } from "@/sanity/image";
import type { Post } from "@/sanity/blog";

const ptComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const v = value as { asset?: unknown; alt?: string };
      if (!v?.asset) return null;
      return (
        <img
          className="blog-body-img"
          src={urlFor(value as SanityImageSource).width(1200).url()}
          alt={v.alt || ""}
        />
      );
    },
  },
};

export default function BlogPostView({ post }: { post: Post }) {
  const { lang } = useLang();
  const body = post.body?.[lang] || post.body?.en || [];

  return (
    <article className="blog-page blog-single">
      <div className="wrap-narrow">
        <Link href="/blog" className="blog-back">
          &larr; {lang === "mr" ? "सर्व ब्लॉग" : "All posts"}
        </Link>
        <span className="blog-date">{formatDate(post.publishedAt, lang)}</span>
        <h1 className="blog-title">{pickLocale(post.title, lang)}</h1>
        <div className="blog-author">{pickLocale(post.author, lang)}</div>
        {post.cover ? (
          <div className="blog-hero-img">
            <img
              src={urlFor(post.cover).width(1400).url()}
              alt={pickLocale(post.title, lang)}
            />
          </div>
        ) : null}
        <div className="blog-body">
          <PortableText value={body} components={ptComponents} />
        </div>
      </div>
    </article>
  );
}
