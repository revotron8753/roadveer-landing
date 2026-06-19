"use client";

import { useContent } from "@/lib/i18n";

export default function Founder() {
  const t = useContent().founder;
  return (
    <section id="farukh">
      <div className="wrap">
        <div className="founder-in">
          <aside className="founder-aside">
            <div className="founder-id">
              <div
                className="founder-ava"
                role="img"
                aria-label={t.avatarAria}
              />
              <div className="founder-meta">
                <div className="nm">{t.name}</div>
                <div className="rl">{t.role}</div>
                <div className="sb">{t.sub}</div>
              </div>
            </div>
            <div className="ftags">
              {t.tags.map((tag) => (
                <span className="ftag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </aside>

          <div className="founder-body">
            <div className="shead" style={{ marginBottom: 0 }}>
              <span className="idx">{t.idx}</span>
              <h2 className="stitle">{t.title}</h2>
            </div>

            <p className="pullquote">
              {t.pullquote.pre}
              <em>{t.pullquote.em}</em>
            </p>

            <p className="story-p">{t.storyP1}</p>

            <p className="story-p">{t.storyP2}</p>

            <p className="story-p">
              <strong>{t.storyP3.strong}</strong>
              {t.storyP3.post}
            </p>

            <div className="eco-panel">
              <div className="et">{t.ecoTitle}</div>
              <ul className="eco-list">
                {t.eco.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>

            <p className="story-p" style={{ fontStyle: "italic" }}>
              {t.closing.normal}
              <strong style={{ fontStyle: "normal" }}>
                {t.closing.strong}
              </strong>
            </p>

            <div className="story-cta">
              <a href="#contact" className="btn">
                {t.ctaPartner}
              </a>
              <a href="#rtr" className="btn-line">
                {t.ctaRtr} <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
