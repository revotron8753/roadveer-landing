const CARDS = [
  {
    href: "https://nhai.gov.in",
    name: "NHAI",
    org: "National Highways Authority of India",
    desc: "Apex body managing 1,46,560 km of National Highways. Oversees construction, maintenance, road safety and toll operations across India.",
    link: "nhai.gov.in",
  },
  {
    href: "https://morth.gov.in",
    name: "MoRTH",
    org: "Ministry of Road Transport & Highways",
    desc: "Nodal ministry for all road transport and highways policies. Leads the national target of 50% reduction in road fatalities by 2030.",
    link: "morth.gov.in",
  },
  {
    href: "https://roadsafety.morth.nic.in",
    name: "Road Safety Portal",
    org: "MoRTH National Road Safety",
    desc: "Central hub for road safety data, campaigns, NGO financial assistance (up to ₹5 lakh) and Sadak Suraksha Abhiyan awareness drives.",
    link: "roadsafety.morth.nic.in",
  },
  {
    href: "https://irad.morth.nic.in",
    name: "iRAD / e-DAR",
    org: "Integrated Road Accident Database",
    desc: "National accident data platform. Every crash leaves a digital trail — enabling black-spot analysis, policy intervention and Golden Hour coordination.",
    link: "irad.morth.nic.in",
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.nhai.rajmargyatra",
    name: "Rajmargyatra App",
    org: "NHAI Official Highway App",
    desc: "All-in-one highway companion: FASTag, toll info, 1033 emergency helpline, over-speeding alerts, complaint redressal and route planning. 3.5L+ downloads.",
    link: "Google Play",
  },
  {
    href: "https://nhai.gov.in",
    name: "Rajmarg Saathi (RPV)",
    org: "NHAI Route Patrol Vehicles 2024",
    desc: "Upgraded Route Patrolling Vehicles with high-visibility branding, dashboard cams, NHAI One app integration and incident management (Dec 2024 circular).",
    link: "nhai.gov.in",
  },
  {
    href: "https://mybharat.gov.in",
    name: "Sadak Suraksha Mitra",
    org: "MoRTH + Ministry of Youth Affairs",
    desc: "Youth volunteer programme (18–28 yrs) across 100 districts via MYBharat. Trained in first aid, crash-scene coordination and black-spot audits through DRSCs.",
    link: "mybharat.gov.in",
  },
  {
    href: "https://morth.gov.in",
    name: "Sadak Suraksha Abhiyan",
    org: "MoRTH Annual Road Safety Campaign",
    desc: "3rd edition in 2025 — national awareness campaign with telethon, state-level drives targeting the leading causes of road fatalities in India.",
    link: "morth.gov.in",
  },
  {
    href: "https://newsonair.gov.in",
    name: "NHAI–Jio Safety Alerts",
    org: "NHAI + Reliance Jio, Dec 2025",
    desc: "Telecom-based highway safety alerts via SMS, WhatsApp and high-priority calls to Jio users near hazardous zones — integrated with Rajmargyatra & 1033.",
    link: "Learn more",
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
  { href: "https://nhidcl.com", name: "NHIDCL", url: "nhidcl.com" },
  {
    href: "https://ihmcl.com",
    name: "IHMCL",
    url: "Indian Highways Management Co. Ltd.",
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
          <span className="idx">06 — Road Safety</span>
          <span className="eyebrow">Government Road Safety Ecosystem</span>
          <h2 className="stitle">National initiatives &mdash; NHAI &amp; MoRTH</h2>
          <p className="slede">
            Roadveer operates in full alignment with India&rsquo;s national road
            safety mission. These are the key government programmes, platforms
            and institutions we work within.
          </p>
        </div>

        <div className="gov-grid">
          {CARDS.map((c, i) => (
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

        <div className="assoc-h">Associate Organisations &amp; Portals</div>
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
