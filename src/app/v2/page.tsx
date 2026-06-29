/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import type { Metadata } from "next";
import "./v2.css";

export const metadata: Metadata = {
  title: "Tiger RoadVeer Welfare Foundation — Building India's Highway Economy",
  description:
    "A people-powered movement empowering drivers, mechanics, farmers, women, youth and entrepreneurs through Seva, Kamai and Suraksha.",
};

/* ---------- inline icons ---------- */
const I = {
  arrow: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  ),
  wheel: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path d="M12 9V3M9.5 14.5l-4.5 4M14.5 14.5l4.5 4" /></svg>),
  shieldUser: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6z" /><circle cx="12" cy="10" r="2.2" /><path d="M8.5 16c.6-1.8 2-2.6 3.5-2.6s2.9.8 3.5 2.6" /></svg>),
  badge: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="9" r="5" /><path d="M9 13l-1 8 4-2 4 2-1-8" /></svg>),
  ambulance: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z" /><circle cx="7" cy="17" r="1.6" /><circle cx="17" cy="17" r="1.6" /><path d="M7 9.5h2M8 8.5v2" /></svg>),
  hospital: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" /><path d="M3 21h18M12 7v4M10 9h4" /></svg>),
  road: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 21L9 3M18 21L15 3M12 5v2M12 11v2M12 17v2" /></svg>),
  people: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M16 6.5a3 3 0 0 1 0 5.8M21 20c0-2.5-1.4-4.6-3.4-5.4" /></svg>),
  pulse: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 12h4l2 6 4-12 2 6h6" /></svg>),
  spark: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /></svg>),
  heart: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 20s-7-4.3-7-9.3A3.7 3.7 0 0 1 12 7a3.7 3.7 0 0 1 7 3.4c0 5-7 9.6-7 9.6z" /></svg>),
  chart: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /><path d="M5 8l5-5 4 4 6-6" /></svg>),
  shield: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>),
  userPlus: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6 1.3 0 2.5.4 3.5 1.1M17 11v6M14 14h6" /></svg>),
  book: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2z" /><path d="M4 19a2 2 0 0 0 2 2h13" /></svg>),
  flag: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 21V4M5 4h11l-1.5 4L16 12H5" /></svg>),
  star: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.9 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" /></svg>),
};

const heroStats = [
  { n: "50 Lakh+", l: "Drivers to be Connected", ic: I.wheel },
  { n: "5 Lakh", l: "Tiger RoadVeer Rakshaks", ic: I.shieldUser },
  { n: "2 Lakh", l: "Verified Partners", ic: I.badge },
  { n: "1,000+", l: "Ambulances Network", ic: I.ambulance },
  { n: "5,000+", l: "Hospitals Network", ic: I.hospital },
];

const ecoStats = [
  { n: "1,46,000+ km", l: "National Highways", ic: I.road },
  { n: "Millions", l: "Livelihoods Connected", ic: I.people },
  { n: "Thousands", l: "Daily Lives Impacted", ic: I.pulse },
  { n: "Endless", l: "Opportunities", ic: I.spark },
];

const founders = [
  {
    name: "Shri Tanaji Bhau Jadhav",
    photo: "/tanaji-jadhav.jpeg",
    paras: [
      "A leader who has spent years on India's highways understanding the challenges of drivers and communities.",
      "His vision: a structured highway movement of opportunity, dignity and safety.",
    ],
  },
  {
    name: "Shri Farukh Yelapure",
    photo: "/Farukh.jpeg",
    paras: [
      "A dynamic organiser scaling this vision through technology, partnerships and people.",
      "Together, building a safer, more prosperous Highway Economy for India.",
    ],
  },
];

const philosophy = [
  { t: "SEVA", we: "We Serve", ic: I.heart, cls: "g g1", icCls: "g", d: "Driver welfare, road safety, health awareness and emergency response through mobilised volunteers." },
  { t: "KAMAI", we: "We Empower", ic: I.chart, cls: "o1", icCls: "o", d: "Sustainable livelihoods through entrepreneurship, digital opportunities, MSME growth and skilling." },
  { t: "SURAKSHA", we: "We Protect", ic: I.shield, cls: "g2", icCls: "g", d: "Road safety, emergency preparedness, verified networks and insurance for safer highways." },
];

const empowerList = [
  "Drivers & Fleet Owners", "Transport Workers",
  "Mechanics & Workshop Owners", "MSMEs & Vendors",
  "Farmers & Agri Producers", "Local Communities",
  "Women Entrepreneurs", "Informal Workers",
  "Youth & Students", "And many more",
];

const missionAreas = [
  { t: "Road Safety & Driver Welfare", s: "Safer drivers, safer highways.", img: "/v2-roadsafety.png" },
  { t: "Education & Future Skills", s: "Preparing youth for the future.", img: "/v2-education.png" },
  { t: "AI & Digital Empowerment", s: "Building digital skills for new opportunities.", img: "/driver-first-ecosystem.png" },
  { t: "Mechanic Modernisation", s: "Upgrading skills for modern vehicles.", img: "/v2-mechanic.jpg" },
  { t: "Employment & Entrepreneurship", s: "New jobs. New businesses.", img: "/v2-employment.png" },
  { t: "Agriculture & Rural Development", s: "Connecting farms to markets.", img: "/v2-agriculture.png" },
  { t: "Clean Mobility & Sustainability", s: "Green highways. Clean future.", img: "/v2-mobility.png" },
  { t: "Community Resilience", s: "Stronger communities. Stronger India.", img: "/v2-community.png" },
];

const steps = [
  { b: "Join", s: "The Movement", ic: I.userPlus },
  { b: "Learn", s: "New Skills", ic: I.book },
  { b: "Serve", s: "Your Community", ic: I.heart },
  { b: "Lead", s: "With Impact", ic: I.flag },
  { b: "Transform", s: "Lives", ic: I.star },
];

const impactStats = [
  { n: "1,00,000+", l: "Rakshaks", ic: I.shieldUser },
  { n: "50 Lakh+", l: "Drivers", ic: I.wheel },
  { n: "2 Lakh+", l: "Verified Partners", ic: I.badge },
  { n: "1,000+", l: "Ambulances", ic: I.ambulance },
  { n: "5,000+", l: "Hospitals", ic: I.hospital },
  { n: "250+", l: "Earning Opportunities", ic: I.chart },
];

const navLinks = ["Mission", "Programs", "Impact", "Rakshak", "Partners", "Stories", "Contact"];

export default function V2Page() {
  return (
    <div className="tv">
      {/* ===== HEADER ===== */}
      <header className="tv-hdr">
        <div className="tv-wrap tv-hdr-in">
          <a href="#" className="tv-brand">
            <span className="tv-mark" aria-hidden />
            <span className="tv-brand-tx">
              <b>TIGER <span>ROADVEER</span></b>
              <i>WELFARE FOUNDATION</i>
              <em>Seva · Kamal · Suraksha</em>
            </span>
          </a>
          <nav className="tv-nav">
            {navLinks.map((l) => (
              <a key={l} href="#">{l}</a>
            ))}
          </nav>
          <a href="#join" className="tv-btn tv-btn-o">Become a Rakshak <I.arrow /></a>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="tv-hero">
        <div className="tv-hero-bg"><img src="/v2-hero.png" alt="Tiger RoadVeer community on the highway" /></div>
        <div className="tv-wrap tv-hero-in">
          <div className="tv-hero-copy">
            <h1>
              <span className="tv-h1-sm">Building India&rsquo;s</span>
              Highway Economy.<br />One Community at a Time.
            </h1>
            <p className="tv-hero-sub">
              A people-powered movement empowering drivers, mechanics, farmers,
              women, youth and entrepreneurs through <span className="s">Seva</span>,{" "}
              <span className="k">Kamai</span> and <span className="s">Suraksha</span>.
            </p>
            <div className="tv-hero-acts">
              <a href="#join" className="tv-btn tv-btn-o">Become a Tiger RoadVeer Rakshak <I.arrow /></a>
              <a href="#mission" className="tv-btn tv-btn-ghost">Explore Our Mission <I.arrow /></a>
            </div>
          </div>
        </div>
        <div className="tv-statbar">
          <div className="tv-wrap">
            <div className="tv-statbar-in">
              {heroStats.map((s) => (
                <div className="tv-stat" key={s.l}>
                  <s.ic />
                  <div><b>{s.n}</b><span>{s.l}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTINUOUS BACKGROUND TINT (Highway Economy → Partners) =====
           One running wash: warm peach → cream → sage-green, top to bottom. */}
      <div className="tv-flow">
      {/* ===== HIGHWAY ECONOMY ===== */}
      <section className="tv-eco">
        <div className="tv-wrap tv-eco-in">
          <div className="tv-eco-l">
            <p className="tv-eyebrow">THE HIGHWAY ECONOMY</p>
            <h2 className="tv-h2">Highways Move More Than Vehicles. They Move Lives.</h2>
            <p>Highways connect livelihoods, businesses, farms, markets and millions of people who keep India moving.</p>
            <p>We are building India&rsquo;s most organised Highway Economy by connecting every stakeholder into one trusted ecosystem.</p>
          </div>
          <div className="tv-eco-img"><img src="/v2-highway.png" alt="National highway through the hills" /></div>
          <div className="tv-eco-stats">
            {ecoStats.map((s) => (
              <div className="tv-eco-stat" key={s.l}>
                <s.ic />
                <div><b>{s.n}</b><span>{s.l}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISIONARIES ===== */}
      <section className="tv-vis">
        <div className="tv-wrap">
          <p className="tv-eyebrow tv-center">THE VISIONARIES BEHIND THE MOVEMENT</p>
          <div className="tv-vis-in">
            <div className="tv-founder">
              <img className="tv-founder-ph" src={founders[0].photo} alt={founders[0].name} />
              <div className="tv-founder-body">
                <h3>{founders[0].name}</h3>
                <div className="role">Co-Founder</div>
                {founders[0].paras.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="tv-vis-center">
              <div className="tv-vis-badge" aria-hidden />
              <h4>One Vision.<br />One Mission.<br />One Movement.</h4>
            </div>
            <div className="tv-founder">
              <img className="tv-founder-ph" src={founders[1].photo} alt={founders[1].name} />
              <div className="tv-founder-body">
                <h3>{founders[1].name}</h3>
                <div className="role">Co-Founder</div>
                {founders[1].paras.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GUIDING PHILOSOPHY ===== */}
      <section className="tv-phil" id="mission">
        <div className="tv-wrap">
          <p className="tv-eyebrow tv-center">OUR GUIDING PHILOSOPHY</p>
          <div className="tv-phil-cards">
            {philosophy.map((p) => (
              <div className={`tv-phil-card ${p.cls}`} key={p.t}>
                <div className={`tv-phil-ic ${p.icCls}`}><p.ic /></div>
                <h3>{p.t}</h3>
                <div className="we">{p.we}</div>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
          <p className="tv-phil-note">Every decision, campaign and activity strengthens at least one of these three pillars.</p>
        </div>
      </section>

      {/* ===== WHO WE EMPOWER ===== */}
      <section className="tv-emp">
        <div className="tv-wrap tv-emp-in">
          <div className="tv-emp-banner">
            <img src="/v2-empower.png" alt="People we empower" />
          </div>
          <div className="tv-emp-body">
            <h2 className="tv-h2">WHO WE EMPOWER</h2>
            <p>We empower every individual and institution who contributes to India&rsquo;s Highway Economy.</p>
            <ul className="tv-emp-list">
              {empowerList.map((e) => <li key={e}>{e}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== MISSION AREAS ===== */}
      <section className="tv-mission">
        <div className="tv-wrap">
          <h2 className="tv-h2 tv-center">OUR MISSION AREAS</h2>
          <div className="tv-mgrid">
            {missionAreas.map((m) => (
              <div className="tv-mcard" key={m.t}>
                <div className="tv-mcard-img"><img src={m.img} alt={m.t} /></div>
                <div className="tv-mcard-b">
                  <h4>{m.t}</h4>
                  <p>{m.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BECOME A RAKSHAK ===== */}
      <section className="tv-rak">
        <div className="tv-wrap tv-rak-in">
          <div className="tv-rak-l">
            <h2 className="tv-h2">BECOME A TIGER ROADVEER RAKSHAK</h2>
            <p>A Rakshak is a community leader, volunteer, digital ambassador, safety ambassador and changemaker.</p>
            <div className="tv-steps">
              {steps.map((s, i) => (
                <Fragment key={s.b}>
                  <div className="tv-step">
                    <div className="tv-step-ic"><s.ic /></div>
                    <b>{s.b}</b>
                    <span>{s.s}</span>
                  </div>
                  {i < steps.length - 1 && <span className="tv-step-arrow">&rarr;</span>}
                </Fragment>
              ))}
            </div>
            <a href="#join" className="tv-btn tv-btn-g">Become a Rakshak Today <I.arrow /></a>
          </div>
          <div className="tv-mh">
            <h3>MAHARASHTRA FIRST. THEN THE NATION.</h3>
            <p>We are starting in Maharashtra to build a strong foundation and a scalable model for the entire country.</p>
            <div className="tv-mh-body">
              <div className="tv-mh-stats">
                <div className="tv-mh-stat"><b>36</b><span>Districts</span></div>
                <div className="tv-mh-stat"><b>358</b><span>Talukas</span></div>
                <div className="tv-mh-stat"><b>1 Lakh</b><span>Rakshaks (Phase 1)</span></div>
              </div>
              <div className="tv-mh-map" aria-label="Maharashtra leading the nation" role="img" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTNERS & CSR ===== */}
      <section className="tv-partners" id="partners">
        <div className="tv-wrap">
          <p className="tv-eyebrow">PARTNERS &amp; CSR</p>
          <h2 className="tv-partners-h">Together with partners, we create larger impact.</h2>
          <div className="tv-partners-grid">
            <div className="tv-partners-card">
              <p className="tv-partners-lbl">Our Partners &amp; Supporters</p>
              <div className="tv-logos">
                <div className="tv-logo">Reliance<small>FOUNDATION</small></div>
                <div className="tv-logo">TATA<small>TRUSTS</small></div>
                <div className="tv-logo">IndianOil</div>
                <div className="tv-logo">Bharat<small>PETROLEUM</small></div>
                <div className="tv-logo tv-logo-more">&amp; Many More Partners</div>
              </div>
              <a href="#" className="tv-btn tv-btn-line">View All Partners <I.arrow /></a>
            </div>
            <div className="tv-ministry">
              <p className="lbl">UNDER THE MINISTRY OF ROAD TRANSPORT &amp; HIGHWAYS</p>
              <p>Our initiatives align with the vision of the Government of India towards safer roads, stronger communities and Viksit Bharat.</p>
              <p className="tv-ministry-sub">Our work directly supports the mission to:</p>
              <ul className="tv-ministry-list">
                <li>Build safer national highways and reduce road accidents</li>
                <li>Uphold the dignity and welfare of drivers &amp; transport workers</li>
                <li>Create skilling, livelihoods and rural market connectivity</li>
                <li>Advance a self-reliant, Viksit Bharat</li>
              </ul>
              <div className="tv-ministry-emblem">
                <img src="/Ministry_of_Road_Transport_and_Highways.svg" alt="Ministry of Road Transport & Highways, Government of India" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMPACT DASHBOARD ===== */}
      <section className="tv-impact">
        <div className="tv-wrap">
          <div className="tv-impact-card">
            <div className="tv-impact-top">
              <div>
                <h2 className="tv-h2">IMPACT DASHBOARD</h2>
                <div className="sub">Our progress. Our promise.</div>
              </div>
              <a href="#partners" className="tv-btn tv-btn-line">Recruit Partners <I.arrow /></a>
            </div>
            <div className="tv-ivideo"><img src="/v2-empower.png" alt="Impact video" /></div>
            <div className="tv-impact-row">
              {impactStats.map((s) => (
                <div className="tv-idash" key={s.l}>
                  <s.ic />
                  <b>{s.n}</b>
                  <span>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>{/* /tv-flow */}

      {/* ===== JOIN MOVEMENT ===== */}
      <section className="tv-join" id="join">
        <div className="tv-join-card">
          <div className="tv-join-bg"><img src="/v2-cta.png" alt="" /></div>
          <div className="tv-wrap tv-join-grid">
            <div className="tv-join-l">
              <h2>JOIN THE TIGER ROADVEER MOVEMENT</h2>
              <p>Whether you are a driver, youth, entrepreneur, volunteer, institution or organisation, your contribution can create safer roads, stronger communities and better livelihoods.</p>
            </div>
            <form className="tv-form">
              <p className="tv-form-t">Become a Rakshak or Partner with Us</p>
              <div className="tv-form-grid">
                <div><label>Your Name</label><input type="text" placeholder="Your Name" /></div>
                <div><label>Mobile Number</label><input type="tel" placeholder="Mobile Number" /></div>
                <div><label>Email Address</label><input type="email" placeholder="Email Address" /></div>
                <div>
                  <label>I am a</label>
                  <select defaultValue=""><option value="" disabled>Select</option>
                    <option>Driver</option><option>Mechanic</option><option>Farmer</option>
                    <option>Youth / Student</option><option>Entrepreneur</option>
                    <option>Volunteer</option><option>Partner / Institution</option>
                  </select>
                </div>
                <div>
                  <label>City / District</label>
                  <select defaultValue=""><option value="" disabled>Select</option>
                    <option>Mumbai</option><option>Pune</option><option>Nagpur</option>
                    <option>Kolhapur</option><option>Other</option>
                  </select>
                </div>
                <div><label>Message</label><textarea placeholder="Message" /></div>
              </div>
              <button type="submit" className="tv-btn tv-btn-o">Submit &amp; Join the Movement <I.arrow /></button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="tv-foot">
        <div className="tv-wrap tv-foot-in">
          <span>© 2025 Tiger RoadVeer Welfare Foundation. All rights reserved.</span>
          <span>Made with <span className="heart">♥</span> for India&rsquo;s Highway Economy</span>
        </div>
      </footer>
    </div>
  );
}
