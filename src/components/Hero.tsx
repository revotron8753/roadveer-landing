import Image from "next/image";

const STATS = [
  { num: "5", acc: "L+", label: "Drivers" },
  { num: "1", acc: "L", label: "RTR Target" },
  { num: "50", acc: "K", label: "Vendors" },
  { num: "200", acc: "+", label: "Ambulances" },
];

export default function Hero() {
  return (
    <section id="hero">
      <div className="wrap">
        <div className="hero-in">
          <div className="hero-copy">
            <span className="eyebrow">India&rsquo;s Highway Economy Platform</span>
            <h1 className="hero-h1">
              Building for those who keep India <em>moving.</em>
            </h1>
            <p className="hero-sub">Driver Ka Saathi &nbsp;·&nbsp; Highway Ka Dost</p>
            <blockquote className="hero-quote">
              &ldquo;If the truck moves, someone&rsquo;s family reaches home.&rdquo;
            </blockquote>
            <p className="hero-lede">
              A platform for drivers, volunteers, vendors and communities across
              every national highway in the nation.
            </p>
            <div className="hero-acts">
              <a href="#rtr" className="btn">
                Become an RTR
              </a>
              <a href="#contact" className="lnk">
                Register as Vendor <span className="arw">&rarr;</span>
              </a>
              <a href="#contact" className="lnk">
                Download App <span className="arw">&rarr;</span>
              </a>
            </div>
          </div>

          <figure className="hero-figure">
            <div className="frame">
              <Image
                src="/founder-gadkari.jpg"
                alt="Farukh Yelapure with Hon. Shri Nitin Gadkari Ji, Minister of Road Transport & Highways"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>
            <figcaption className="hero-cap">
              <span className="tag">Ministry of Road Transport &amp; Highways</span>
              <p>
                <strong>Farukh Yelapure</strong>, Founder &mdash; Roadveer, with{" "}
                <strong>Hon. Shri Nitin Gadkari Ji</strong>{" "}
                <span>&mdash; Minister of Road Transport &amp; Highways, Govt. of India</span>
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="hero-stats">
          {STATS.map((s) => (
            <div className="hstat" key={s.label}>
              <div className="hstat-n">
                {s.num}
                <em>{s.acc}</em>
              </div>
              <div className="hstat-l">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
