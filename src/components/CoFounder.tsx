import Image from "next/image";

const TAGS = [
  "Volunteer Mobilisation",
  "Public Trust",
  "Emergency Support",
  "Driver Welfare",
];

const ROWS = [
  {
    k: "Designation",
    v: "Co-Founder — Community Leadership, Maharashtra Mobilisation & Social Impact",
  },
  {
    k: "Public Identity",
    v: "Tiger Group leader, philanthropist, samaj sevak and grassroots community mobiliser",
  },
  {
    k: "Strategic Strength",
    v: "Volunteer mobilisation, public trust, local coordination, social service, and district & taluka reach",
  },
  {
    k: "Roadveer Role",
    v: "Converts Roadveer from an app into a movement — with ground trust and community participation",
  },
  {
    k: "Mission Value",
    v: "Maharashtra mobilisation, RTR network creation, emergency support, driver welfare and public visibility",
  },
];

export default function CoFounder() {
  return (
    <section id="cofounder" className="cof">
      <div className="wrap">
        <div className="cof-in">
          <aside className="cof-aside">
            <div className="cof-photo">
              <div className="frame">
                <Image
                  src="/tanaji-jadhav.jpeg"
                  alt="Shri Tanaji Bhau Jadhav — Co-Founder, Roadveer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div className="cof-plate">
                <div className="nm">Shri Tanaji Bhau Jadhav</div>
                <div className="rl">Co-Founder — Community Leadership</div>
                <div className="sb">
                  Tiger Group Leader · Samaj Sevak · Philanthropist
                </div>
              </div>
            </div>
            <div className="cof-tags">
              {TAGS.map((t) => (
                <span className="cof-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </aside>

          <div className="cof-body">
            <div className="shead" style={{ marginBottom: 24 }}>
              <span className="idx">02 — Co-Founder</span>
              <span className="eyebrow">Community Leadership · Maharashtra</span>
              <h2 className="stitle">
                Turning Roadveer from an app into a <em>movement.</em>
              </h2>
            </div>
            <p className="cof-lede">
              Positioned ahead of the founder across Roadveer&rsquo;s
              Maharashtra-facing mission &mdash; because public mobilisation,
              grassroots credibility and community trust are what turn an app
              into a movement on the ground.
            </p>
            <dl className="cof-rows">
              {ROWS.map((r) => (
                <div className="cof-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <blockquote className="cof-quote">
              A welfare-first, community-first leadership role. His strength is
              not only influence, but the ability to activate local volunteers,
              social networks, emergency support, ambulance awareness,
              district-level participation and driver welfare campaigns.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
