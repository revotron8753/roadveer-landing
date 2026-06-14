const PILLS = [
  { href: "https://morth.gov.in", label: "MoRTH" },
  { href: "https://nhai.gov.in", label: "NHAI" },
  { href: "https://roadsafety.morth.nic.in", label: "Road Safety Portal" },
  { href: "https://irad.morth.nic.in", label: "iRAD" },
  {
    href: "https://play.google.com/store/apps/details?id=com.nhai.rajmargyatra",
    label: "Rajmargyatra",
  },
  { href: "https://mybharat.gov.in", label: "MYBharat / SSM" },
  { href: "https://savelifefoundation.org", label: "Save Life Foundation" },
  { href: "https://ncsc.nic.in", label: "NCSC" },
];

export default function GovtStrip() {
  return (
    <div className="aligned">
      <div className="aligned-in">
        <span className="aligned-l">Aligned With</span>
        <div className="aligned-list">
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
