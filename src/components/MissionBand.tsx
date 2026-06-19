"use client";

import { useContent } from "@/lib/i18n";

export default function MissionBand() {
  const t = useContent().missionBand;
  return (
    <div className="band">
      <div className="band-in">
        <p>
          {t.pre}
          <em>{t.em}</em>
        </p>
        <a href="#contact" className="blink">
          {t.join} <span>&rarr;</span>
        </a>
      </div>
    </div>
  );
}
