const CARDS = [
  {
    title: "Ambulance Network",
    desc: "1,000+ registered ambulances across the national highway network",
  },
  {
    title: "Blood Donor Network",
    desc: "1,00,000+ RTR volunteers registered as emergency blood donors across districts",
  },
  {
    title: "Hospital Referral",
    desc: "Direct tie-ups with trauma centres along national highways",
  },
  {
    title: "SOS Dispatch",
    desc: "Real-time SOS system integrated with NHAI's Rajmargyatra platform",
  },
];

const STEPS = [
  {
    title: "Incident Reported",
    desc: "Driver triggers SOS via Roadveer app or calls 1033 helpline",
  },
  {
    title: "RTR Alert",
    desc: "Nearest Roadveer Tiger Rakshak notified within 60 seconds",
  },
  {
    title: "Ambulance Dispatch",
    desc: "Closest registered ambulance dispatched from Roadveer network",
  },
  {
    title: "Golden Hour Support",
    desc: "RTR provides first response, stabilises situation until ambulance arrives",
  },
  {
    title: "Hospital Referral",
    desc: "Patient directed to nearest networked trauma centre with pre-alert",
  },
  {
    title: "iRAD Integration",
    desc: "Incident logged on MoRTH's national accident database for systemic improvement",
  },
];

export default function Emergency() {
  return (
    <section id="emergency">
      <div className="wrap">
        <div className="shead">
          <span className="idx">07 — Emergency Response</span>
          <span className="eyebrow">24 × 7 Emergency Response</span>
          <h2 className="stitle">
            Golden hour. <em>Every time.</em>
          </h2>
        </div>

        <div className="emg-in">
          <div className="emg-left">
            <div className="helpline">
              <div className="num">1033</div>
              <div className="lbl">
                NHAI National Highway Helpline (Rajmargyatra App)
              </div>
            </div>
            <div className="emg-cards">
              {CARDS.map((c, i) => (
                <div className="ec" key={c.title}>
                  <div className="ec-n">{String(i + 1).padStart(2, "0")}</div>
                  <div className="ec-title">{c.title}</div>
                  <div className="ec-desc">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="emg-right">
            <span className="eyebrow">How Emergency Response Works</span>
            <ol className="emg-flow" style={{ marginTop: 24 }}>
              {STEPS.map((s) => (
                <li key={s.title}>
                  <div>
                    <span className="ef-t">{s.title}</span>
                    <span className="ef-d">{s.desc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
