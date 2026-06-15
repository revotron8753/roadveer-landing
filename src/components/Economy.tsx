const PILLARS = [
  {
    name: "Driver Economy",
    desc: "FASTag, insurance, health access, credit and 100+ earning streams for every driver on the highway.",
  },
  {
    name: "Highway Economy",
    desc: "A single connected marketplace across every national highway — vendors, logistics, services and welfare.",
  },
  {
    name: "Hero Product",
    desc: "The Roadveer app — the flagship platform that powers the entire highway ecosystem end to end.",
  },
  {
    name: "Service Providers",
    desc: "Verified mechanics, dhabas, tyre shops, towing and roadside services earning through driver traffic.",
  },
  {
    name: "Electric",
    desc: "EV charging, e-mobility, CNG and Bio-CNG green-energy infrastructure for a clean highway future.",
  },
  {
    name: "Gadi",
    desc: "Vehicle services for every gadi — repair, fitment, towing, fitness, insurance and resale.",
  },
];

const CARDS = [
  {
    name: "Driver Economy",
    desc: "FASTag, insurance, health access, financial services and earning opportunities for drivers on national highways.",
    tags: ["FASTag", "Insurance", "Health Access", "Financial Services"],
  },
  {
    name: "Vendor Economy",
    desc: "Certified mechanics, tyre shops, dhabas, fuel pumps and service providers get verified listings, driver traffic and digital payments.",
    tags: ["Mechanics", "Tyre Shops", "Dhabas", "Fuel"],
  },
  {
    name: "Financial Economy",
    desc: "Insurance distribution, microfinance access, FASTag services and utility bill payments through the RTR volunteer network.",
    tags: ["Insurance", "Microfinance", "Utilities", "Payments"],
  },
  {
    name: "Logistics Economy",
    desc: "Freight coordination, hamal networks, towing operators and logistics providers connected through a single platform.",
    tags: ["Freight", "Hamal", "Towing", "Logistics"],
  },
  {
    name: "Emergency Economy",
    desc: "1,000+ ambulances, doctors, lawyers and emergency responders earning through the Roadveer emergency response network.",
    tags: ["Ambulances", "Doctors", "Lawyers", "Emergency"],
  },
  {
    name: "Clean Energy Economy",
    desc: "EV charging, CNG, Bio-CNG and green logistics infrastructure creating a sustainable future for India's highway network.",
    tags: ["EV Charging", "CNG", "Bio-CNG", "Green Logistics"],
  },
];

const VISION = [
  { n: "50,00,000+", t: "Drivers Empowered" },
  { n: "5,00,000+", t: "RTR Volunteers" },
  { n: "2,00,000+", t: "Verified Vendors" },
  { n: "1,46,000 km", t: "National Highways" },
  { n: "1,00,000+", t: "Blood Donors" },
  { n: "1,000+", t: "Ambulances" },
  { n: "250+", t: "Earning Streams" },
  { n: "5,000+", t: "Hospital Network" },
];

export default function Economy() {
  return (
    <section id="economy">
      <div className="wrap">
        <div className="shead">
          <span className="idx">06 — Highway Economy</span>
          <h2 className="stitle">
            Six pillars of India&rsquo;s <em>highway economy</em>
          </h2>
          <p className="slede">
            Every participant in the Roadveer ecosystem can earn. From drivers to
            mechanics, RTR volunteers to logistics providers — these pillars turn
            the national highway into a living economy.
          </p>
        </div>

        <div className="pillars">
          {PILLARS.map((p, i) => (
            <div className="pillar" key={p.name}>
              <span className="pn">{String(i + 1).padStart(2, "0")}</span>
              <div className="pname">{p.name}</div>
              <p className="pdesc">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="econ-subhead">The economy in detail</div>
        <ul className="econ-list">
          {CARDS.map((c, i) => (
            <li className="econ-row" key={c.name}>
              <span className="econ-n">{String(i + 1).padStart(2, "0")}</span>
              <div className="econ-name">{c.name}</div>
              <div>
                <p className="econ-desc">{c.desc}</p>
                <div className="econ-tags">
                  {c.tags.map((t) => (
                    <span className="econ-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="vision">
          <div>
            <h3>
              2030 <em>Vision</em>
            </h3>
            <p>
              India&rsquo;s leading Highway Economy Platform connecting every
              driver, vendor, ambulance and community on every national highway.
            </p>
          </div>
          <ul className="vision-list">
            {VISION.map((v) => (
              <li key={v.t}>
                <b>{v.n}</b>
                {v.t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
