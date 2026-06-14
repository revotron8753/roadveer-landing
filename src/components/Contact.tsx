import RegisterForm from "./RegisterForm";

const TYPES = [
  {
    title: "Become RTR Volunteer",
    sub: "Earn, serve and lead on India's highways",
  },
  {
    title: "Register as Vendor",
    sub: "Get certified and reach 5L+ drivers",
  },
  {
    title: "CSR / Investor Partner",
    sub: "Fund India's highway safety mission",
  },
  {
    title: "Hospital / Ambulance",
    sub: "Join the emergency response network",
  },
  {
    title: "Government / NGO",
    sub: "Partner on road safety initiatives",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="on-ink">
      <div className="wrap">
        <div className="contact-in">
          <div className="contact-left">
            <span className="idx" style={{ color: "var(--muted-d)" }}>
              08 — Get Involved
            </span>
            <h2 className="stitle">Join the Roadveer movement</h2>
            <p className="slede">
              Whether you are a driver, volunteer, vendor, investor, CSR partner,
              hospital or government body &mdash; there is a place for you in the
              Roadveer ecosystem.
            </p>
            <ul className="ctypes">
              {TYPES.map((t, i) => (
                <li key={t.title}>
                  <a href="#contact">
                    <span className="ct-n">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="ct-title">{t.title}</span>
                      <br />
                      <span className="ct-sub">{t.sub}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
