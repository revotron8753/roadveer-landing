const STAGES = [
  {
    stage: "Taluka",
    title: "Start at the taluka",
    desc: "Register RTRs, train volunteers and activate the first WhatsApp groups, block by block.",
  },
  {
    stage: "District",
    title: "Scale to the district",
    desc: "Coordinate ambulances, vendors, blood donors and welfare across every taluka in the district.",
  },
  {
    stage: "State",
    title: "Cover Maharashtra",
    desc: "1,00,000 RTR volunteers across all 36 districts, coordinated through MHRCDC.",
  },
  {
    stage: "Nation",
    title: "Replicate across India",
    desc: "Take the proven Maharashtra model to every state and every national highway.",
  },
];

const STATS = [
  { n: "36", t: "Districts" },
  { n: "358", t: "Talukas" },
  { n: "1,00,000", t: "RTR Target" },
  { n: "Tiger Group", t: "Ground Network" },
];

export default function MaharashtraStrategy() {
  return (
    <section id="maharashtra" className="mh">
      <div className="wrap">
        <div className="shead">
          <span className="idx">05 — Maharashtra Strategy</span>
          <span className="eyebrow">State-First Model</span>
          <h2 className="stitle">
            Maharashtra first. <em>Then the nation.</em>
          </h2>
          <p className="slede">
            Roadveer proves its model on the ground in Maharashtra — one taluka,
            one district at a time — before scaling across India. This is where
            community trust, volunteer mobilisation and government alignment come
            together first, under the leadership of Co-Founder Shri Tanaji Bhau
            Jadhav.
          </p>
        </div>

        <div className="mh-in">
          <ol className="ladder">
            {STAGES.map((s) => (
              <li key={s.stage}>
                <div className="ld-stage">{s.stage}</div>
                <div className="ld-body">
                  <strong>{s.title}</strong>
                  <span>{s.desc}</span>
                </div>
              </li>
            ))}
          </ol>

          <div className="mh-side">
            <div className="mhrcdc-card">
              <span className="tag">Strategic Vehicle</span>
              <h3>MHRCDC</h3>
              <div className="sub">
                Maharashtra Highway, Road &amp; Community Development Council
              </div>
              <p>
                The state-level coordination body driving Roadveer&rsquo;s
                Maharashtra rollout — RTR networks, district participation,
                emergency response and driver-welfare delivery on the ground.
              </p>
            </div>
            <div className="mh-stats">
              {STATS.map((s) => (
                <div className="mh-stat" key={s.t}>
                  <b>{s.n}</b>
                  <span>{s.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
