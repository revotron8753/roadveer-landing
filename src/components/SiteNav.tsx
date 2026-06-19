"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useContent, useLang } from "@/lib/i18n";

export default function SiteNav() {
  const t = useContent();
  const { lang, toggle } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );
    const onScroll = () => {
      let current = "";
      for (const s of sections) {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="nv">
        <div className="nv-in">
          <a href="#hero" className="nv-mark" aria-label={t.nav.homeAria}>
            <Image
              src="/logo.png"
              alt={t.nav.logoAlt}
              width={1891}
              height={832}
              priority
              className="nv-logo"
            />
          </a>
          <nav className="nv-links">
            {t.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`#${active}` === l.href ? "active" : ""}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nv-actions">
            <button
              type="button"
              className="lang-btn"
              onClick={toggle}
              aria-label={
                lang === "en" ? "मराठीत बदला" : "Switch to English"
              }
            >
              {lang === "en" ? "मराठी" : "EN"}
            </button>
            <a href="#contact" className="lnk">
              {t.nav.register}
            </a>
            <a href="#rtr" className="nv-cta">
              {t.nav.joinRtr}
            </a>
          </div>
          <button
            type="button"
            className="nv-burger"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`nv-mobile${menuOpen ? " open" : ""}`}>
        {t.nav.links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.mobile}
          </a>
        ))}
        <a href="#contact" onClick={close}>
          {t.nav.registerContact}
        </a>
        <button
          type="button"
          className="lang-btn lang-btn-mobile"
          onClick={() => {
            toggle();
            close();
          }}
        >
          {lang === "en" ? "मराठीत वाचा" : "Read in English"}
        </button>
      </div>
    </>
  );
}
