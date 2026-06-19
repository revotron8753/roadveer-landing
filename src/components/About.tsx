"use client";

import Image from "next/image";
import { useContent } from "@/lib/i18n";

export default function About() {
  const t = useContent().about;
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-in">
          <div className="about-img">
            <div className="frame">
              <Image
                src="/driver-first-ecosystem.png"
                alt={t.imgAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <blockquote className="about-quote">
              <p>{t.quoteP}</p>
              <cite>{t.quoteCite}</cite>
            </blockquote>
          </div>

          <div className="about-right">
            <div className="shead" style={{ marginBottom: 0 }}>
              <span className="idx">{t.idx}</span>
              <span className="eyebrow">{t.eyebrow}</span>
              <h2 className="stitle">{t.title}</h2>
            </div>
            <p className="about-lede">{t.lede}</p>
            <ul className="feature-list">
              {t.mission.map((m, i) => (
                <li key={m}>
                  <span className="fl-n">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="fl-t">{m}</span>
                </li>
              ))}
            </ul>
            <div className="belief">
              <p>
                {t.belief.pre}
                <strong>{t.belief.strong}</strong>
                {t.belief.post}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
