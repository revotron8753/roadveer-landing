import Image from "next/image";

const MISSION = [
  "Driver Safety & Highway Support",
  "Emergency & Ambulance Access",
  "Health & Wellness Services",
  "Verified Service Networks",
  "Highway Community Support",
  "Financial Inclusion",
  "Volunteer & Welfare Networks",
  "Technology with Human Empathy",
];

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-in">
          <div className="about-img">
            <div className="frame">
              <Image
                src="/founder-gadkari.jpg"
                alt="Roadveer National Mission"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <blockquote className="about-quote">
              <p>
                No driver should feel alone on the road. Roadveer is not just an
                app &mdash; it is a mission.
              </p>
              <cite>Farukh Yelapure, Founder</cite>
            </blockquote>
          </div>

          <div className="about-right">
            <div className="shead" style={{ marginBottom: 0 }}>
              <span className="idx">01 — Mission</span>
              <span className="eyebrow">Driver-First Ecosystem</span>
              <h2 className="stitle">
                Building India&rsquo;s driver-first ecosystem
              </h2>
            </div>
            <p className="about-lede">
              Truck drivers are among India&rsquo;s most important yet least
              supported communities. They move food, medicines, industry and
              livelihoods &mdash; but often travel without reliable access to
              support, health services, emergency assistance, financial access,
              or even recognition.
            </p>
            <ul className="feature-list">
              {MISSION.map((m, i) => (
                <li key={m}>
                  <span className="fl-n">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="fl-t">{m}</span>
                </li>
              ))}
            </ul>
            <div className="belief">
              <p>
                Because <strong>behind every truck is a person.</strong> Behind
                every person is a family. And behind every journey is a dream.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
