"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { pickLocale } from "@/lib/blogFormat";
import { urlFor } from "@/sanity/image";
import type { PostCard } from "@/sanity/blog";

export default function BlogStrip({ posts }: { posts: PostCard[] }) {
  const { lang } = useLang();
  if (!posts.length) return null;

  return (
    <section id="blog">
      <div className="wrap">
        <div className="shead">
          <span className="idx">{lang === "mr" ? "ब्लॉग" : "Blog"}</span>
          <h2 className="stitle">
            {lang === "mr" ? "ब्लॉगवरील ताज्या नोंदी" : "Latest from the blog"}
          </h2>
        </div>

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
                <h3>{pickLocale(p.title, lang)}</h3>
                <p>{pickLocale(p.excerpt, lang)}</p>
                <span className="blog-meta">{pickLocale(p.author, lang)}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="blog-all">
          <Link href="/blog" className="btn">
            {lang === "mr" ? "सर्व ब्लॉग पाहा" : "View all posts"}{" "}
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
