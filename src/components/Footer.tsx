"use client";

import Image from "next/image";
import { useContent } from "@/lib/i18n";

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  const isExternal = (h: string) => h.startsWith("http");
  return (
    <div className="foot-col">
      <h4>{title}</h4>
      {links.map((l) => (
        <a
          key={l.href + l.label}
          href={l.href}
          {...(isExternal(l.href)
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  const t = useContent().footer;
  return (
    <footer className="foot">
      <div className="foot-in">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="foot-logo">
              <Image
                src="/logo.png"
                alt={t.logoAlt}
                width={1891}
                height={832}
                className="foot-logo-img"
              />
            </div>
            <p>{t.tagline}</p>
            <div className="foot-social">
              <a
                href="https://www.linkedin.com/in/farukh-yelapure-6540b18a"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                In
              </a>
              <a href="#" title="WhatsApp">
                Wa
              </a>
              <a href="#" title="YouTube">
                Yt
              </a>
              <a href="#" title="Facebook">
                Fb
              </a>
            </div>
          </div>
          <FooterCol title={t.colPlatform} links={t.platform} />
          <FooterCol title={t.colSafety} links={t.safety} />
          <FooterCol title={t.colOrg} links={t.org} />
        </div>
        <div className="foot-bottom">
          <p>{t.copyright}</p>
          <div className="foot-natl">
            <Image
              src="/indian-flag.png"
              alt={t.flagAlt}
              width={1536}
              height={1024}
              className="foot-flag"
            />
            <p>{t.natl}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
