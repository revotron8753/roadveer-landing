"use client";

import { useContent } from "@/lib/i18n";

export default function Vendor() {
  const t = useContent().vendor;
  return (
    <section id="vendor">
      <div className="wrap">
        <div className="shead">
          <span className="idx">{t.idx}</span>
          <h2 className="stitle">{t.title}</h2>
          <p className="slede">{t.lede}</p>
        </div>

        <div className="vend-cats">
          {t.cats.map((c, i) => (
            <div className="vc" key={c}>
              <span className="vn">{String(i + 1).padStart(2, "0")}</span>
              <span className="vt">{c}</span>
            </div>
          ))}
        </div>

        <div className="vend-journey">
          <div className="vj-title">{t.journeyTitle}</div>
          <div className="vj-steps">
            {t.journey.map((j, i) => (
              <div className="vj-step" key={j.label}>
                <div className="vj-n">{String(i + 1).padStart(2, "0")}</div>
                <div className="vj-label">{j.label}</div>
                <div className="vj-sub">{j.sub}</div>
              </div>
            ))}
          </div>
          <div className="vend-cta">
            <a href="#contact" className="btn">
              {t.registerVendor} <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
