"use client";

import { useContent } from "@/lib/i18n";
import RegisterForm from "./RegisterForm";

export default function Contact() {
  const t = useContent().contact;
  return (
    <section id="contact" className="on-ink">
      <div className="wrap">
        <div className="contact-in">
          <div className="contact-left">
            <span className="idx" style={{ color: "var(--muted-d)" }}>
              {t.idx}
            </span>
            <h2 className="stitle">{t.title}</h2>
            <p className="slede">{t.lede}</p>
            <ul className="ctypes">
              {t.types.map((ty, i) => (
                <li key={ty.title}>
                  <a href="#contact">
                    <span className="ct-n">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="ct-title">{ty.title}</span>
                      <br />
                      <span className="ct-sub">{ty.sub}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
