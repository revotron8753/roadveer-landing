"use client";

import { useContent } from "@/lib/i18n";

export default function RoadSafety() {
  const t = useContent().roadsafety;
  return (
    <section id="nhai">
      <div className="wrap">
        <div className="shead">
          <span className="idx">{t.idx}</span>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="stitle">{t.title}</h2>
          <p className="slede">{t.lede}</p>
        </div>

        <a
          href="https://morth.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="morth-apex"
        >
          <div className="ma-left">
            <span className="ma-tag">{t.apexTag}</span>
            <h3>{t.apexTitle}</h3>
            <div className="ma-sub">{t.apexSub}</div>
            <p className="ma-desc">{t.apexDesc}</p>
            <span className="ma-link">{t.apexLink}</span>
          </div>
          <ul className="ma-facts">
            {t.morthFacts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </a>

        <div className="hier-label">
          <span>{t.hierLabel}</span>
        </div>
        <div className="gov-grid">
          {t.underMorth.map((c, i) => (
            <a
              key={`${c.name}-${i}`}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="gov-card"
            >
              <div className="nm">{c.name}</div>
              <div className="og">{c.org}</div>
              <p className="ds">{c.desc}</p>
              <span className="lk">{c.link} &rarr;</span>
            </a>
          ))}
        </div>

        <div className="assoc-h">{t.assocHead}</div>
        <div className="assoc-grid">
          {t.assoc.map((a) => (
            <a
              key={a.href + a.name}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="assoc-card"
            >
              <div className="assoc-name">{a.name}</div>
              <div className="assoc-url">{a.url}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
