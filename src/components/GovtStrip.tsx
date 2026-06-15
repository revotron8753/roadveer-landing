import Image from "next/image";

const PILLS = [
  { href: "https://morth.gov.in", label: "MoRTH" },
  { href: "https://nhai.gov.in", label: "NHAI" },
  { href: "https://roadsafety.morth.nic.in", label: "Road Safety Portal" },
  { href: "https://irad.morth.nic.in", label: "iRAD" },
  {
    href: "https://play.google.com/store/apps/details?id=com.nhai.rajmargyatra",
    label: "Rajmargyatra",
  },
  { href: "https://mybharat.gov.in", label: "MYBharat" },
];

export default function GovtStrip() {
  return (
    <div className="natl">
      <div className="natl-in">
        <div className="natl-lead">
          <Image
            src="/indian-flag.png"
            alt="Flag of India"
            width={1536}
            height={1024}
            className="natl-flag"
          />
          <div>
            <strong>A National Mission</strong>
            <span>
              In alignment with the Government of India&rsquo;s National Road
              Safety Mission &middot; Towards Viksit Bharat 2047
            </span>
          </div>
        </div>
        <div className="natl-orgs">
          <span className="natl-l">Aligned With</span>
          {PILLS.map((p) => (
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
