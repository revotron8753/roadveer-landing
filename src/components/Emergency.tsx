"use client";

import { useContent } from "@/lib/i18n";

export default function Emergency() {
  const t = useContent().emergency;
  return (
    <section id="emergency">
      <div className="wrap">
        <div className="shead">
          <span className="idx">{t.idx}</span>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="stitle">
            {t.title.pre}
            <em>{t.title.em}</em>
            {t.title.post}
          </h2>
        </div>

        <div className="emg-in">
          <div className="emg-left">
            <div className="helpline">
              <div className="num">1033</div>
              <div className="lbl">{t.helplineLbl}</div>
            </div>
            <div className="emg-cards">
              {t.cards.map((c, i) => (
                <div className="ec" key={c.title}>
                  <div className="ec-n">{String(i + 1).padStart(2, "0")}</div>
                  <div className="ec-title">{c.title}</div>
                  <div className="ec-desc">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="emg-right">
            <span className="eyebrow">{t.flowEyebrow}</span>
            <ol className="emg-flow" style={{ marginTop: 24 }}>
              {t.steps.map((s) => (
                <li key={s.title}>
                  <div>
                    <span className="ef-t">{s.title}</span>
                    <span className="ef-d">{s.desc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
