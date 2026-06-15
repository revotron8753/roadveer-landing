const MORTH_FACTS = [
  "Apex ministry for all road transport & highways policy",
  "National target: 50% reduction in road fatalities",
  "1,46,000+ km of National Highways under its mandate",
  "Oversees NHAI, NHIDCL, IHMCL & all road-safety programmes",
];

// Bodies, platforms and programmes that operate under MoRTH.
const UNDER_MORTH = [
  {
    href: "https://nhai.gov.in",
    name: "NHAI",
    org: "National Highways Authority of India",
    desc: "Apex body managing 1,46,560 km of National Highways — construction, maintenance, road safety and toll operations.",
    link: "nhai.gov.in",
  },
  {
    href: "https://nhidcl.com",
    name: "NHIDCL",
    org: "NH & Infra Development Corporation",
    desc: "MoRTH PSU developing national highways and strategic infrastructure in the border and north-eastern regions.",
    link: "nhidcl.com",
  },
  {
    href: "https://ihmcl.com",
    name: "IHMCL",
    org: "Indian Highways Management Co. Ltd.",
    desc: "NHAI company running FASTag, the electronic tolling programme and advanced highway traffic management systems.",
    link: "ihmcl.com",
  },
  {
    href: "https://roadsafety.morth.nic.in",
    name: "Road Safety Portal",
    org: "MoRTH National Road Safety",
    desc: "Central hub for road safety data, campaigns, NGO financial assistance (up to ₹5 lakh) and Sadak Suraksha Abhiyan.",
    link: "roadsafety.morth.nic.in",
  },
  {
    href: "https://irad.morth.nic.in",
    name: "iRAD / e-DAR",
    org: "Integrated Road Accident Database",
    desc: "National accident data platform — black-spot analysis, policy intervention and Golden Hour coordination.",
    link: "irad.morth.nic.in",
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.nhai.rajmargyatra",
    name: "Rajmargyatra App",
    org: "NHAI Official Highway App",
    desc: "All-in-one highway companion: FASTag, toll info, 1033 emergency helpline, over-speeding alerts and complaint redressal.",
    link: "Google Play",
  },
  {
    href: "https://nhai.gov.in",
    name: "Rajmarg Saathi (RPV)",
    org: "NHAI Route Patrol Vehicles 2024",
    desc: "Upgraded Route Patrolling Vehicles with high-visibility branding, dashboard cams and incident management.",
    link: "nhai.gov.in",
  },
  {
    href: "https://mybharat.gov.in",
    name: "Sadak Suraksha Mitra",
    org: "MoRTH + Ministry of Youth Affairs",
    desc: "Youth volunteer programme (18–28 yrs) across 100 districts via MYBharat — first aid, crash-scene coordination, audits.",
    link: "mybharat.gov.in",
  },
  {
    href: "https://morth.gov.in",
    name: "Sadak Suraksha Abhiyan",
    org: "MoRTH Annual Road Safety Campaign",
    desc: "National awareness campaign with telethon and state-level drives targeting the leading causes of road fatalities.",
    link: "morth.gov.in",
  },
];

const ASSOC = [
  {
    href: "https://savelifefoundation.org",
    name: "Save Life Foundation",
    url: "savelifefoundation.org",
  },
  {
    href: "https://ncsc.nic.in",
    name: "National Road Safety Council",
    url: "ncsc.nic.in",
  },
  {
    href: "https://iitmadras.ac.in",
    name: "IIT Madras — CoERS",
    url: "Centre of Excellence for Road Safety",
  },
  {
    href: "https://iiitd.ac.in",
    name: "IIIT Delhi",
    url: "AI for Road Signs (NHAI MoU)",
  },
  {
    href: "https://irfnet.ch",
    name: "IRF India Chapter",
    url: "International Road Federation",
  },
  { href: "https://pib.gov.in", name: "PIB — MoRTH Press", url: "pib.gov.in" },
];

export default function RoadSafety() {
  return (
    <section id="nhai">
      <div className="wrap">
        <div className="shead">
          <span className="idx">08 — Road Safety</span>
          <span className="eyebrow">Government Road Safety Ecosystem</span>
          <h2 className="stitle">
            Under the Ministry of Road Transport &amp; Highways
          </h2>
          <p className="slede">
            Roadveer operates in full alignment with India&rsquo;s national road
            safety mission. At its apex is MoRTH — and every authority, platform
            and programme below works within its mandate.
          </p>
        </div>

        <a
          href="https://morth.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="morth-apex"
        >
          <div className="ma-left">
            <span className="ma-tag">Apex Authority</span>
            <h3>MoRTH</h3>
            <div className="ma-sub">
              Ministry of Road Transport &amp; Highways · Government of India
            </div>
            <p className="ma-desc">
              The nodal ministry for all road transport and highways policy in
              India. It sets the national road-safety agenda and directs every
              body and programme that Roadveer works within.
            </p>
            <span className="ma-link">morth.gov.in &rarr;</span>
          </div>
          <ul className="ma-facts">
            {MORTH_FACTS.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </a>

        <div className="hier-label">
          <span>Bodies, Platforms &amp; Programmes under MoRTH</span>
        </div>
        <div className="gov-grid">
          {UNDER_MORTH.map((c, i) => (
            <a
              key={`${c.name}-${i}`}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="gov-card"
            >
              <div className="nm">{c.name}</div>
              <div className="og">{c.org}</div>
              <p className="ds">{c.desc}</p>
              <span className="lk">{c.link} &rarr;</span>
            </a>
          ))}
        </div>

        <div className="assoc-h">Associate Organisations &amp; Research Partners</div>
        <div className="assoc-grid">
          {ASSOC.map((a) => (
            <a
              key={a.href + a.name}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="assoc-card"
            >
              <div className="assoc-name">{a.name}</div>
              <div className="assoc-url">{a.url}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
