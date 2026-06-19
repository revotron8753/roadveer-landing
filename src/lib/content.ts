// ─────────────────────────────────────────────────────────────────────────
// Tiger Roadveer — bilingual content (English + Marathi)
//
// All user-facing copy lives here so it can be reviewed in one place.
// `en` defines the shape; `mr` must match it exactly (TypeScript enforces this).
//
// Convention: brand names, person names, acronyms (MoRTH, NHAI, RTR, FASTag…),
// numbers and URLs are kept identical in both languages. Only descriptive
// prose is translated. The Marathi copy is a first draft — please have a
// native speaker review before launch.
// ─────────────────────────────────────────────────────────────────────────

const en = {
  nav: {
    links: [
      { href: "#about", label: "Mission", mobile: "Mission" },
      { href: "#cofounder", label: "Leadership", mobile: "Co-Founder" },
      { href: "#farukh", label: "Founder", mobile: "Founder Story" },
      { href: "#rtr", label: "RTR", mobile: "RTR Network" },
      { href: "#maharashtra", label: "Maharashtra", mobile: "Maharashtra Strategy" },
      { href: "#economy", label: "Economy", mobile: "Highway Economy" },
      { href: "#emergency", label: "Emergency", mobile: "Emergency Response" },
      { href: "#nhai", label: "Safety", mobile: "Road Safety" },
      { href: "#vendor", label: "Vendors", mobile: "Vendor Network" },
    ],
    register: "Register",
    joinRtr: "Join RTR",
    registerContact: "Register / Contact",
    homeAria: "Tiger Roadveer — home",
    logoAlt: "Tiger Roadveer",
  },

  hero: {
    eyebrow: "A National Mission · India's Highway Economy Platform",
    h1: { pre: "Building for those who keep India ", em: "moving.", post: "" },
    sub: "Driver Ka Saathi · Highway Ka Dost",
    quote: "“If the truck moves, someone's family reaches home.”",
    lede:
      "A platform for drivers, volunteers, vendors and communities across every national highway in the nation.",
    becomeRtr: "Become an RTR",
    registerVendor: "Register as Vendor",
    downloadApp: "Download App",
    figAlt:
      "Farukh Yelapure with Hon. Shri Nitin Gadkari Ji, Minister of Road Transport & Highways",
    figTag: "Ministry of Road Transport & Highways",
    cap: {
      name1: "Farukh Yelapure",
      mid: ", Founder — Tiger Roadveer, with ",
      name2: "Hon. Shri Nitin Gadkari Ji",
      tail: "— Minister of Road Transport & Highways, Govt. of India",
    },
    stats: [
      { num: "50", acc: "L+", label: "Drivers" },
      { num: "5", acc: "L", label: "RTR Target" },
      { num: "2", acc: "L", label: "Vendors" },
      { num: "1", acc: "K+", label: "Ambulances" },
    ],
  },

  govt: {
    flagAlt: "Flag of India",
    leadStrong: "A National Mission",
    leadSpan:
      "In alignment with the Government of India's National Road Safety Mission · Towards Viksit Bharat 2047",
    alignedWith: "Aligned With",
    pills: [
      { href: "https://morth.gov.in", label: "MoRTH" },
      { href: "https://nhai.gov.in", label: "NHAI" },
      { href: "https://roadsafety.morth.nic.in", label: "Road Safety Portal" },
      { href: "https://irad.morth.nic.in", label: "iRAD" },
      {
        href: "https://play.google.com/store/apps/details?id=com.nhai.rajmargyatra",
        label: "Rajmargyatra",
      },
      { href: "https://mybharat.gov.in", label: "MYBharat" },
    ],
  },

  about: {
    imgAlt: "Tiger Roadveer National Mission",
    quoteP:
      "No driver should feel alone on the road. Tiger Roadveer is not just an app — it is a mission.",
    quoteCite: "Farukh Yelapure, Founder",
    idx: "01 — Mission",
    eyebrow: "Driver-First Ecosystem",
    title: "Building India's driver-first ecosystem",
    lede:
      "Truck drivers are among India's most important yet least supported communities. They move food, medicines, industry and livelihoods — but often travel without reliable access to support, health services, emergency assistance, financial access, or even recognition.",
    mission: [
      "Driver Safety & Highway Support",
      "Emergency & Ambulance Access",
      "Health & Wellness Services",
      "Verified Service Networks",
      "Highway Community Support",
      "Financial Inclusion",
      "Volunteer & Welfare Networks",
      "Technology with Human Empathy",
    ],
    belief: {
      pre: "Because ",
      strong: "behind every truck is a person.",
      post: " Behind every person is a family. And behind every journey is a dream.",
    },
  },

  cofounder: {
    photoAlt: "Shri Tanaji Bhau Jadhav — Co-Founder, Tiger Roadveer",
    name: "Shri Tanaji Bhau Jadhav",
    role: "Co-Founder — Community Leadership",
    sub: "Tiger Group Leader · Samaj Sevak · Philanthropist",
    tags: [
      "Volunteer Mobilisation",
      "Public Trust",
      "Emergency Support",
      "Driver Welfare",
    ],
    idx: "02 — Co-Founder",
    eyebrow: "Community Leadership · Maharashtra",
    title: {
      pre: "Turning Tiger Roadveer from an app into a ",
      em: "movement.",
      post: "",
    },
    lede:
      "Positioned ahead of the founder across Tiger Roadveer's Maharashtra-facing mission — because public mobilisation, grassroots credibility and community trust are what turn an app into a movement on the ground.",
    rows: [
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
        k: "Tiger Roadveer Role",
        v: "Converts Tiger Roadveer from an app into a movement — with ground trust and community participation",
      },
      {
        k: "Mission Value",
        v: "Maharashtra mobilisation, RTR network creation, emergency support, driver welfare and public visibility",
      },
    ],
    quote:
      "A welfare-first, community-first leadership role. His strength is not only influence, but the ability to activate local volunteers, social networks, emergency support, ambulance awareness, district-level participation and driver welfare campaigns.",
  },

  founder: {
    name: "Farukh Yelapure",
    avatarAria: "Farukh Yelapure",
    role: "Founder — Tiger Roadveer",
    sub: "Chapter President, CIMSME Kolhapur · Shivaji University",
    tags: [
      "Tiger Roadveer · Jun 2025–Present",
      "Earth Work Specialist · M D Yelapure",
      "Pune District, Maharashtra",
      "Earthmoving & Mining",
      "Road & Infrastructure",
      "CIMSME Chapter President",
    ],
    idx: "03 — Founder's Story",
    title: "I did not grow up dreaming of building a technology company.",
    pullquote: {
      pre: "I grew up watching service. My father worked as a mechanic in Maharashtra. On the Pune–Kolhapur highway, I watched him repair vehicles with limited resources and one simple belief: ",
      em: "“If the truck moves, someone's family reaches home.”",
    },
    storyP1:
      "I realised truck drivers are among India's most important yet least supported communities. They move food, medicines, industry and livelihoods — but often travel without reliable access to support, health services, emergency assistance, financial access, or even recognition.",
    storyP2:
      "My years in earthmoving, mining, road works, site development and project execution across India — through our family-led infrastructure business M D Yelapure — gave me first-hand understanding of what happens on India's highways. What the driver needs. What the system lacks.",
    storyP3: {
      strong: "Tiger Roadveer was born from that experience.",
      post: " Not from a boardroom. From the road.",
    },
    ecoTitle: "What Tiger Roadveer Builds Together",
    eco: [
      "Driver Safety & Highway Support",
      "Emergency & Ambulance Access",
      "Health & Wellness Services",
      "Verified Service Networks",
      "Financial Inclusion",
      "Volunteer & Welfare Networks",
      "Technology with Human Empathy",
      "Highway Community Support",
    ],
    closing: {
      normal:
        "Join us. Guide us. Partner with us. Volunteer with us. Help us create real impact. ",
      strong: "Building for those who keep India moving.",
    },
    ctaPartner: "Partner with Tiger Roadveer",
    ctaRtr: "Become an RTR",
  },

  rtr: {
    idx: "04 — RTR Network",
    eyebrow: "Roadveer Tiger Rakshaks",
    title: "Join India's largest highway volunteer network",
    lede:
      "RTRs are the backbone of the Tiger Roadveer mission — earning, serving and leading across Maharashtra's highways and beyond.",
    benefits: [
      { title: "Kamai", sub: "100+ earning opportunities" },
      { title: "Suraksha", sub: "Emergency response training" },
      { title: "Seva", sub: "Driver welfare & community" },
      { title: "Samman", sub: "Recognition & leadership" },
      { title: "Digital Tools", sub: "App, training & reporting" },
      { title: "Emergency Network", sub: "Ambulance & golden hour" },
    ],
    registerRtr: "Register as RTR",
    panelNum: "1,00,000",
    panelNumL: "RTR Volunteers · Maharashtra Target",
    panelDesc:
      "One Taluka. One District. One state at a time. Under the leadership of Shri Tanaji (Bhau) Jadhav — Maharashtra's foremost community leader.",
    steps: [
      "Register on MYBharat / Tiger Roadveer App",
      "One-week training: First Aid & Road Safety",
      "Join your Taluka RTR WhatsApp Group",
      "Start serving, earning & leading",
    ],
    certLabel: "Volunteer Certification Levels",
    certs: ["Bronze", "Silver", "Gold", "Platinum"],
    becomeToday: "Become RTR Today",
  },

  maharashtra: {
    idx: "05 — Maharashtra Strategy",
    eyebrow: "State-First Model",
    title: { pre: "Maharashtra first. ", em: "Then the nation.", post: "" },
    lede:
      "Tiger Roadveer proves its model on the ground in Maharashtra — one taluka, one district at a time — before scaling across India. This is where community trust, volunteer mobilisation and government alignment come together first, under the leadership of Co-Founder Shri Tanaji Bhau Jadhav.",
    stages: [
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
    ],
    cardTag: "Strategic Vehicle",
    cardTitle: "MHRCDC",
    cardSub: "Maharashtra Highway, Road & Community Development Council",
    cardDesc:
      "The state-level coordination body driving Tiger Roadveer's Maharashtra rollout — RTR networks, district participation, emergency response and driver-welfare delivery on the ground.",
    stats: [
      { n: "36", t: "Districts" },
      { n: "358", t: "Talukas" },
      { n: "1,00,000", t: "RTR Target" },
      { n: "Tiger Group", t: "Ground Network" },
    ],
  },

  economy: {
    idx: "06 — Highway Economy",
    title: { pre: "Six pillars of India's ", em: "highway economy", post: "" },
    lede:
      "Every participant in the Tiger Roadveer ecosystem can earn. From drivers to mechanics, RTR volunteers to logistics providers — these pillars turn the national highway into a living economy.",
    pillars: [
      {
        name: "Driver Economy",
        desc: "FASTag, insurance, health access, credit and 100+ earning streams for every driver on the highway.",
      },
      {
        name: "Highway Economy",
        desc: "A single connected marketplace across every national highway — vendors, logistics, services and welfare.",
      },
      {
        name: "Hero Product",
        desc: "The Tiger Roadveer app — the flagship platform that powers the entire highway ecosystem end to end.",
      },
      {
        name: "Service Providers",
        desc: "Verified mechanics, dhabas, tyre shops, towing and roadside services earning through driver traffic.",
      },
      {
        name: "Electric",
        desc: "EV charging, e-mobility, CNG and Bio-CNG green-energy infrastructure for a clean highway future.",
      },
      {
        name: "Gadi",
        desc: "Vehicle services for every gadi — repair, fitment, towing, fitness, insurance and resale.",
      },
    ],
    subhead: "The economy in detail",
    cards: [
      {
        name: "Driver Economy",
        desc: "FASTag, insurance, health access, financial services and earning opportunities for drivers on national highways.",
        tags: ["FASTag", "Insurance", "Health Access", "Financial Services"],
      },
      {
        name: "Vendor Economy",
        desc: "Certified mechanics, tyre shops, dhabas, fuel pumps and service providers get verified listings, driver traffic and digital payments.",
        tags: ["Mechanics", "Tyre Shops", "Dhabas", "Fuel"],
      },
      {
        name: "Financial Economy",
        desc: "Insurance distribution, microfinance access, FASTag services and utility bill payments through the RTR volunteer network.",
        tags: ["Insurance", "Microfinance", "Utilities", "Payments"],
      },
      {
        name: "Logistics Economy",
        desc: "Freight coordination, hamal networks, towing operators and logistics providers connected through a single platform.",
        tags: ["Freight", "Hamal", "Towing", "Logistics"],
      },
      {
        name: "Emergency Economy",
        desc: "1,000+ ambulances, doctors, lawyers and emergency responders earning through the Tiger Roadveer emergency response network.",
        tags: ["Ambulances", "Doctors", "Lawyers", "Emergency"],
      },
      {
        name: "Clean Energy Economy",
        desc: "EV charging, CNG, Bio-CNG and green logistics infrastructure creating a sustainable future for India's highway network.",
        tags: ["EV Charging", "CNG", "Bio-CNG", "Green Logistics"],
      },
    ],
    visionTitle: { pre: "2030 ", em: "Vision", post: "" },
    visionDesc:
      "India's leading Highway Economy Platform connecting every driver, vendor, ambulance and community on every national highway.",
    vision: [
      { n: "50,00,000+", t: "Drivers Empowered" },
      { n: "5,00,000+", t: "RTR Volunteers" },
      { n: "2,00,000+", t: "Verified Vendors" },
      { n: "1,46,000 km", t: "National Highways" },
      { n: "1,00,000+", t: "Blood Donors" },
      { n: "1,000+", t: "Ambulances" },
      { n: "250+", t: "Earning Streams" },
      { n: "5,000+", t: "Hospital Network" },
    ],
  },

  emergency: {
    idx: "07 — Emergency Response",
    eyebrow: "24 × 7 Emergency Response",
    title: { pre: "Golden hour. ", em: "Every time.", post: "" },
    helplineLbl: "NHAI National Highway Helpline (Rajmargyatra App)",
    cards: [
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
    ],
    flowEyebrow: "How Emergency Response Works",
    steps: [
      {
        title: "Incident Reported",
        desc: "Driver triggers SOS via Tiger Roadveer app or calls 1033 helpline",
      },
      {
        title: "RTR Alert",
        desc: "Nearest Roadveer Tiger Rakshak notified within 60 seconds",
      },
      {
        title: "Ambulance Dispatch",
        desc: "Closest registered ambulance dispatched from Tiger Roadveer network",
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
    ],
  },

  roadsafety: {
    idx: "08 — Road Safety",
    eyebrow: "Government Road Safety Ecosystem",
    title: "Under the Ministry of Road Transport & Highways",
    lede:
      "Tiger Roadveer operates in full alignment with India's national road safety mission. At its apex is MoRTH — and every authority, platform and programme below works within its mandate.",
    apexTag: "Apex Authority",
    apexTitle: "MoRTH",
    apexSub: "Ministry of Road Transport & Highways · Government of India",
    apexDesc:
      "The nodal ministry for all road transport and highways policy in India. It sets the national road-safety agenda and directs every body and programme that Tiger Roadveer works within.",
    apexLink: "morth.gov.in →",
    morthFacts: [
      "Apex ministry for all road transport & highways policy",
      "National target: 50% reduction in road fatalities",
      "1,46,000+ km of National Highways under its mandate",
      "Oversees NHAI, NHIDCL, IHMCL & all road-safety programmes",
    ],
    hierLabel: "Bodies, Platforms & Programmes under MoRTH",
    underMorth: [
      {
        href: "https://nhai.gov.in",
        name: "NHAI",
        org: "National Highways Authority of India",
        desc: "Apex body managing 1,46,560 km of National Highways — construction, maintenance, road safety and toll operations.",
        link: "nhai.gov.in",
      },
      {
        href: "https://nhidcl.com",
        name: "NHIDCL",
        org: "NH & Infra Development Corporation",
        desc: "MoRTH PSU developing national highways and strategic infrastructure in the border and north-eastern regions.",
        link: "nhidcl.com",
      },
      {
        href: "https://ihmcl.com",
        name: "IHMCL",
        org: "Indian Highways Management Co. Ltd.",
        desc: "NHAI company running FASTag, the electronic tolling programme and advanced highway traffic management systems.",
        link: "ihmcl.com",
      },
      {
        href: "https://roadsafety.morth.nic.in",
        name: "Road Safety Portal",
        org: "MoRTH National Road Safety",
        desc: "Central hub for road safety data, campaigns, NGO financial assistance (up to ₹5 lakh) and Sadak Suraksha Abhiyan.",
        link: "roadsafety.morth.nic.in",
      },
      {
        href: "https://irad.morth.nic.in",
        name: "iRAD / e-DAR",
        org: "Integrated Road Accident Database",
        desc: "National accident data platform — black-spot analysis, policy intervention and Golden Hour coordination.",
        link: "irad.morth.nic.in",
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.nhai.rajmargyatra",
        name: "Rajmargyatra App",
        org: "NHAI Official Highway App",
        desc: "All-in-one highway companion: FASTag, toll info, 1033 emergency helpline, over-speeding alerts and complaint redressal.",
        link: "Google Play",
      },
      {
        href: "https://nhai.gov.in",
        name: "Rajmarg Saathi (RPV)",
        org: "NHAI Route Patrol Vehicles 2024",
        desc: "Upgraded Route Patrolling Vehicles with high-visibility branding, dashboard cams and incident management.",
        link: "nhai.gov.in",
      },
      {
        href: "https://mybharat.gov.in",
        name: "Sadak Suraksha Mitra",
        org: "MoRTH + Ministry of Youth Affairs",
        desc: "Youth volunteer programme (18–28 yrs) across 100 districts via MYBharat — first aid, crash-scene coordination, audits.",
        link: "mybharat.gov.in",
      },
      {
        href: "https://morth.gov.in",
        name: "Sadak Suraksha Abhiyan",
        org: "MoRTH Annual Road Safety Campaign",
        desc: "National awareness campaign with telethon and state-level drives targeting the leading causes of road fatalities.",
        link: "morth.gov.in",
      },
    ],
    assocHead: "Associate Organisations & Research Partners",
    assoc: [
      {
        href: "https://savelifefoundation.org",
        name: "Save Life Foundation",
        url: "savelifefoundation.org",
      },
      {
        href: "https://ncsc.nic.in",
        name: "National Road Safety Council",
        url: "ncsc.nic.in",
      },
      {
        href: "https://iitmadras.ac.in",
        name: "IIT Madras — CoERS",
        url: "Centre of Excellence for Road Safety",
      },
      {
        href: "https://iiitd.ac.in",
        name: "IIIT Delhi",
        url: "AI for Road Signs (NHAI MoU)",
      },
      {
        href: "https://irfnet.ch",
        name: "IRF India Chapter",
        url: "International Road Federation",
      },
      { href: "https://pib.gov.in", name: "PIB — MoRTH Press", url: "pib.gov.in" },
    ],
  },

  vendor: {
    idx: "09 — Vendor Network",
    title: "Join 50,000 verified highway vendors",
    lede:
      "Get certified, attract drivers and earn more. Tiger Roadveer's Driver First Philosophy means verified vendors get direct access to millions of highway users.",
    cats: [
      "Mechanics",
      "Tyre Shops",
      "Dhabas",
      "Fuel Stations",
      "Towing Operators",
      "Parking Operators",
      "Doctors",
      "Lawyers",
      "FASTag Providers",
      "Insurance Services",
      "Ambulances",
      "Hamal Networks",
    ],
    journeyTitle: "Vendor Onboarding Journey",
    journey: [
      { label: "Register", sub: "Online form + basic documents" },
      { label: "Training", sub: "Driver First Philosophy & Digital Payments" },
      { label: "Verify", sub: "RTR field verification visit" },
      { label: "Certify", sub: "Bronze → Silver → Gold → Platinum" },
      { label: "Earn", sub: "Get driver traffic & revenue" },
    ],
    registerVendor: "Register as Vendor",
  },

  missionBand: {
    pre: "Behind every truck is a person. Behind every person is a family. ",
    em: "And behind every journey is a dream.",
    join: "Join the Mission",
  },

  contact: {
    idx: "10 — Get Involved",
    title: "Join the Tiger Roadveer movement",
    lede:
      "Whether you are a driver, volunteer, vendor, investor, CSR partner, hospital or government body — there is a place for you in the Tiger Roadveer ecosystem.",
    types: [
      { title: "Become RTR Volunteer", sub: "Earn, serve and lead on India's highways" },
      { title: "Register as Vendor", sub: "Get certified and reach 5L+ drivers" },
      { title: "CSR / Investor Partner", sub: "Fund India's highway safety mission" },
      { title: "Hospital / Ambulance", sub: "Join the emergency response network" },
      { title: "Government / NGO", sub: "Partner on road safety initiatives" },
    ],
  },

  form: {
    roles: [
      "RTR Volunteer (Roadveer Tiger Rakshak)",
      "Driver — Register on Platform",
      "Vendor — Mechanic / Tyre / Dhaba / Other",
      "Ambulance / Hospital Partner",
      "CSR / Corporate Partner",
      "Investor",
      "Government / NGO Partner",
      "Other",
    ],
    successTitle: "Dhanyavaad.",
    successPre: "Thank you",
    successPost:
      ". Your registration has been received — the Tiger Roadveer team will reach out within 24 hours.",
    registerAnother: "Register another",
    title: "Register with Tiger Roadveer",
    sub: "Fill in your details and we will get back within 24 hours.",
    fullName: "Full Name *",
    namePlaceholder: "Your name",
    mobile: "Mobile Number *",
    mobilePlaceholder: "+91",
    state: "State",
    statePlaceholder: "Maharashtra",
    district: "District / Taluka",
    districtPlaceholder: "Your district",
    joinAs: "I want to join as *",
    selectRole: "Select your role",
    message: "Message (Optional)",
    messagePlaceholder: "Tell us about yourself or your organisation...",
    submit: "Submit Registration",
  },

  footer: {
    logoAlt: "Tiger Roadveer",
    tagline:
      "Driver Ka Saathi · Highway Ka Dost. Building for those who keep India moving.",
    colPlatform: "Platform",
    colSafety: "Road Safety",
    colOrg: "Organisation",
    platform: [
      { href: "#rtr", label: "RTR Volunteer Network" },
      { href: "#vendor", label: "Vendor Registration" },
      { href: "#economy", label: "Highway Economy" },
      { href: "#emergency", label: "Emergency Response" },
      { href: "#", label: "Download App" },
    ],
    safety: [
      { href: "https://nhai.gov.in", label: "NHAI" },
      { href: "https://morth.gov.in", label: "MoRTH" },
      { href: "https://irad.morth.nic.in", label: "iRAD / e-DAR" },
      { href: "https://roadsafety.morth.nic.in", label: "Road Safety Portal" },
      { href: "https://savelifefoundation.org", label: "Save Life Foundation" },
    ],
    org: [
      { href: "#about", label: "About Tiger Roadveer" },
      { href: "#farukh", label: "Founder Story" },
      { href: "#contact", label: "Partner with Us" },
      { href: "#contact", label: "CSR & Investment" },
      { href: "mailto:info@roadveer.com", label: "info@roadveer.com" },
    ],
    copyright:
      "© 2025 Tiger Roadveer. Tiger Roadveer Road Safety & Welfare Foundation (Section 8 Company, MCA Registered).",
    flagAlt: "Flag of India",
    natl:
      "Kolhapur, Maharashtra · All India Operations · Aligned with MoRTH & NHAI National Road Safety Mission",
  },
};

export type Content = typeof en;

const mr: Content = {
  nav: {
    links: [
      { href: "#about", label: "मिशन", mobile: "मिशन" },
      { href: "#cofounder", label: "नेतृत्व", mobile: "सह-संस्थापक" },
      { href: "#farukh", label: "संस्थापक", mobile: "संस्थापकाची कहाणी" },
      { href: "#rtr", label: "RTR", mobile: "RTR नेटवर्क" },
      { href: "#maharashtra", label: "महाराष्ट्र", mobile: "महाराष्ट्र रणनीती" },
      { href: "#economy", label: "अर्थव्यवस्था", mobile: "हायवे अर्थव्यवस्था" },
      { href: "#emergency", label: "आपत्कालीन", mobile: "आपत्कालीन प्रतिसाद" },
      { href: "#nhai", label: "सुरक्षा", mobile: "रस्ता सुरक्षा" },
      { href: "#vendor", label: "विक्रेते", mobile: "विक्रेता नेटवर्क" },
    ],
    register: "नोंदणी करा",
    joinRtr: "RTR मध्ये सामील व्हा",
    registerContact: "नोंदणी / संपर्क",
    homeAria: "Tiger Roadveer — मुख्यपृष्ठ",
    logoAlt: "Tiger Roadveer",
  },

  hero: {
    eyebrow: "एक राष्ट्रीय मिशन · भारताचे हायवे अर्थव्यवस्था व्यासपीठ",
    h1: { pre: "भारताला ", em: "गतिमान", post: " ठेवणाऱ्यांसाठी घडवत आहोत." },
    sub: "ड्रायव्हरचा साथी · हायवेचा दोस्त",
    quote: "“ट्रक चालला, तर कुणाचं तरी कुटुंब घरी पोहोचतं.”",
    lede:
      "देशातील प्रत्येक राष्ट्रीय महामार्गावरील ड्रायव्हर, स्वयंसेवक, विक्रेते आणि समुदायांसाठीचे एक व्यासपीठ.",
    becomeRtr: "RTR बना",
    registerVendor: "विक्रेता म्हणून नोंदणी करा",
    downloadApp: "अ‍ॅप डाउनलोड करा",
    figAlt:
      "फारुख येलापुरे, मा. श्री नितीन गडकरी जी, रस्ते वाहतूक व महामार्ग मंत्री यांच्यासोबत",
    figTag: "रस्ते वाहतूक व महामार्ग मंत्रालय",
    cap: {
      name1: "Farukh Yelapure",
      mid: ", संस्थापक — Tiger Roadveer, यांच्यासोबत ",
      name2: "मा. श्री नितीन गडकरी जी",
      tail: "— रस्ते वाहतूक व महामार्ग मंत्री, भारत सरकार",
    },
    stats: [
      { num: "50", acc: "L+", label: "ड्रायव्हर्स" },
      { num: "5", acc: "L", label: "RTR लक्ष्य" },
      { num: "2", acc: "L", label: "विक्रेते" },
      { num: "1", acc: "K+", label: "रुग्णवाहिका" },
    ],
  },

  govt: {
    flagAlt: "भारताचा ध्वज",
    leadStrong: "एक राष्ट्रीय मिशन",
    leadSpan:
      "भारत सरकारच्या राष्ट्रीय रस्ता सुरक्षा मिशनशी संलग्न · विकसित भारत 2047 च्या दिशेने",
    alignedWith: "संलग्न",
    pills: [
      { href: "https://morth.gov.in", label: "MoRTH" },
      { href: "https://nhai.gov.in", label: "NHAI" },
      { href: "https://roadsafety.morth.nic.in", label: "रस्ता सुरक्षा पोर्टल" },
      { href: "https://irad.morth.nic.in", label: "iRAD" },
      {
        href: "https://play.google.com/store/apps/details?id=com.nhai.rajmargyatra",
        label: "Rajmargyatra",
      },
      { href: "https://mybharat.gov.in", label: "MYBharat" },
    ],
  },

  about: {
    imgAlt: "Tiger Roadveer राष्ट्रीय मिशन",
    quoteP:
      "रस्त्यावर कोणत्याही ड्रायव्हरला एकटं वाटू नये. Tiger Roadveer हे केवळ अ‍ॅप नाही — ते एक मिशन आहे.",
    quoteCite: "Farukh Yelapure, संस्थापक",
    idx: "01 — मिशन",
    eyebrow: "ड्रायव्हर-फर्स्ट इकोसिस्टम",
    title: "भारताची ड्रायव्हर-केंद्रित इकोसिस्टम घडवत आहोत",
    lede:
      "ट्रक ड्रायव्हर्स हे भारतातील सर्वांत महत्त्वाच्या पण सर्वांत कमी आधार मिळणाऱ्या समुदायांपैकी एक आहेत. ते अन्न, औषधं, उद्योग आणि उपजीविका वाहून नेतात — पण अनेकदा आधार, आरोग्य सेवा, आपत्कालीन मदत, आर्थिक सुविधा किंवा साधी ओळखही विश्वासार्हपणे न मिळता प्रवास करतात.",
    mission: [
      "ड्रायव्हर सुरक्षा व महामार्ग सहाय्य",
      "आपत्कालीन व रुग्णवाहिका सुविधा",
      "आरोग्य व निरामय सेवा",
      "प्रमाणित सेवा नेटवर्क",
      "महामार्ग समुदाय सहाय्य",
      "आर्थिक समावेशन",
      "स्वयंसेवक व कल्याण नेटवर्क",
      "मानवी संवेदनेसह तंत्रज्ञान",
    ],
    belief: {
      pre: "कारण ",
      strong: "प्रत्येक ट्रकमागे एक माणूस असतो.",
      post: " प्रत्येक माणसामागे एक कुटुंब असतं. आणि प्रत्येक प्रवासामागे एक स्वप्न असतं.",
    },
  },

  cofounder: {
    photoAlt: "श्री तानाजी भाऊ जाधव — सह-संस्थापक, Tiger Roadveer",
    name: "श्री तानाजी भाऊ जाधव",
    role: "सह-संस्थापक — समुदाय नेतृत्व",
    sub: "Tiger Group नेते · समाजसेवक · दानशूर",
    tags: ["स्वयंसेवक एकत्रीकरण", "जनविश्वास", "आपत्कालीन सहाय्य", "ड्रायव्हर कल्याण"],
    idx: "02 — सह-संस्थापक",
    eyebrow: "समुदाय नेतृत्व · महाराष्ट्र",
    title: {
      pre: "Tiger Roadveer ला अ‍ॅपमधून एका ",
      em: "चळवळीत",
      post: " रूपांतरित करत आहोत.",
    },
    lede:
      "Tiger Roadveer च्या महाराष्ट्रकेंद्रित मिशनमध्ये संस्थापकांच्याही पुढे स्थान — कारण सार्वजनिक एकत्रीकरण, तळागाळातील विश्वासार्हता आणि समुदाय विश्वास हेच अ‍ॅपला जमिनीवर चळवळीत रूपांतरित करतात.",
    rows: [
      {
        k: "पदनाम",
        v: "सह-संस्थापक — समुदाय नेतृत्व, महाराष्ट्र एकत्रीकरण व सामाजिक प्रभाव",
      },
      {
        k: "सार्वजनिक ओळख",
        v: "Tiger Group नेते, दानशूर, समाजसेवक आणि तळागाळातील समुदाय संघटक",
      },
      {
        k: "धोरणात्मक बळ",
        v: "स्वयंसेवक एकत्रीकरण, जनविश्वास, स्थानिक समन्वय, समाजसेवा आणि जिल्हा व तालुका पोहोच",
      },
      {
        k: "Tiger Roadveer भूमिका",
        v: "जमिनीवरील विश्वास व समुदाय सहभागातून Tiger Roadveer ला अ‍ॅपमधून चळवळीत रूपांतरित करतात",
      },
      {
        k: "मिशन मूल्य",
        v: "महाराष्ट्र एकत्रीकरण, RTR नेटवर्क निर्मिती, आपत्कालीन सहाय्य, ड्रायव्हर कल्याण आणि सार्वजनिक दृश्यमानता",
      },
    ],
    quote:
      "कल्याण-प्रथम, समुदाय-प्रथम नेतृत्वाची भूमिका. त्यांचं बळ केवळ प्रभाव नाही, तर स्थानिक स्वयंसेवक, सामाजिक नेटवर्क, आपत्कालीन सहाय्य, रुग्णवाहिका जागरूकता, जिल्हास्तरीय सहभाग आणि ड्रायव्हर कल्याण मोहिमा सक्रिय करण्याची क्षमता आहे.",
  },

  founder: {
    name: "Farukh Yelapure",
    avatarAria: "Farukh Yelapure",
    role: "संस्थापक — Tiger Roadveer",
    sub: "चॅप्टर अध्यक्ष, CIMSME कोल्हापूर · शिवाजी विद्यापीठ",
    tags: [
      "Tiger Roadveer · जून 2025–आजपर्यंत",
      "अर्थ वर्क स्पेशालिस्ट · M D Yelapure",
      "पुणे जिल्हा, महाराष्ट्र",
      "अर्थमूव्हिंग व मायनिंग",
      "रस्ते व पायाभूत सुविधा",
      "CIMSME चॅप्टर अध्यक्ष",
    ],
    idx: "03 — संस्थापकाची कहाणी",
    title: "तंत्रज्ञान कंपनी उभारण्याचं स्वप्न पाहत मी मोठा झालो नाही.",
    pullquote: {
      pre: "मी सेवा पाहत मोठा झालो. माझे वडील महाराष्ट्रात मेकॅनिक म्हणून काम करायचे. पुणे–कोल्हापूर महामार्गावर, मर्यादित साधनांनी आणि एका साध्या श्रद्धेनं ते वाहनं दुरुस्त करताना मी पाहिलं: ",
      em: "“ट्रक चालला, तर कुणाचं तरी कुटुंब घरी पोहोचतं.”",
    },
    storyP1:
      "मला जाणवलं की ट्रक ड्रायव्हर्स हे भारतातील सर्वांत महत्त्वाच्या पण सर्वांत कमी आधार मिळणाऱ्या समुदायांपैकी एक आहेत. ते अन्न, औषधं, उद्योग आणि उपजीविका वाहून नेतात — पण अनेकदा आधार, आरोग्य सेवा, आपत्कालीन मदत, आर्थिक सुविधा किंवा साधी ओळखही विश्वासार्हपणे न मिळता प्रवास करतात.",
    storyP2:
      "आमच्या कुटुंबाच्या M D Yelapure या पायाभूत सुविधा व्यवसायातून भारतभर अर्थमूव्हिंग, मायनिंग, रस्तेकाम, साइट डेव्हलपमेंट आणि प्रकल्प अंमलबजावणीतील माझ्या वर्षांनी मला भारताच्या महामार्गांवर काय घडतं याचं प्रत्यक्ष आकलन दिलं. ड्रायव्हरला काय हवं आहे. व्यवस्थेत काय कमी आहे.",
    storyP3: {
      strong: "त्या अनुभवातूनच Tiger Roadveer जन्माला आलं.",
      post: " बोर्डरूममधून नाही. रस्त्यावरून.",
    },
    ecoTitle: "Tiger Roadveer एकत्रितपणे काय घडवतं",
    eco: [
      "ड्रायव्हर सुरक्षा व महामार्ग सहाय्य",
      "आपत्कालीन व रुग्णवाहिका सुविधा",
      "आरोग्य व निरामय सेवा",
      "प्रमाणित सेवा नेटवर्क",
      "आर्थिक समावेशन",
      "स्वयंसेवक व कल्याण नेटवर्क",
      "मानवी संवेदनेसह तंत्रज्ञान",
      "महामार्ग समुदाय सहाय्य",
    ],
    closing: {
      normal:
        "आमच्यासोबत या. आम्हाला मार्गदर्शन करा. भागीदार व्हा. स्वयंसेवक व्हा. खरा प्रभाव निर्माण करण्यात मदत करा. ",
      strong: "भारताला गतिमान ठेवणाऱ्यांसाठी घडवत आहोत.",
    },
    ctaPartner: "Tiger Roadveer सोबत भागीदारी करा",
    ctaRtr: "RTR बना",
  },

  rtr: {
    idx: "04 — RTR नेटवर्क",
    eyebrow: "Roadveer Tiger Rakshaks",
    title: "भारतातील सर्वांत मोठ्या महामार्ग स्वयंसेवक नेटवर्कमध्ये सामील व्हा",
    lede:
      "RTRs हे Tiger Roadveer मिशनचा कणा आहेत — महाराष्ट्राच्या महामार्गांवर आणि त्यापलीकडे कमावत, सेवा करत आणि नेतृत्व करत.",
    benefits: [
      { title: "कमाई", sub: "100+ कमाईच्या संधी" },
      { title: "सुरक्षा", sub: "आपत्कालीन प्रतिसाद प्रशिक्षण" },
      { title: "सेवा", sub: "ड्रायव्हर कल्याण व समुदाय" },
      { title: "सन्मान", sub: "ओळख व नेतृत्व" },
      { title: "डिजिटल साधनं", sub: "अ‍ॅप, प्रशिक्षण व रिपोर्टिंग" },
      { title: "आपत्कालीन नेटवर्क", sub: "रुग्णवाहिका व गोल्डन अवर" },
    ],
    registerRtr: "RTR म्हणून नोंदणी करा",
    panelNum: "1,00,000",
    panelNumL: "RTR स्वयंसेवक · महाराष्ट्र लक्ष्य",
    panelDesc:
      "एक तालुका. एक जिल्हा. एका वेळी एक राज्य. महाराष्ट्रातील अग्रगण्य समुदाय नेते श्री तानाजी (भाऊ) जाधव यांच्या नेतृत्वाखाली.",
    steps: [
      "MYBharat / Tiger Roadveer अ‍ॅपवर नोंदणी करा",
      "एक आठवडा प्रशिक्षण: प्रथमोपचार व रस्ता सुरक्षा",
      "तुमच्या तालुका RTR व्हॉट्सअ‍ॅप ग्रुपमध्ये सामील व्हा",
      "सेवा, कमाई व नेतृत्व सुरू करा",
    ],
    certLabel: "स्वयंसेवक प्रमाणन स्तर",
    certs: ["ब्राँझ", "सिल्व्हर", "गोल्ड", "प्लॅटिनम"],
    becomeToday: "आजच RTR बना",
  },

  maharashtra: {
    idx: "05 — महाराष्ट्र रणनीती",
    eyebrow: "राज्य-प्रथम मॉडेल",
    title: { pre: "आधी महाराष्ट्र. ", em: "मग देश.", post: "" },
    lede:
      "भारतभर विस्तार करण्यापूर्वी Tiger Roadveer आपलं मॉडेल महाराष्ट्रात जमिनीवर सिद्ध करतं — एका वेळी एक तालुका, एक जिल्हा. इथेच समुदाय विश्वास, स्वयंसेवक एकत्रीकरण आणि शासकीय संलग्नता प्रथम एकत्र येतात, सह-संस्थापक श्री तानाजी भाऊ जाधव यांच्या नेतृत्वाखाली.",
    stages: [
      {
        stage: "तालुका",
        title: "तालुक्यापासून सुरुवात",
        desc: "RTRs ची नोंदणी करा, स्वयंसेवकांना प्रशिक्षण द्या आणि गाव-गावात पहिले व्हॉट्सअ‍ॅप ग्रुप सक्रिय करा.",
      },
      {
        stage: "जिल्हा",
        title: "जिल्ह्यापर्यंत विस्तार",
        desc: "जिल्ह्यातील प्रत्येक तालुक्यात रुग्णवाहिका, विक्रेते, रक्तदाते आणि कल्याणाचा समन्वय साधा.",
      },
      {
        stage: "राज्य",
        title: "संपूर्ण महाराष्ट्र",
        desc: "MHRCDC मार्फत समन्वयित, सर्व 36 जिल्ह्यांत 1,00,000 RTR स्वयंसेवक.",
      },
      {
        stage: "राष्ट्र",
        title: "भारतभर पुनरावृत्ती",
        desc: "सिद्ध झालेलं महाराष्ट्र मॉडेल प्रत्येक राज्यात व प्रत्येक राष्ट्रीय महामार्गावर न्या.",
      },
    ],
    cardTag: "धोरणात्मक माध्यम",
    cardTitle: "MHRCDC",
    cardSub: "Maharashtra Highway, Road & Community Development Council",
    cardDesc:
      "Tiger Roadveer च्या महाराष्ट्र अंमलबजावणीला चालना देणारी राज्यस्तरीय समन्वय संस्था — RTR नेटवर्क, जिल्हा सहभाग, आपत्कालीन प्रतिसाद आणि जमिनीवर ड्रायव्हर-कल्याण पोहोच.",
    stats: [
      { n: "36", t: "जिल्हे" },
      { n: "358", t: "तालुके" },
      { n: "1,00,000", t: "RTR लक्ष्य" },
      { n: "Tiger Group", t: "ग्राउंड नेटवर्क" },
    ],
  },

  economy: {
    idx: "06 — हायवे अर्थव्यवस्था",
    title: { pre: "भारताच्या ", em: "हायवे अर्थव्यवस्थेचे", post: " सहा आधारस्तंभ" },
    lede:
      "Tiger Roadveer इकोसिस्टममधील प्रत्येक सहभागी कमावू शकतो. ड्रायव्हरपासून मेकॅनिकपर्यंत, RTR स्वयंसेवकांपासून लॉजिस्टिक्स पुरवठादारांपर्यंत — हे आधारस्तंभ राष्ट्रीय महामार्गाला एका जिवंत अर्थव्यवस्थेत रूपांतरित करतात.",
    pillars: [
      {
        name: "ड्रायव्हर अर्थव्यवस्था",
        desc: "महामार्गावरील प्रत्येक ड्रायव्हरसाठी FASTag, विमा, आरोग्य सुविधा, कर्ज आणि 100+ कमाईचे स्रोत.",
      },
      {
        name: "हायवे अर्थव्यवस्था",
        desc: "प्रत्येक राष्ट्रीय महामार्गावर एकच जोडलेला बाजार — विक्रेते, लॉजिस्टिक्स, सेवा आणि कल्याण.",
      },
      {
        name: "हिरो प्रॉडक्ट",
        desc: "Tiger Roadveer अ‍ॅप — संपूर्ण महामार्ग इकोसिस्टमला सुरुवातीपासून शेवटपर्यंत चालना देणारं प्रमुख व्यासपीठ.",
      },
      {
        name: "सेवा पुरवठादार",
        desc: "प्रमाणित मेकॅनिक, ढाबे, टायर दुकानं, टोइंग आणि रस्त्याकडेच्या सेवा ड्रायव्हर वाहतुकीतून कमावतात.",
      },
      {
        name: "इलेक्ट्रिक",
        desc: "स्वच्छ महामार्ग भविष्यासाठी EV चार्जिंग, ई-मोबिलिटी, CNG आणि Bio-CNG हरित-ऊर्जा पायाभूत सुविधा.",
      },
      {
        name: "गाडी",
        desc: "प्रत्येक गाडीसाठी वाहन सेवा — दुरुस्ती, फिटमेंट, टोइंग, फिटनेस, विमा आणि पुनर्विक्री.",
      },
    ],
    subhead: "अर्थव्यवस्था सविस्तर",
    cards: [
      {
        name: "ड्रायव्हर अर्थव्यवस्था",
        desc: "राष्ट्रीय महामार्गांवरील ड्रायव्हर्ससाठी FASTag, विमा, आरोग्य सुविधा, आर्थिक सेवा आणि कमाईच्या संधी.",
        tags: ["FASTag", "विमा", "आरोग्य सुविधा", "आर्थिक सेवा"],
      },
      {
        name: "विक्रेता अर्थव्यवस्था",
        desc: "प्रमाणित मेकॅनिक, टायर दुकानं, ढाबे, इंधन पंप आणि सेवा पुरवठादारांना प्रमाणित लिस्टिंग, ड्रायव्हर वाहतूक आणि डिजिटल पेमेंट मिळतात.",
        tags: ["मेकॅनिक", "टायर दुकानं", "ढाबे", "इंधन"],
      },
      {
        name: "आर्थिक अर्थव्यवस्था",
        desc: "RTR स्वयंसेवक नेटवर्कमार्फत विमा वितरण, मायक्रोफायनान्स सुविधा, FASTag सेवा आणि युटिलिटी बिल भरणा.",
        tags: ["विमा", "मायक्रोफायनान्स", "युटिलिटीज", "पेमेंट्स"],
      },
      {
        name: "लॉजिस्टिक्स अर्थव्यवस्था",
        desc: "मालवाहतूक समन्वय, हमाल नेटवर्क, टोइंग ऑपरेटर आणि लॉजिस्टिक्स पुरवठादार एकाच व्यासपीठातून जोडलेले.",
        tags: ["मालवाहतूक", "हमाल", "टोइंग", "लॉजिस्टिक्स"],
      },
      {
        name: "आपत्कालीन अर्थव्यवस्था",
        desc: "Tiger Roadveer आपत्कालीन प्रतिसाद नेटवर्कमार्फत 1,000+ रुग्णवाहिका, डॉक्टर, वकील आणि आपत्कालीन प्रतिसादक कमावतात.",
        tags: ["रुग्णवाहिका", "डॉक्टर", "वकील", "आपत्कालीन"],
      },
      {
        name: "स्वच्छ ऊर्जा अर्थव्यवस्था",
        desc: "भारताच्या महामार्ग नेटवर्कसाठी शाश्वत भविष्य घडवणारी EV चार्जिंग, CNG, Bio-CNG आणि हरित लॉजिस्टिक्स पायाभूत सुविधा.",
        tags: ["EV चार्जिंग", "CNG", "Bio-CNG", "हरित लॉजिस्टिक्स"],
      },
    ],
    visionTitle: { pre: "2030 ", em: "दृष्टी", post: "" },
    visionDesc:
      "प्रत्येक राष्ट्रीय महामार्गावरील प्रत्येक ड्रायव्हर, विक्रेता, रुग्णवाहिका आणि समुदायाला जोडणारं भारताचं आघाडीचं हायवे अर्थव्यवस्था व्यासपीठ.",
    vision: [
      { n: "50,00,000+", t: "सक्षम ड्रायव्हर्स" },
      { n: "5,00,000+", t: "RTR स्वयंसेवक" },
      { n: "2,00,000+", t: "प्रमाणित विक्रेते" },
      { n: "1,46,000 km", t: "राष्ट्रीय महामार्ग" },
      { n: "1,00,000+", t: "रक्तदाते" },
      { n: "1,000+", t: "रुग्णवाहिका" },
      { n: "250+", t: "कमाईचे स्रोत" },
      { n: "5,000+", t: "रुग्णालय नेटवर्क" },
    ],
  },

  emergency: {
    idx: "07 — आपत्कालीन प्रतिसाद",
    eyebrow: "24 × 7 आपत्कालीन प्रतिसाद",
    title: { pre: "गोल्डन अवर. ", em: "प्रत्येक वेळी.", post: "" },
    helplineLbl: "NHAI राष्ट्रीय महामार्ग हेल्पलाइन (Rajmargyatra अ‍ॅप)",
    cards: [
      {
        title: "रुग्णवाहिका नेटवर्क",
        desc: "राष्ट्रीय महामार्ग नेटवर्कवर 1,000+ नोंदणीकृत रुग्णवाहिका",
      },
      {
        title: "रक्तदाता नेटवर्क",
        desc: "जिल्ह्यांमध्ये आपत्कालीन रक्तदाते म्हणून नोंदणीकृत 1,00,000+ RTR स्वयंसेवक",
      },
      {
        title: "रुग्णालय संदर्भ",
        desc: "राष्ट्रीय महामार्गांलगतच्या ट्रॉमा सेंटरशी थेट करार",
      },
      {
        title: "SOS डिस्पॅच",
        desc: "NHAI च्या Rajmargyatra व्यासपीठाशी एकात्मिक रिअल-टाइम SOS यंत्रणा",
      },
    ],
    flowEyebrow: "आपत्कालीन प्रतिसाद कसा चालतो",
    steps: [
      {
        title: "घटनेची नोंद",
        desc: "ड्रायव्हर Tiger Roadveer अ‍ॅपवरून SOS पाठवतो किंवा 1033 हेल्पलाइनवर कॉल करतो",
      },
      {
        title: "RTR सूचना",
        desc: "जवळच्या Roadveer Tiger Rakshak ला 60 सेकंदांत सूचना",
      },
      {
        title: "रुग्णवाहिका डिस्पॅच",
        desc: "Tiger Roadveer नेटवर्कमधून जवळची नोंदणीकृत रुग्णवाहिका रवाना",
      },
      {
        title: "गोल्डन अवर सहाय्य",
        desc: "रुग्णवाहिका येईपर्यंत RTR प्रथम प्रतिसाद देतो व परिस्थिती स्थिर ठेवतो",
      },
      {
        title: "रुग्णालय संदर्भ",
        desc: "पूर्वसूचनेसह रुग्णाला जवळच्या नेटवर्क ट्रॉमा सेंटरकडे मार्गस्थ",
      },
      {
        title: "iRAD एकात्मता",
        desc: "व्यवस्थात्मक सुधारणेसाठी घटना MoRTH च्या राष्ट्रीय अपघात डेटाबेसवर नोंद",
      },
    ],
  },

  roadsafety: {
    idx: "08 — रस्ता सुरक्षा",
    eyebrow: "शासकीय रस्ता सुरक्षा इकोसिस्टम",
    title: "रस्ते वाहतूक व महामार्ग मंत्रालयाच्या अंतर्गत",
    lede:
      "Tiger Roadveer भारताच्या राष्ट्रीय रस्ता सुरक्षा मिशनशी पूर्णपणे संलग्न राहून कार्य करतं. त्याच्या शिखरस्थानी MoRTH आहे — आणि खालील प्रत्येक प्राधिकरण, व्यासपीठ व कार्यक्रम त्याच्या कार्यकक्षेत काम करतो.",
    apexTag: "सर्वोच्च प्राधिकरण",
    apexTitle: "MoRTH",
    apexSub: "रस्ते वाहतूक व महामार्ग मंत्रालय · भारत सरकार",
    apexDesc:
      "भारतातील सर्व रस्ते वाहतूक व महामार्ग धोरणाचं नोडल मंत्रालय. ते राष्ट्रीय रस्ता-सुरक्षा कार्यक्रम ठरवतं आणि Tiger Roadveer ज्या अंतर्गत काम करतं अशा प्रत्येक संस्थेला व कार्यक्रमाला दिशा देतं.",
    apexLink: "morth.gov.in →",
    morthFacts: [
      "सर्व रस्ते वाहतूक व महामार्ग धोरणाचं सर्वोच्च मंत्रालय",
      "राष्ट्रीय लक्ष्य: रस्ते मृत्यूंमध्ये 50% घट",
      "कार्यकक्षेत 1,46,000+ km राष्ट्रीय महामार्ग",
      "NHAI, NHIDCL, IHMCL व सर्व रस्ता-सुरक्षा कार्यक्रमांवर देखरेख",
    ],
    hierLabel: "MoRTH अंतर्गत संस्था, व्यासपीठं व कार्यक्रम",
    underMorth: [
      {
        href: "https://nhai.gov.in",
        name: "NHAI",
        org: "National Highways Authority of India",
        desc: "1,46,560 km राष्ट्रीय महामार्गांचं व्यवस्थापन करणारी सर्वोच्च संस्था — बांधकाम, देखभाल, रस्ता सुरक्षा आणि टोल कामकाज.",
        link: "nhai.gov.in",
      },
      {
        href: "https://nhidcl.com",
        name: "NHIDCL",
        org: "NH & Infra Development Corporation",
        desc: "सीमावर्ती व ईशान्येकडील भागांत राष्ट्रीय महामार्ग व धोरणात्मक पायाभूत सुविधा विकसित करणारी MoRTH ची PSU.",
        link: "nhidcl.com",
      },
      {
        href: "https://ihmcl.com",
        name: "IHMCL",
        org: "Indian Highways Management Co. Ltd.",
        desc: "FASTag, इलेक्ट्रॉनिक टोलिंग कार्यक्रम आणि प्रगत महामार्ग वाहतूक व्यवस्थापन यंत्रणा चालवणारी NHAI कंपनी.",
        link: "ihmcl.com",
      },
      {
        href: "https://roadsafety.morth.nic.in",
        name: "Road Safety Portal",
        org: "MoRTH National Road Safety",
        desc: "रस्ता सुरक्षा डेटा, मोहिमा, NGO आर्थिक सहाय्य (₹5 लाखांपर्यंत) आणि सडक सुरक्षा अभियानाचं केंद्र.",
        link: "roadsafety.morth.nic.in",
      },
      {
        href: "https://irad.morth.nic.in",
        name: "iRAD / e-DAR",
        org: "Integrated Road Accident Database",
        desc: "राष्ट्रीय अपघात डेटा व्यासपीठ — ब्लॅक-स्पॉट विश्लेषण, धोरणात्मक हस्तक्षेप आणि गोल्डन अवर समन्वय.",
        link: "irad.morth.nic.in",
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.nhai.rajmargyatra",
        name: "Rajmargyatra App",
        org: "NHAI Official Highway App",
        desc: "सर्वसमावेशक महामार्ग सोबती: FASTag, टोल माहिती, 1033 आपत्कालीन हेल्पलाइन, ओव्हर-स्पीडिंग अलर्ट आणि तक्रार निवारण.",
        link: "Google Play",
      },
      {
        href: "https://nhai.gov.in",
        name: "Rajmarg Saathi (RPV)",
        org: "NHAI Route Patrol Vehicles 2024",
        desc: "उच्च-दृश्यमानता ब्रँडिंग, डॅशबोर्ड कॅम आणि घटना व्यवस्थापनासह सुधारित मार्ग गस्ती वाहनं.",
        link: "nhai.gov.in",
      },
      {
        href: "https://mybharat.gov.in",
        name: "Sadak Suraksha Mitra",
        org: "MoRTH + Ministry of Youth Affairs",
        desc: "MYBharat मार्फत 100 जिल्ह्यांत युवा स्वयंसेवक कार्यक्रम (18–28 वर्षे) — प्रथमोपचार, अपघातस्थळ समन्वय, ऑडिट.",
        link: "mybharat.gov.in",
      },
      {
        href: "https://morth.gov.in",
        name: "Sadak Suraksha Abhiyan",
        org: "MoRTH Annual Road Safety Campaign",
        desc: "रस्ते मृत्यूंच्या प्रमुख कारणांना लक्ष्य करणारी टेलिथॉन व राज्यस्तरीय मोहिमांसह राष्ट्रीय जनजागृती मोहीम.",
        link: "morth.gov.in",
      },
    ],
    assocHead: "सहयोगी संस्था व संशोधन भागीदार",
    assoc: [
      {
        href: "https://savelifefoundation.org",
        name: "Save Life Foundation",
        url: "savelifefoundation.org",
      },
      {
        href: "https://ncsc.nic.in",
        name: "National Road Safety Council",
        url: "ncsc.nic.in",
      },
      {
        href: "https://iitmadras.ac.in",
        name: "IIT Madras — CoERS",
        url: "Centre of Excellence for Road Safety",
      },
      {
        href: "https://iiitd.ac.in",
        name: "IIIT Delhi",
        url: "AI for Road Signs (NHAI MoU)",
      },
      {
        href: "https://irfnet.ch",
        name: "IRF India Chapter",
        url: "International Road Federation",
      },
      { href: "https://pib.gov.in", name: "PIB — MoRTH Press", url: "pib.gov.in" },
    ],
  },

  vendor: {
    idx: "09 — विक्रेता नेटवर्क",
    title: "50,000 प्रमाणित महामार्ग विक्रेत्यांमध्ये सामील व्हा",
    lede:
      "प्रमाणित व्हा, ड्रायव्हर्स आकर्षित करा आणि अधिक कमवा. Tiger Roadveer च्या ड्रायव्हर फर्स्ट तत्त्वज्ञानामुळे प्रमाणित विक्रेत्यांना लाखो महामार्ग वापरकर्त्यांपर्यंत थेट पोहोच मिळते.",
    cats: [
      "मेकॅनिक",
      "टायर दुकानं",
      "ढाबे",
      "इंधन स्टेशन",
      "टोइंग ऑपरेटर",
      "पार्किंग ऑपरेटर",
      "डॉक्टर",
      "वकील",
      "FASTag पुरवठादार",
      "विमा सेवा",
      "रुग्णवाहिका",
      "हमाल नेटवर्क",
    ],
    journeyTitle: "विक्रेता ऑनबोर्डिंग प्रवास",
    journey: [
      { label: "नोंदणी", sub: "ऑनलाइन फॉर्म + मूलभूत कागदपत्रं" },
      { label: "प्रशिक्षण", sub: "ड्रायव्हर फर्स्ट तत्त्वज्ञान व डिजिटल पेमेंट" },
      { label: "पडताळणी", sub: "RTR क्षेत्रीय पडताळणी भेट" },
      { label: "प्रमाणन", sub: "ब्राँझ → सिल्व्हर → गोल्ड → प्लॅटिनम" },
      { label: "कमाई", sub: "ड्रायव्हर वाहतूक व महसूल मिळवा" },
    ],
    registerVendor: "विक्रेता म्हणून नोंदणी करा",
  },

  missionBand: {
    pre: "प्रत्येक ट्रकमागे एक माणूस असतो. प्रत्येक माणसामागे एक कुटुंब असतं. ",
    em: "आणि प्रत्येक प्रवासामागे एक स्वप्न असतं.",
    join: "मिशनमध्ये सामील व्हा",
  },

  contact: {
    idx: "10 — सहभागी व्हा",
    title: "Tiger Roadveer चळवळीत सामील व्हा",
    lede:
      "तुम्ही ड्रायव्हर, स्वयंसेवक, विक्रेता, गुंतवणूकदार, CSR भागीदार, रुग्णालय किंवा शासकीय संस्था असाल — Tiger Roadveer इकोसिस्टममध्ये तुमच्यासाठी जागा आहे.",
    types: [
      { title: "RTR स्वयंसेवक बना", sub: "भारताच्या महामार्गांवर कमवा, सेवा करा व नेतृत्व करा" },
      { title: "विक्रेता म्हणून नोंदणी करा", sub: "प्रमाणित व्हा आणि 5L+ ड्रायव्हर्सपर्यंत पोहोचा" },
      { title: "CSR / गुंतवणूकदार भागीदार", sub: "भारताच्या महामार्ग सुरक्षा मिशनला निधी द्या" },
      { title: "रुग्णालय / रुग्णवाहिका", sub: "आपत्कालीन प्रतिसाद नेटवर्कमध्ये सामील व्हा" },
      { title: "शासन / NGO", sub: "रस्ता सुरक्षा उपक्रमांत भागीदार व्हा" },
    ],
  },

  form: {
    roles: [
      "RTR स्वयंसेवक (Roadveer Tiger Rakshak)",
      "ड्रायव्हर — व्यासपीठावर नोंदणी",
      "विक्रेता — मेकॅनिक / टायर / ढाबा / इतर",
      "रुग्णवाहिका / रुग्णालय भागीदार",
      "CSR / कॉर्पोरेट भागीदार",
      "गुंतवणूकदार",
      "शासन / NGO भागीदार",
      "इतर",
    ],
    successTitle: "धन्यवाद.",
    successPre: "धन्यवाद",
    successPost:
      ". तुमची नोंदणी प्राप्त झाली आहे — Tiger Roadveer टीम 24 तासांत संपर्क साधेल.",
    registerAnother: "पुन्हा नोंदणी करा",
    title: "Tiger Roadveer सोबत नोंदणी करा",
    sub: "तुमचे तपशील भरा, आम्ही 24 तासांत संपर्क साधू.",
    fullName: "पूर्ण नाव *",
    namePlaceholder: "तुमचं नाव",
    mobile: "मोबाइल नंबर *",
    mobilePlaceholder: "+91",
    state: "राज्य",
    statePlaceholder: "महाराष्ट्र",
    district: "जिल्हा / तालुका",
    districtPlaceholder: "तुमचा जिल्हा",
    joinAs: "मला यात सामील व्हायचं आहे *",
    selectRole: "तुमची भूमिका निवडा",
    message: "संदेश (ऐच्छिक)",
    messagePlaceholder: "तुमच्याबद्दल किंवा तुमच्या संस्थेबद्दल सांगा...",
    submit: "नोंदणी सबमिट करा",
  },

  footer: {
    logoAlt: "Tiger Roadveer",
    tagline:
      "ड्रायव्हरचा साथी · हायवेचा दोस्त. भारताला गतिमान ठेवणाऱ्यांसाठी घडवत आहोत.",
    colPlatform: "व्यासपीठ",
    colSafety: "रस्ता सुरक्षा",
    colOrg: "संस्था",
    platform: [
      { href: "#rtr", label: "RTR स्वयंसेवक नेटवर्क" },
      { href: "#vendor", label: "विक्रेता नोंदणी" },
      { href: "#economy", label: "हायवे अर्थव्यवस्था" },
      { href: "#emergency", label: "आपत्कालीन प्रतिसाद" },
      { href: "#", label: "अ‍ॅप डाउनलोड करा" },
    ],
    safety: [
      { href: "https://nhai.gov.in", label: "NHAI" },
      { href: "https://morth.gov.in", label: "MoRTH" },
      { href: "https://irad.morth.nic.in", label: "iRAD / e-DAR" },
      { href: "https://roadsafety.morth.nic.in", label: "रस्ता सुरक्षा पोर्टल" },
      { href: "https://savelifefoundation.org", label: "Save Life Foundation" },
    ],
    org: [
      { href: "#about", label: "Tiger Roadveer विषयी" },
      { href: "#farukh", label: "संस्थापकाची कहाणी" },
      { href: "#contact", label: "आमच्यासोबत भागीदारी" },
      { href: "#contact", label: "CSR व गुंतवणूक" },
      { href: "mailto:info@roadveer.com", label: "info@roadveer.com" },
    ],
    copyright:
      "© 2025 Tiger Roadveer. Tiger Roadveer Road Safety & Welfare Foundation (Section 8 कंपनी, MCA नोंदणीकृत).",
    flagAlt: "भारताचा ध्वज",
    natl:
      "कोल्हापूर, महाराष्ट्र · संपूर्ण भारत कार्यक्षेत्र · MoRTH व NHAI राष्ट्रीय रस्ता सुरक्षा मिशनशी संलग्न",
  },
};

export const CONTENT: { en: Content; mr: Content } = { en, mr };
