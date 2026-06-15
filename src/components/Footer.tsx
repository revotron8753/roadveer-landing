import Image from "next/image";

const PLATFORM = [
  { href: "#rtr", label: "RTR Volunteer Network" },
  { href: "#vendor", label: "Vendor Registration" },
  { href: "#economy", label: "Highway Economy" },
  { href: "#emergency", label: "Emergency Response" },
  { href: "#", label: "Download App" },
];

const SAFETY = [
  { href: "https://nhai.gov.in", label: "NHAI" },
  { href: "https://morth.gov.in", label: "MoRTH" },
  { href: "https://irad.morth.nic.in", label: "iRAD / e-DAR" },
  { href: "https://roadsafety.morth.nic.in", label: "Road Safety Portal" },
  { href: "https://savelifefoundation.org", label: "Save Life Foundation" },
];

const ORG = [
  { href: "#about", label: "About Roadveer" },
  { href: "#farukh", label: "Founder Story" },
  { href: "#contact", label: "Partner with Us" },
  { href: "#contact", label: "CSR & Investment" },
  { href: "mailto:info@roadveer.com", label: "info@roadveer.com" },
];

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  const isExternal = (h: string) => h.startsWith("http");
  return (
    <div className="foot-col">
      <h4>{title}</h4>
      {links.map((l) => (
        <a
          key={l.href + l.label}
          href={l.href}
          {...(isExternal(l.href)
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-in">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="foot-logo">
              <Image
                src="/logo.png"
                alt="Tiger Roadveer"
                width={1891}
                height={832}
                className="foot-logo-img"
              />
            </div>
            <p>
              Driver Ka Saathi · Highway Ka Dost. Building for those who keep
              India moving.
            </p>
            <div className="foot-social">
              <a
                href="https://www.linkedin.com/in/farukh-yelapure-6540b18a"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                In
              </a>
              <a href="#" title="WhatsApp">
                Wa
              </a>
              <a href="#" title="YouTube">
                Yt
              </a>
              <a href="#" title="Facebook">
                Fb
              </a>
            </div>
          </div>
          <FooterCol title="Platform" links={PLATFORM} />
          <FooterCol title="Road Safety" links={SAFETY} />
          <FooterCol title="Organisation" links={ORG} />
        </div>
        <div className="foot-bottom">
          <p>
            © 2025 Roadveer. Roadveer Road Safety &amp; Welfare Foundation
            (Section 8 Company, MCA Registered).
          </p>
          <div className="foot-natl">
            <Image
              src="/indian-flag.png"
              alt="Flag of India"
              width={1536}
              height={1024}
              className="foot-flag"
            />
            <p>
              Kolhapur, Maharashtra · All India Operations · Aligned with MoRTH
              &amp; NHAI National Road Safety Mission
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
