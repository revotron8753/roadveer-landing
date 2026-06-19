"use client";

import { useContent } from "@/lib/i18n";

export default function Economy() {
  const t = useContent().economy;
  return (
    <section id="economy">
      <div className="wrap">
        <div className="shead">
          <span className="idx">{t.idx}</span>
          <h2 className="stitle">
            {t.title.pre}
            <em>{t.title.em}</em>
            {t.title.post}
          </h2>
          <p className="slede">{t.lede}</p>
        </div>

        <div className="pillars">
          {t.pillars.map((p, i) => (
            <div className="pillar" key={p.name}>
              <span className="pn">{String(i + 1).padStart(2, "0")}</span>
              <div className="pname">{p.name}</div>
              <p className="pdesc">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="econ-subhead">{t.subhead}</div>
        <ul className="econ-list">
          {t.cards.map((c, i) => (
            <li className="econ-row" key={c.name}>
              <span className="econ-n">{String(i + 1).padStart(2, "0")}</span>
              <div className="econ-name">{c.name}</div>
              <div>
                <p className="econ-desc">{c.desc}</p>
                <div className="econ-tags">
                  {c.tags.map((tag) => (
                    <span className="econ-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="vision">
          <div>
            <h3>
              {t.visionTitle.pre}
              <em>{t.visionTitle.em}</em>
              {t.visionTitle.post}
            </h3>
            <p>{t.visionDesc}</p>
          </div>
          <ul className="vision-list">
            {t.vision.map((v) => (
              <li key={v.t}>
                <b>{v.n}</b>
                {v.t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
