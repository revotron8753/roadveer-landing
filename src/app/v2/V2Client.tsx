"use client";
/* eslint-disable @next/next/no-img-element */
import { Fragment, useEffect, useState } from "react";

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

/* ---------- language-independent visuals (icons / images / layout) ---------- */
const heroIcons = [I.wheel, I.shieldUser, I.badge, I.ambulance, I.hospital];
const ecoIcons = [I.road, I.people, I.pulse, I.spark];
const philStyle = [
  { ic: I.heart, cls: "g g1", icCls: "g" },
  { ic: I.chart, cls: "o1", icCls: "o" },
  { ic: I.shield, cls: "g2", icCls: "g" },
];
const stepIcons = [I.userPlus, I.book, I.heart, I.flag, I.star];
const impactIcons = [I.shieldUser, I.wheel, I.badge, I.ambulance, I.hospital, I.chart];
const founderPhotos = ["/tanaji-jadhav.jpeg", "/Farukh.jpeg"];
const missionImgs = [
  "/v2-roadsafety.png", "/v2-education.png", "/driver-first-ecosystem.png", "/v2-mechanic.jpg",
  "/v2-employment.png", "/v2-agriculture.png", "/v2-mobility.png", "/v2-community.png",
];

/* ---------- bilingual copy ---------- */
type Seg = { t: string; cls?: string };

const dict = {
  en: {
    nav: ["Mission", "Programs", "Impact", "Rakshak", "Partners", "Stories", "Contact"],
    becomeRakshak: "Become a Rakshak",
    hero: {
      h1sm: "Building India’s",
      h1a: "Highway Economy.",
      h1b: "One Community at a Time.",
      sub: [
        { t: "A people-powered movement empowering drivers, mechanics, farmers, women, youth and entrepreneurs through " },
        { t: "Seva", cls: "s" }, { t: ", " }, { t: "Kamai", cls: "k" },
        { t: " and " }, { t: "Suraksha", cls: "s" }, { t: "." },
      ] as Seg[],
      ctaPrimary: "Become a Tiger RoadVeer Rakshak",
      ctaSecondary: "Explore Our Mission",
    },
    heroStats: [
      { n: "50 Lakh+", l: "Drivers to be Connected" },
      { n: "5 Lakh", l: "Tiger RoadVeer Rakshaks" },
      { n: "2 Lakh", l: "Verified Partners" },
      { n: "1,000+", l: "Ambulances Network" },
      { n: "5,000+", l: "Hospitals Network" },
    ],
    eco: {
      eyebrow: "THE HIGHWAY ECONOMY",
      h2: "Highways Move More Than Vehicles. They Move Lives.",
      p1: "Highways connect livelihoods, businesses, farms, markets and millions of people who keep India moving.",
      p2: "We are building India’s most organised Highway Economy by connecting every stakeholder into one trusted ecosystem.",
      stats: [
        { n: "1,46,000+ km", l: "National Highways" },
        { n: "Millions", l: "Livelihoods Connected" },
        { n: "Thousands", l: "Daily Lives Impacted" },
        { n: "Endless", l: "Opportunities" },
      ],
    },
    vis: {
      eyebrow: "THE VISIONARIES BEHIND THE MOVEMENT",
      role: "Co-Founder",
      center: ["One Vision.", "One Mission.", "One Movement."],
    },
    founders: [
      {
        name: "Shri Tanaji Bhau Jadhav",
        paras: [
          "A dynamic organiser scaling this vision through technology, partnerships and people.",
          "Together, building a safer, more prosperous Highway Economy for India.",
        ],
      },
      {
        name: "Shri Farukh Yelapure",
        paras: [
          "A leader who has spent years on India’s highways understanding the challenges of drivers and communities.",
          "His vision: a structured highway movement of opportunity, dignity and safety.",
        ],
      },
    ],
    phil: {
      eyebrow: "OUR GUIDING PHILOSOPHY",
      cards: [
        { t: "SEVA", we: "We Serve", d: "Driver welfare, road safety, health awareness and emergency response through mobilised volunteers." },
        { t: "KAMAI", we: "We Empower", d: "Sustainable livelihoods through entrepreneurship, digital opportunities, MSME growth and skilling." },
        { t: "SURAKSHA", we: "We Protect", d: "Road safety, emergency preparedness, verified networks and insurance for safer highways." },
      ],
      note: "Every decision, campaign and activity strengthens at least one of these three pillars.",
    },
    emp: {
      h2: "WHO WE EMPOWER",
      p: "We empower every individual and institution who contributes to India’s Highway Economy.",
      list: [
        "Drivers & Fleet Owners", "Transport Workers",
        "Mechanics & Workshop Owners", "MSMEs & Vendors",
        "Farmers & Agri Producers", "Local Communities",
        "Women Entrepreneurs", "Informal Workers",
        "Youth & Students", "And many more",
      ],
    },
    mission: {
      h2: "OUR MISSION AREAS",
      areas: [
        { t: "Road Safety & Driver Welfare", s: "Safer drivers, safer highways." },
        { t: "Education & Future Skills", s: "Preparing youth for the future." },
        { t: "AI & Digital Empowerment", s: "Building digital skills for new opportunities." },
        { t: "Mechanic Modernisation", s: "Upgrading skills for modern vehicles." },
        { t: "Employment & Entrepreneurship", s: "New jobs. New businesses." },
        { t: "Agriculture & Rural Development", s: "Connecting farms to markets." },
        { t: "Clean Mobility & Sustainability", s: "Green highways. Clean future." },
        { t: "Community Resilience", s: "Stronger communities. Stronger India." },
      ],
    },
    rak: {
      h2: "BECOME A TIGER ROADVEER RAKSHAK",
      p: "A Rakshak is a community leader, volunteer, digital ambassador, safety ambassador and changemaker.",
      steps: [
        { b: "Join", s: "The Movement" },
        { b: "Learn", s: "New Skills" },
        { b: "Serve", s: "Your Community" },
        { b: "Lead", s: "With Impact" },
        { b: "Transform", s: "Lives" },
      ],
      cta: "Become a Rakshak Today",
      mhTitle: "MAHARASHTRA FIRST. THEN THE NATION.",
      mhP: "We are starting in Maharashtra to build a strong foundation and a scalable model for the entire country.",
      mhStats: [
        { b: "36", s: "Districts" },
        { b: "358", s: "Talukas" },
        { b: "1 Lakh", s: "Rakshaks (Phase 1)" },
      ],
    },
    partners: {
      eyebrow: "PARTNERS & CSR",
      h: "Together with partners, we create larger impact.",
      lbl: "Our Partners & Supporters",
      more: "& Many More Partners",
      viewAll: "View All Partners",
      ministryLbl: "UNDER THE MINISTRY OF ROAD TRANSPORT & HIGHWAYS",
      ministryP: "Our initiatives align with the vision of the Government of India towards safer roads, stronger communities and Viksit Bharat.",
      ministrySub: "Our work directly supports the mission to:",
      ministryList: [
        "Build safer national highways and reduce road accidents",
        "Uphold the dignity and welfare of drivers & transport workers",
        "Create skilling, livelihoods and rural market connectivity",
        "Advance a self-reliant, Viksit Bharat",
      ],
    },
    impact: {
      h2: "IMPACT DASHBOARD",
      sub: "Our progress. Our promise.",
      recruit: "Recruit Partners",
      stats: [
        { n: "1,00,000+", l: "Rakshaks" },
        { n: "50 Lakh+", l: "Drivers" },
        { n: "2 Lakh+", l: "Verified Partners" },
        { n: "1,000+", l: "Ambulances" },
        { n: "5,000+", l: "Hospitals" },
        { n: "250+", l: "Earning Opportunities" },
      ],
    },
    join: {
      h2: "JOIN THE TIGER ROADVEER MOVEMENT",
      p: "Whether you are a driver, youth, entrepreneur, volunteer, institution or organisation, your contribution can create safer roads, stronger communities and better livelihoods.",
      formT: "Become a Rakshak or Partner with Us",
      name: "Your Name",
      mobile: "Mobile Number",
      email: "Email Address",
      iam: "I am a",
      city: "City / District",
      message: "Message",
      select: "Select",
      roles: ["Driver", "Mechanic", "Farmer", "Youth / Student", "Entrepreneur", "Volunteer", "Partner / Institution"],
      cities: ["Mumbai", "Pune", "Nagpur", "Kolhapur", "Other"],
      submit: "Submit & Join the Movement",
    },
    footer: {
      copy: "© 2025 Tiger RoadVeer Welfare Foundation. All rights reserved.",
      made: ["Made with ", " for India’s Highway Economy"],
    },
  },

  mr: {
    nav: ["मिशन", "कार्यक्रम", "प्रभाव", "रक्षक", "भागीदार", "कथा", "संपर्क"],
    becomeRakshak: "रक्षक व्हा",
    hero: {
      h1sm: "भारताची",
      h1a: "हायवे अर्थव्यवस्था घडवत आहोत.",
      h1b: "एका वेळी एक समुदाय.",
      sub: [
        { t: "सेवा", cls: "s" }, { t: ", " }, { t: "कमाई", cls: "k" },
        { t: " आणि " }, { t: "सुरक्षा", cls: "s" },
        { t: " यांच्या माध्यमातून ड्रायव्हर, मेकॅनिक, शेतकरी, महिला, युवक आणि उद्योजकांना सक्षम करणारी लोकशक्ती चळवळ." },
      ] as Seg[],
      ctaPrimary: "टायगर रोडवीर रक्षक व्हा",
      ctaSecondary: "आमचे मिशन जाणून घ्या",
    },
    heroStats: [
      { n: "50 लाख+", l: "जोडले जाणारे ड्रायव्हर" },
      { n: "5 लाख", l: "टायगर रोडवीर रक्षक" },
      { n: "2 लाख", l: "सत्यापित भागीदार" },
      { n: "1,000+", l: "रुग्णवाहिका नेटवर्क" },
      { n: "5,000+", l: "रुग्णालय नेटवर्क" },
    ],
    eco: {
      eyebrow: "हायवे अर्थव्यवस्था",
      h2: "महामार्ग केवळ वाहनेच नव्हे, तर जीवन पुढे नेतात.",
      p1: "महामार्ग उपजीविका, व्यवसाय, शेती, बाजारपेठा आणि भारताला गतिमान ठेवणाऱ्या लाखो लोकांना जोडतात.",
      p2: "प्रत्येक घटकाला एका विश्वासार्ह परिसंस्थेत जोडून आम्ही भारताची सर्वात संघटित हायवे अर्थव्यवस्था घडवत आहोत.",
      stats: [
        { n: "1,46,000+ किमी", l: "राष्ट्रीय महामार्ग" },
        { n: "लाखो", l: "जोडलेली उपजीविका" },
        { n: "हजारो", l: "दररोज प्रभावित जीवन" },
        { n: "अमर्याद", l: "संधी" },
      ],
    },
    vis: {
      eyebrow: "चळवळीमागील द्रष्टे",
      role: "सह-संस्थापक",
      center: ["एक दृष्टी.", "एक मिशन.", "एक चळवळ."],
    },
    founders: [
      {
        name: "श्री तानाजी भाऊ जाधव",
        paras: [
          "तंत्रज्ञान, भागीदारी आणि लोकांच्या माध्यमातून हे स्वप्न विस्तारणारे कुशल संघटक.",
          "एकत्रितपणे, भारतासाठी अधिक सुरक्षित आणि समृद्ध हायवे अर्थव्यवस्था घडवत आहोत.",
        ],
      },
      {
        name: "श्री फारुख येलापुरे",
        paras: [
          "भारताच्या महामार्गांवर वर्षानुवर्षे राहून ड्रायव्हर आणि समुदायांच्या आव्हानांना समजून घेतलेले नेते.",
          "त्यांचे स्वप्न: संधी, प्रतिष्ठा आणि सुरक्षेची एक सुसंघटित महामार्ग चळवळ.",
        ],
      },
    ],
    phil: {
      eyebrow: "आमचे मार्गदर्शक तत्त्वज्ञान",
      cards: [
        { t: "सेवा", we: "आम्ही सेवा करतो", d: "स्वयंसेवकांच्या माध्यमातून ड्रायव्हर कल्याण, रस्ता सुरक्षा, आरोग्य जागरूकता आणि आपत्कालीन प्रतिसाद." },
        { t: "कमाई", we: "आम्ही सक्षम करतो", d: "उद्योजकता, डिजिटल संधी, एमएसएमई वाढ आणि कौशल्य विकासाद्वारे शाश्वत उपजीविका." },
        { t: "सुरक्षा", we: "आम्ही संरक्षण करतो", d: "सुरक्षित महामार्गांसाठी रस्ता सुरक्षा, आपत्कालीन सज्जता, सत्यापित नेटवर्क आणि विमा." },
      ],
      note: "प्रत्येक निर्णय, मोहीम आणि उपक्रम या तीन स्तंभांपैकी किमान एक बळकट करतो.",
    },
    emp: {
      h2: "आम्ही कोणाला सक्षम करतो",
      p: "भारताच्या हायवे अर्थव्यवस्थेत योगदान देणार्या प्रत्येक व्यक्ती आणि संस्थेला आम्ही सक्षम करतो.",
      list: [
        "ड्रायव्हर आणि फ्लीट मालक", "वाहतूक कामगार",
        "मेकॅनिक आणि वर्कशॉप मालक", "एमएसएमई आणि विक्रेते",
        "शेतकरी आणि कृषी उत्पादक", "स्थानिक समुदाय",
        "महिला उद्योजक", "असंघटित कामगार",
        "युवक आणि विद्यार्थी", "आणि बरेच काही",
      ],
    },
    mission: {
      h2: "आमची मिशन क्षेत्रे",
      areas: [
        { t: "रस्ता सुरक्षा आणि ड्रायव्हर कल्याण", s: "सुरक्षित ड्रायव्हर, सुरक्षित महामार्ग." },
        { t: "शिक्षण आणि भविष्यातील कौशल्ये", s: "युवकांना भविष्यासाठी तयार करणे." },
        { t: "एआय आणि डिजिटल सक्षमीकरण", s: "नवीन संधींसाठी डिजिटल कौशल्ये विकसित करणे." },
        { t: "मेकॅनिक आधुनिकीकरण", s: "आधुनिक वाहनांसाठी कौशल्य वृद्धी." },
        { t: "रोजगार आणि उद्योजकता", s: "नवीन नोकर्या. नवीन व्यवसाय." },
        { t: "शेती आणि ग्रामीण विकास", s: "शेतांना बाजारपेठेशी जोडणे." },
        { t: "स्वच्छ गतिशीलता आणि शाश्वतता", s: "हरित महामार्ग. स्वच्छ भविष्य." },
        { t: "समुदाय लवचिकता", s: "बळकट समुदाय. बळकट भारत." },
      ],
    },
    rak: {
      h2: "टायगर रोडवीर रक्षक व्हा",
      p: "रक्षक हा समुदाय नेता, स्वयंसेवक, डिजिटल दूत, सुरक्षा दूत आणि परिवर्तन घडवणारा असतो.",
      steps: [
        { b: "सामील व्हा", s: "चळवळीत" },
        { b: "शिका", s: "नवीन कौशल्ये" },
        { b: "सेवा करा", s: "आपल्या समुदायाची" },
        { b: "नेतृत्व करा", s: "प्रभावाने" },
        { b: "परिवर्तन करा", s: "जीवनाचे" },
      ],
      cta: "आजच रक्षक व्हा",
      mhTitle: "आधी महाराष्ट्र. मग संपूर्ण देश.",
      mhP: "संपूर्ण देशासाठी एक भक्कम पाया आणि विस्तारक्षम मॉडेल तयार करण्यासाठी आम्ही महाराष्ट्रापासून सुरुवात करत आहोत.",
      mhStats: [
        { b: "36", s: "जिल्हे" },
        { b: "358", s: "तालुके" },
        { b: "1 लाख", s: "रक्षक (टप्पा 1)" },
      ],
    },
    partners: {
      eyebrow: "भागीदार आणि सीएसआर",
      h: "भागीदारांसह, आम्ही अधिक मोठा प्रभाव निर्माण करतो.",
      lbl: "आमचे भागीदार आणि समर्थक",
      more: "आणि अनेक भागीदार",
      viewAll: "सर्व भागीदार पहा",
      ministryLbl: "रस्ते वाहतूक आणि महामार्ग मंत्रालयाच्या अंतर्गत",
      ministryP: "आमचे उपक्रम सुरक्षित रस्ते, बळकट समुदाय आणि विकसित भारताच्या दिशेने भारत सरकारच्या दृष्टिकोनाशी सुसंगत आहेत.",
      ministrySub: "आमचे कार्य थेट या मिशनला पाठिंबा देते:",
      ministryList: [
        "सुरक्षित राष्ट्रीय महामार्ग तयार करणे आणि रस्ते अपघात कमी करणे",
        "ड्रायव्हर आणि वाहतूक कामगारांची प्रतिष्ठा आणि कल्याण जपणे",
        "कौशल्य, उपजीविका आणि ग्रामीण बाजार जोडणी निर्माण करणे",
        "आत्मनिर्भर, विकसित भारताला पुढे नेणे",
      ],
    },
    impact: {
      h2: "प्रभाव डॅशबोर्ड",
      sub: "आमची प्रगती. आमचे वचन.",
      recruit: "भागीदार जोडा",
      stats: [
        { n: "1,00,000+", l: "रक्षक" },
        { n: "50 लाख+", l: "ड्रायव्हर" },
        { n: "2 लाख+", l: "सत्यापित भागीदार" },
        { n: "1,000+", l: "रुग्णवाहिका" },
        { n: "5,000+", l: "रुग्णालये" },
        { n: "250+", l: "कमाईच्या संधी" },
      ],
    },
    join: {
      h2: "टायगर रोडवीर चळवळीत सामील व्हा",
      p: "तुम्ही ड्रायव्हर, युवक, उद्योजक, स्वयंसेवक, संस्था किंवा संघटना असाल, तुमचे योगदान सुरक्षित रस्ते, बळकट समुदाय आणि उत्तम उपजीविका निर्माण करू शकते.",
      formT: "रक्षक व्हा किंवा आमच्यासोबत भागीदार व्हा",
      name: "तुमचे नाव",
      mobile: "मोबाइल नंबर",
      email: "ईमेल पत्ता",
      iam: "मी आहे",
      city: "शहर / जिल्हा",
      message: "संदेश",
      select: "निवडा",
      roles: ["ड्रायव्हर", "मेकॅनिक", "शेतकरी", "युवक / विद्यार्थी", "उद्योजक", "स्वयंसेवक", "भागीदार / संस्था"],
      cities: ["मुंबई", "पुणे", "नागपूर", "कोल्हापूर", "इतर"],
      submit: "सबमिट करा आणि चळवळीत सामील व्हा",
    },
    footer: {
      copy: "© 2025 टायगर रोडवीर वेल्फेअर फाउंडेशन. सर्व हक्क राखीव.",
      made: ["भारताच्या हायवे अर्थव्यवस्थेसाठी ", " ने बनवले"],
    },
  },
} as const;

type Lang = keyof typeof dict;
const STORAGE_KEY = "roadveer-lang";

export default function V2Client() {
  // Start as "en" so the server-rendered markup matches the first client
  // render (avoids hydration mismatch); the stored choice is applied below.
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "mr") setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => {
    const next: Lang = lang === "en" ? "mr" : "en";
    setLang(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const t = dict[lang];

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
            {t.nav.map((l) => (
              <a key={l} href="#">{l}</a>
            ))}
          </nav>
          <div className="tv-hdr-acts">
            <button
              type="button"
              className="tv-lang"
              onClick={toggle}
              aria-label={lang === "en" ? "मराठीत बदला" : "Switch to English"}
            >
              {lang === "en" ? "मराठी" : "EN"}
            </button>
            <a href="#join" className="tv-btn tv-btn-o">{t.becomeRakshak} <I.arrow /></a>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="tv-hero">
        <div className="tv-hero-bg"><img src="/v2-hero.png" alt="Tiger RoadVeer community on the highway" /></div>
        <div className="tv-wrap tv-hero-in">
          <div className="tv-hero-copy">
            <h1>
              <span className="tv-h1-sm">{t.hero.h1sm}</span>
              {t.hero.h1a}<br />{t.hero.h1b}
            </h1>
            <p className="tv-hero-sub">
              {t.hero.sub.map((seg, i) =>
                seg.cls ? <span key={i} className={seg.cls}>{seg.t}</span> : <Fragment key={i}>{seg.t}</Fragment>
              )}
            </p>
            <div className="tv-hero-acts">
              <a href="#join" className="tv-btn tv-btn-o">{t.hero.ctaPrimary} <I.arrow /></a>
              <a href="#mission" className="tv-btn tv-btn-ghost">{t.hero.ctaSecondary} <I.arrow /></a>
            </div>
          </div>
        </div>
        <div className="tv-statbar">
          <div className="tv-wrap">
            <div className="tv-statbar-in">
              {t.heroStats.map((s, i) => {
                const Ic = heroIcons[i];
                return (
                  <div className="tv-stat" key={s.l}>
                    <Ic />
                    <div><b>{s.n}</b><span>{s.l}</span></div>
                  </div>
                );
              })}
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
            <p className="tv-eyebrow">{t.eco.eyebrow}</p>
            <h2 className="tv-h2">{t.eco.h2}</h2>
            <p>{t.eco.p1}</p>
            <p>{t.eco.p2}</p>
          </div>
          <div className="tv-eco-img"><img src="/v2-highway.png" alt="National highway through the hills" /></div>
          <div className="tv-eco-stats">
            {t.eco.stats.map((s, i) => {
              const Ic = ecoIcons[i];
              return (
                <div className="tv-eco-stat" key={s.l}>
                  <Ic />
                  <div><b>{s.n}</b><span>{s.l}</span></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== VISIONARIES ===== */}
      <section className="tv-vis">
        <div className="tv-wrap">
          <p className="tv-eyebrow tv-center">{t.vis.eyebrow}</p>
          <div className="tv-vis-in">
            <div className="tv-founder">
              <img className="tv-founder-ph" src={founderPhotos[0]} alt={t.founders[0].name} />
              <div className="tv-founder-body">
                <h3>{t.founders[0].name}</h3>
                <div className="role">{t.vis.role}</div>
                {t.founders[0].paras.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="tv-vis-center">
              <div className="tv-vis-badge" aria-hidden />
              <h4>{t.vis.center[0]}<br />{t.vis.center[1]}<br />{t.vis.center[2]}</h4>
            </div>
            <div className="tv-founder">
              <img className="tv-founder-ph" src={founderPhotos[1]} alt={t.founders[1].name} />
              <div className="tv-founder-body">
                <h3>{t.founders[1].name}</h3>
                <div className="role">{t.vis.role}</div>
                {t.founders[1].paras.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GUIDING PHILOSOPHY ===== */}
      <section className="tv-phil" id="mission">
        <div className="tv-wrap">
          <p className="tv-eyebrow tv-center">{t.phil.eyebrow}</p>
          <div className="tv-phil-cards">
            {t.phil.cards.map((p, i) => {
              const st = philStyle[i];
              const Ic = st.ic;
              return (
                <div className={`tv-phil-card ${st.cls}`} key={p.t}>
                  <div className={`tv-phil-ic ${st.icCls}`}><Ic /></div>
                  <h3>{p.t}</h3>
                  <div className="we">{p.we}</div>
                  <p>{p.d}</p>
                </div>
              );
            })}
          </div>
          <p className="tv-phil-note">{t.phil.note}</p>
        </div>
      </section>

      {/* ===== WHO WE EMPOWER ===== */}
      <section className="tv-emp">
        <div className="tv-wrap tv-emp-in">
          <div className="tv-emp-banner">
            <img src="/v2-empower.png" alt="People we empower" />
          </div>
          <div className="tv-emp-body">
            <h2 className="tv-h2">{t.emp.h2}</h2>
            <p>{t.emp.p}</p>
            <ul className="tv-emp-list">
              {t.emp.list.map((e) => <li key={e}>{e}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== MISSION AREAS ===== */}
      <section className="tv-mission">
        <div className="tv-wrap">
          <h2 className="tv-h2 tv-center">{t.mission.h2}</h2>
          <div className="tv-mgrid">
            {t.mission.areas.map((m, i) => (
              <div className="tv-mcard" key={m.t}>
                <div className="tv-mcard-img"><img src={missionImgs[i]} alt={m.t} /></div>
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
            <h2 className="tv-h2">{t.rak.h2}</h2>
            <p>{t.rak.p}</p>
            <div className="tv-steps">
              {t.rak.steps.map((s, i) => {
                const Ic = stepIcons[i];
                return (
                  <Fragment key={s.b}>
                    <div className="tv-step">
                      <div className="tv-step-ic"><Ic /></div>
                      <b>{s.b}</b>
                      <span>{s.s}</span>
                    </div>
                    {i < t.rak.steps.length - 1 && <span className="tv-step-arrow">&rarr;</span>}
                  </Fragment>
                );
              })}
            </div>
            <a href="#join" className="tv-btn tv-btn-g">{t.rak.cta} <I.arrow /></a>
          </div>
          <div className="tv-mh">
            <h3>{t.rak.mhTitle}</h3>
            <p>{t.rak.mhP}</p>
            <div className="tv-mh-body">
              <div className="tv-mh-stats">
                {t.rak.mhStats.map((s) => (
                  <div className="tv-mh-stat" key={s.s}><b>{s.b}</b><span>{s.s}</span></div>
                ))}
              </div>
              <div className="tv-mh-map" aria-label="Maharashtra leading the nation" role="img" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTNERS & CSR ===== */}
      <section className="tv-partners" id="partners">
        <div className="tv-wrap">
          <p className="tv-eyebrow">{t.partners.eyebrow}</p>
          <h2 className="tv-partners-h">{t.partners.h}</h2>
          <div className="tv-partners-grid">
            <div className="tv-partners-card">
              <p className="tv-partners-lbl">{t.partners.lbl}</p>
              <div className="tv-logos">
                <div className="tv-logo">Reliance<small>FOUNDATION</small></div>
                <div className="tv-logo">TATA<small>TRUSTS</small></div>
                <div className="tv-logo">IndianOil</div>
                <div className="tv-logo">Bharat<small>PETROLEUM</small></div>
                <div className="tv-logo tv-logo-more">{t.partners.more}</div>
              </div>
              <a href="#" className="tv-btn tv-btn-line">{t.partners.viewAll} <I.arrow /></a>
            </div>
            <div className="tv-ministry">
              <p className="lbl">{t.partners.ministryLbl}</p>
              <p>{t.partners.ministryP}</p>
              <p className="tv-ministry-sub">{t.partners.ministrySub}</p>
              <ul className="tv-ministry-list">
                {t.partners.ministryList.map((li) => <li key={li}>{li}</li>)}
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
                <h2 className="tv-h2">{t.impact.h2}</h2>
                <div className="sub">{t.impact.sub}</div>
              </div>
              <a href="#partners" className="tv-btn tv-btn-line">{t.impact.recruit} <I.arrow /></a>
            </div>
            <div className="tv-ivideo"><img src="/v2-empower.png" alt="Impact video" /></div>
            <div className="tv-impact-row">
              {t.impact.stats.map((s, i) => {
                const Ic = impactIcons[i];
                return (
                  <div className="tv-idash" key={s.l}>
                    <Ic />
                    <b>{s.n}</b>
                    <span>{s.l}</span>
                  </div>
                );
              })}
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
              <h2>{t.join.h2}</h2>
              <p>{t.join.p}</p>
            </div>
            <form className="tv-form">
              <p className="tv-form-t">{t.join.formT}</p>
              <div className="tv-form-grid">
                <div><label>{t.join.name}</label><input type="text" placeholder={t.join.name} /></div>
                <div><label>{t.join.mobile}</label><input type="tel" placeholder={t.join.mobile} /></div>
                <div><label>{t.join.email}</label><input type="email" placeholder={t.join.email} /></div>
                <div>
                  <label>{t.join.iam}</label>
                  <select defaultValue=""><option value="" disabled>{t.join.select}</option>
                    {t.join.roles.map((r) => <option key={r}>{r}</option>)}
                  </select>
                </div>
                <div>
                  <label>{t.join.city}</label>
                  <select defaultValue=""><option value="" disabled>{t.join.select}</option>
                    {t.join.cities.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div><label>{t.join.message}</label><textarea placeholder={t.join.message} /></div>
              </div>
              <button type="submit" className="tv-btn tv-btn-o">{t.join.submit} <I.arrow /></button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="tv-foot">
        <div className="tv-wrap tv-foot-in">
          <span>{t.footer.copy}</span>
          <span>{t.footer.made[0]}<span className="heart">♥</span>{t.footer.made[1]}</span>
        </div>
      </footer>
    </div>
  );
}
