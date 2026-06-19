"use client";

import { useContent } from "@/lib/i18n";

export default function RTR() {
  const t = useContent().rtr;
  return (
    <section id="rtr" className="on-ink">
      <div className="wrap">
        <div className="rtr-in">
          <div>
            <div className="shead" style={{ marginBottom: 0 }}>
              <span className="idx">{t.idx}</span>
              <span className="eyebrow on-ink">{t.eyebrow}</span>
              <h2 className="stitle">{t.title}</h2>
            </div>
            <p className="slede">{t.lede}</p>
            <ul className="rtr-benefits">
              {t.benefits.map((b, i) => (
                <li key={b.title}>
                  <span className="rb-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="rb-t">
                    <strong>{b.title}</strong>
                    <span>{b.sub}</span>
                  </span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn">
              {t.registerRtr} <span>&rarr;</span>
            </a>
          </div>

          <div className="rtr-panel">
            <div className="rtr-num">{t.panelNum}</div>
            <div className="rtr-num-l">{t.panelNumL}</div>
            <p className="rtr-desc">{t.panelDesc}</p>
            <ol className="rtr-steps">
              {t.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <div className="cert-l">{t.certLabel}</div>
            <div className="certs">
              {t.certs.map((c) => (
                <div className="cert" key={c}>
                  {c}
                </div>
              ))}
            </div>
            <a href="#contact" className="btn" style={{ width: "100%", justifyContent: "center" }}>
              {t.becomeToday}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
