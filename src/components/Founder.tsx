const TAGS = [
  "Roadveer · Jun 2025–Present",
  "Earth Work Specialist · M D Yelapure",
  "Pune District, Maharashtra",
  "Earthmoving & Mining",
  "Road & Infrastructure",
  "CIMSME Chapter President",
];

const ECO = [
  "Driver Safety & Highway Support",
  "Emergency & Ambulance Access",
  "Health & Wellness Services",
  "Verified Service Networks",
  "Financial Inclusion",
  "Volunteer & Welfare Networks",
  "Technology with Human Empathy",
  "Highway Community Support",
];

export default function Founder() {
  return (
    <section id="farukh">
      <div className="wrap">
        <div className="founder-in">
          <aside className="founder-aside">
            <div className="founder-id">
              <div
                className="founder-ava"
                role="img"
                aria-label="Farukh Yelapure"
              />
              <div className="founder-meta">
                <div className="nm">Farukh Yelapure</div>
                <div className="rl">Founder — Roadveer</div>
                <div className="sb">
                  Chapter President, CIMSME Kolhapur · Shivaji University
                </div>
              </div>
            </div>
            <div className="ftags">
              {TAGS.map((t) => (
                <span className="ftag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </aside>

          <div className="founder-body">
            <div className="shead" style={{ marginBottom: 0 }}>
              <span className="idx">02 — Founder&rsquo;s Story</span>
              <h2 className="stitle">
                I did not grow up dreaming of building a technology company.
              </h2>
            </div>

            <p className="pullquote">
              I grew up watching service. My father worked as a mechanic in
              Maharashtra. On the Pune&ndash;Kolhapur highway, I watched him
              repair vehicles with limited resources and one simple belief:{" "}
              <em>
                &ldquo;If the truck moves, someone&rsquo;s family reaches
                home.&rdquo;
              </em>
            </p>

            <p className="story-p">
              I realised truck drivers are among India&rsquo;s most important yet
              least supported communities. They move food, medicines, industry
              and livelihoods &mdash; but often travel without reliable access to
              support, health services, emergency assistance, financial access,
              or even recognition.
            </p>

            <p className="story-p">
              My years in earthmoving, mining, road works, site development and
              project execution across India &mdash; through our family-led
              infrastructure business M D Yelapure &mdash; gave me first-hand
              understanding of what happens on India&rsquo;s highways. What the
              driver needs. What the system lacks.
            </p>

            <p className="story-p">
              <strong>Roadveer was born from that experience.</strong> Not from a
              boardroom. From the road.
            </p>

            <div className="eco-panel">
              <div className="et">What Roadveer Builds Together</div>
              <ul className="eco-list">
                {ECO.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>

            <p className="story-p" style={{ fontStyle: "italic" }}>
              Join us. Guide us. Partner with us. Volunteer with us. Help us
              create real impact.{" "}
              <strong style={{ fontStyle: "normal" }}>
                Building for those who keep India moving.
              </strong>
            </p>

            <div className="story-cta">
              <a href="#contact" className="btn">
                Partner with Roadveer
              </a>
              <a href="#rtr" className="btn-line">
                Become an RTR <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
