"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "Mission", mobile: "Mission" },
  { href: "#cofounder", label: "Leadership", mobile: "Co-Founder" },
  { href: "#farukh", label: "Founder", mobile: "Founder Story" },
  { href: "#rtr", label: "RTR", mobile: "RTR Network" },
  { href: "#maharashtra", label: "Maharashtra", mobile: "Maharashtra Strategy" },
  { href: "#economy", label: "Economy", mobile: "Highway Economy" },
  { href: "#emergency", label: "Emergency", mobile: "Emergency Response" },
  { href: "#nhai", label: "Safety", mobile: "Road Safety" },
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
          <a href="#hero" className="nv-mark" aria-label="Tiger Roadveer — home">
            <Image
              src="/logo.png"
              alt="Tiger Roadveer"
              width={1891}
              height={832}
              priority
              className="nv-logo"
            />
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
