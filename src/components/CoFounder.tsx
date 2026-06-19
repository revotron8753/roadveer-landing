"use client";

import Image from "next/image";
import { useContent } from "@/lib/i18n";

export default function CoFounder() {
  const t = useContent().cofounder;
  return (
    <section id="cofounder" className="cof">
      <div className="wrap">
        <div className="cof-in">
          <aside className="cof-aside">
            <div className="cof-photo">
              <div className="frame">
                <Image
                  src="/tanaji-jadhav.jpeg"
                  alt={t.photoAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div className="cof-plate">
                <div className="nm">{t.name}</div>
                <div className="rl">{t.role}</div>
                <div className="sb">{t.sub}</div>
              </div>
            </div>
            <div className="cof-tags">
              {t.tags.map((tag) => (
                <span className="cof-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </aside>

          <div className="cof-body">
            <div className="shead" style={{ marginBottom: 24 }}>
              <span className="idx">{t.idx}</span>
              <span className="eyebrow">{t.eyebrow}</span>
              <h2 className="stitle">
                {t.title.pre}
                <em>{t.title.em}</em>
                {t.title.post}
              </h2>
            </div>
            <p className="cof-lede">{t.lede}</p>
            <dl className="cof-rows">
              {t.rows.map((r) => (
                <div className="cof-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <blockquote className="cof-quote">{t.quote}</blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
