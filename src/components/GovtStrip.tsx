"use client";

import Image from "next/image";
import { useContent } from "@/lib/i18n";

export default function GovtStrip() {
  const t = useContent().govt;
  return (
    <div className="natl">
      <div className="natl-in">
        <div className="natl-lead">
          <Image
            src="/indian-flag.png"
            alt={t.flagAlt}
            width={1536}
            height={1024}
            className="natl-flag"
          />
          <div>
            <strong>{t.leadStrong}</strong>
            <span>{t.leadSpan}</span>
          </div>
        </div>
        <div className="natl-orgs">
          <span className="natl-l">{t.alignedWith}</span>
          {t.pills.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
