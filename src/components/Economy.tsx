const CARDS = [
  {
    name: "Driver Economy",
    desc: "FASTag, insurance, health access, financial services and earning opportunities for 50 lakh+ drivers on national highways.",
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
    desc: "200+ ambulances, doctors, lawyers and emergency responders earning through the Roadveer emergency response network.",
    tags: ["Ambulances", "Doctors", "Lawyers", "Emergency"],
  },
  {
    name: "Clean Energy Economy",
    desc: "EV charging, CNG, Bio-CNG and green logistics infrastructure creating a sustainable future for India's highway network.",
    tags: ["EV Charging", "CNG", "Bio-CNG", "Green Logistics"],
  },
];

const VISION = [
  { n: "5,00,000+", t: "Drivers" },
  { n: "1,00,000", t: "RTR Volunteers" },
  { n: "50,000", t: "Verified Vendors" },
  { n: "200+", t: "Ambulances" },
  { n: "100+", t: "Earning Streams" },
  { n: "—", t: "Hospital Network" },
];

export default function Economy() {
  return (
    <section id="economy">
      <div className="wrap">
        <div className="shead">
          <span className="idx">04 — Highway Economy</span>
          <h2 className="stitle">
            100+ earning opportunities across India&rsquo;s highways
          </h2>
          <p className="slede">
            Every participant in the Roadveer ecosystem can earn. From drivers to
            mechanics, RTR volunteers to logistics providers &mdash; the highway
            economy creates sustainable livelihoods.
          </p>
        </div>

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
