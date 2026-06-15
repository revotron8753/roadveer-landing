const CATS = [
  "Mechanics",
  "Tyre Shops",
  "Dhabas",
  "Fuel Stations",
  "Towing Operators",
  "Parking Operators",
  "Doctors",
  "Lawyers",
  "FASTag Providers",
  "Insurance Services",
  "Ambulances",
  "Hamal Networks",
];

const JOURNEY = [
  { label: "Register", sub: "Online form + basic documents" },
  { label: "Training", sub: "Driver First Philosophy & Digital Payments" },
  { label: "Verify", sub: "RTR field verification visit" },
  { label: "Certify", sub: "Bronze → Silver → Gold → Platinum" },
  { label: "Earn", sub: "Get driver traffic & revenue" },
];

export default function Vendor() {
  return (
    <section id="vendor">
      <div className="wrap">
        <div className="shead">
          <span className="idx">09 — Vendor Network</span>
          <h2 className="stitle">Join 50,000 verified highway vendors</h2>
          <p className="slede">
            Get certified, attract drivers and earn more. Roadveer&rsquo;s Driver
            First Philosophy means verified vendors get direct access to millions
            of highway users.
          </p>
        </div>

        <div className="vend-cats">
          {CATS.map((c, i) => (
            <div className="vc" key={c}>
              <span className="vn">{String(i + 1).padStart(2, "0")}</span>
              <span className="vt">{c}</span>
            </div>
          ))}
        </div>

        <div className="vend-journey">
          <div className="vj-title">Vendor Onboarding Journey</div>
          <div className="vj-steps">
            {JOURNEY.map((j, i) => (
              <div className="vj-step" key={j.label}>
                <div className="vj-n">{String(i + 1).padStart(2, "0")}</div>
                <div className="vj-label">{j.label}</div>
                <div className="vj-sub">{j.sub}</div>
              </div>
            ))}
          </div>
          <div className="vend-cta">
            <a href="#contact" className="btn">
              Register as Vendor <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
