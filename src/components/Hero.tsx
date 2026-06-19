"use client";

import Image from "next/image";
import { useContent } from "@/lib/i18n";

export default function Hero() {
  const t = useContent().hero;
  return (
    <section id="hero">
      <div className="wrap">
        <div className="hero-in">
          <div className="hero-copy">
            <span className="eyebrow">{t.eyebrow}</span>
            <h1 className="hero-h1">
              {t.h1.pre}
              <em>{t.h1.em}</em>
              {t.h1.post}
            </h1>
            <p className="hero-sub">{t.sub}</p>
            <blockquote className="hero-quote">{t.quote}</blockquote>
            <p className="hero-lede">{t.lede}</p>
            <div className="hero-acts">
              <a href="#rtr" className="btn">
                {t.becomeRtr}
              </a>
              <a href="#contact" className="lnk">
                {t.registerVendor} <span className="arw">&rarr;</span>
              </a>
              <a href="#contact" className="lnk">
                {t.downloadApp} <span className="arw">&rarr;</span>
              </a>
            </div>
          </div>

          <figure className="hero-figure">
            <div className="frame">
              <Image
                src="/founder-gadkari.jpg"
                alt={t.figAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>
            <figcaption className="hero-cap">
              <span className="tag">{t.figTag}</span>
              <p>
                <strong>{t.cap.name1}</strong>
                {t.cap.mid}
                <strong>{t.cap.name2}</strong> <span>{t.cap.tail}</span>
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="hero-stats">
          {t.stats.map((s) => (
            <div className="hstat" key={s.label}>
              <div className="hstat-n">
                {s.num}
                <em>{s.acc}</em>
              </div>
              <div className="hstat-l">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
