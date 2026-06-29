"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { pickLocale, formatDate } from "@/lib/blogFormat";
import { urlFor } from "@/sanity/image";
import type { PostCard } from "@/sanity/blog";

export default function BlogList({ posts }: { posts: PostCard[] }) {
  const { lang } = useLang();

  return (
    <section id="blog-listing" className="blog-page">
      <div className="wrap">
        <div className="shead">
          <span className="idx">{lang === "mr" ? "ब्लॉग" : "Blog"}</span>
          <h2 className="stitle">
            {lang === "mr" ? "Tiger Roadveer ब्लॉग" : "Tiger Roadveer Blog"}
          </h2>
        </div>

        {posts.length === 0 ? (
          <p className="blog-empty">
            {lang === "mr" ? "अद्याप कोणतीही नोंद नाही." : "No posts yet."}
          </p>
        ) : (
          <div className="blog-grid">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
                {p.cover ? (
                  <div className="blog-card-img">
                    <img
                      src={urlFor(p.cover).width(640).height(400).fit("crop").url()}
                      alt={pickLocale(p.title, lang)}
                    />
                  </div>
                ) : null}
                <div className="blog-card-body">
                  <span className="blog-date">{formatDate(p.publishedAt, lang)}</span>
                  <h3>{pickLocale(p.title, lang)}</h3>
                  <p>{pickLocale(p.excerpt, lang)}</p>
                  <span className="blog-meta">{pickLocale(p.author, lang)}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
