"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "Mission", mobile: "Mission" },
  { href: "#farukh", label: "Founder", mobile: "Founder Story" },
  { href: "#rtr", label: "RTR Network", mobile: "RTR Network" },
  { href: "#economy", label: "Economy", mobile: "Highway Economy" },
  { href: "#emergency", label: "Emergency", mobile: "Emergency Response" },
  { href: "#nhai", label: "Road Safety", mobile: "Road Safety" },
  { href: "#vendor", label: "Vendors", mobile: "Vendor Network" },
];

export default function SiteNav() {
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
          <a href="#hero" className="nv-mark">
            Road<em>veer</em>
          </a>
          <nav className="nv-links">
            {LINKS.map((l) => (
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
            <a href="#contact" className="lnk">
              Register
            </a>
            <a href="#rtr" className="nv-cta">
              Join RTR
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
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.mobile}
          </a>
        ))}
        <a href="#contact" onClick={close}>
          Register / Contact
        </a>
      </div>
    </>
  );
}
