const BENEFITS = [
  { title: "Kamai", sub: "100+ earning opportunities" },
  { title: "Suraksha", sub: "Emergency response training" },
  { title: "Seva", sub: "Driver welfare & community" },
  { title: "Samman", sub: "Recognition & leadership" },
  { title: "Digital Tools", sub: "App, training & reporting" },
  { title: "Emergency Network", sub: "Ambulance & golden hour" },
];

const STEPS = [
  "Register on MYBharat / Roadveer App",
  "One-week training: First Aid & Road Safety",
  "Join your Taluka RTR WhatsApp Group",
  "Start serving, earning & leading",
];

const CERTS = ["Bronze", "Silver", "Gold", "Platinum"];

export default function RTR() {
  return (
    <section id="rtr" className="on-ink">
      <div className="wrap">
        <div className="rtr-in">
          <div>
            <div className="shead" style={{ marginBottom: 0 }}>
              <span className="idx">03 — RTR Network</span>
              <span className="eyebrow on-ink">Roadveer Tiger Rakshaks</span>
              <h2 className="stitle">
                Join India&rsquo;s largest highway volunteer network
              </h2>
            </div>
            <p className="slede">
              RTRs are the backbone of the Roadveer mission &mdash; earning,
              serving and leading across Maharashtra&rsquo;s highways and beyond.
            </p>
            <ul className="rtr-benefits">
              {BENEFITS.map((b, i) => (
                <li key={b.title}>
                  <span className="rb-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="rb-t">
                    <strong>{b.title}</strong>
                    <span>{b.sub}</span>
                  </span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn">
              Register as RTR <span>&rarr;</span>
            </a>
          </div>

          <div className="rtr-panel">
            <div className="rtr-num">1,00,000</div>
            <div className="rtr-num-l">RTR Volunteers · Maharashtra Target</div>
            <p className="rtr-desc">
              One Taluka. One District. One state at a time. Under the leadership
              of Shri Tanaji (Bhau) Jadhav &mdash; Maharashtra&rsquo;s foremost
              community leader.
            </p>
            <ol className="rtr-steps">
              {STEPS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <div className="cert-l">Volunteer Certification Levels</div>
            <div className="certs">
              {CERTS.map((c) => (
                <div className="cert" key={c}>
                  {c}
                </div>
              ))}
            </div>
            <a href="#contact" className="btn" style={{ width: "100%", justifyContent: "center" }}>
              Become RTR Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
