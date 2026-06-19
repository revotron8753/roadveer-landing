"use client";

import { useContent } from "@/lib/i18n";

export default function MaharashtraStrategy() {
  const t = useContent().maharashtra;
  return (
    <section id="maharashtra" className="mh">
      <div className="wrap">
        <div className="shead">
          <span className="idx">{t.idx}</span>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="stitle">
            {t.title.pre}
            <em>{t.title.em}</em>
            {t.title.post}
          </h2>
          <p className="slede">{t.lede}</p>
        </div>

        <div className="mh-in">
          <ol className="ladder">
            {t.stages.map((s) => (
              <li key={s.stage}>
                <div className="ld-stage">{s.stage}</div>
                <div className="ld-body">
                  <strong>{s.title}</strong>
                  <span>{s.desc}</span>
                </div>
              </li>
            ))}
          </ol>

          <div className="mh-side">
            <div className="mhrcdc-card">
              <span className="tag">{t.cardTag}</span>
              <h3>{t.cardTitle}</h3>
              <div className="sub">{t.cardSub}</div>
              <p>{t.cardDesc}</p>
            </div>
            <div className="mh-stats">
              {t.stats.map((s) => (
                <div className="mh-stat" key={s.t}>
                  <b>{s.n}</b>
                  <span>{s.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
