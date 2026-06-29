/**
 * Seeds Sanity from the static dictionary in src/lib/content.ts.
 * Run:  npx tsx scripts/migrate.ts
 * Requires SANITY_API_WRITE_TOKEN in .env.local.
 *
 * Idempotent: uses createOrReplace on fixed document IDs, so re-running
 * resets every section back to the dictionary. (Run only for initial seed
 * or a deliberate reset — it overwrites edits made in the Studio.)
 */
import { readFileSync } from "fs";
import { createClient } from "@sanity/client";
import { CONTENT } from "../src/lib/content";

// Load .env.local (no external dep).
for (const line of readFileSync(".env.local", "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
}

const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) throw new Error("Missing SANITY_API_WRITE_TOKEN in .env.local");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01",
  token,
  useCdn: false,
});

const en = CONTENT.en;
const mr = CONTENT.mr;

// ── Localized field builders ──────────────────────────────────────────────
const ls = (e: string, m: string) => ({ _type: "localeString", en: e, mr: m });
const lt = (e: string, m: string) => ({ _type: "localeText", en: e, mr: m });
// Array of localized strings (mission lists, tags, steps, …).
const lsList = (eArr: string[], mArr: string[], p: string) =>
  eArr.map((e, i) => ({ _type: "localeString", _key: `${p}${i}`, en: e, mr: mArr[i] }));

/* eslint-disable @typescript-eslint/no-explicit-any */
const docs: any[] = [
  // ── Navigation ──
  {
    _id: "nav",
    _type: "nav",
    links: en.nav.links.map((l, i) => ({
      _key: `l${i}`,
      href: l.href,
      label: ls(l.label, mr.nav.links[i].label),
      mobile: ls(l.mobile, mr.nav.links[i].mobile),
    })),
    register: ls(en.nav.register, mr.nav.register),
    joinRtr: ls(en.nav.joinRtr, mr.nav.joinRtr),
    registerContact: ls(en.nav.registerContact, mr.nav.registerContact),
    homeAria: ls(en.nav.homeAria, mr.nav.homeAria),
    logoAlt: ls(en.nav.logoAlt, mr.nav.logoAlt),
  },

  // ── Hero ──
  {
    _id: "hero",
    _type: "hero",
    eyebrow: ls(en.hero.eyebrow, mr.hero.eyebrow),
    h1: {
      pre: ls(en.hero.h1.pre, mr.hero.h1.pre),
      em: ls(en.hero.h1.em, mr.hero.h1.em),
      post: ls(en.hero.h1.post, mr.hero.h1.post),
    },
    sub: ls(en.hero.sub, mr.hero.sub),
    quote: ls(en.hero.quote, mr.hero.quote),
    lede: lt(en.hero.lede, mr.hero.lede),
    becomeRtr: ls(en.hero.becomeRtr, mr.hero.becomeRtr),
    registerVendor: ls(en.hero.registerVendor, mr.hero.registerVendor),
    downloadApp: ls(en.hero.downloadApp, mr.hero.downloadApp),
    figAlt: ls(en.hero.figAlt, mr.hero.figAlt),
    figTag: ls(en.hero.figTag, mr.hero.figTag),
    cap: {
      name1: ls(en.hero.cap.name1, mr.hero.cap.name1),
      mid: ls(en.hero.cap.mid, mr.hero.cap.mid),
      name2: ls(en.hero.cap.name2, mr.hero.cap.name2),
      tail: ls(en.hero.cap.tail, mr.hero.cap.tail),
    },
    stats: en.hero.stats.map((s, i) => ({
      _key: `stat${i}`,
      num: s.num,
      acc: s.acc,
      label: ls(s.label, mr.hero.stats[i].label),
    })),
  },

  // ── Government strip ──
  {
    _id: "govt",
    _type: "govt",
    flagAlt: ls(en.govt.flagAlt, mr.govt.flagAlt),
    leadStrong: ls(en.govt.leadStrong, mr.govt.leadStrong),
    leadSpan: lt(en.govt.leadSpan, mr.govt.leadSpan),
    alignedWith: ls(en.govt.alignedWith, mr.govt.alignedWith),
    pills: en.govt.pills.map((p, i) => ({
      _key: `p${i}`,
      href: p.href,
      label: ls(p.label, mr.govt.pills[i].label),
    })),
  },

  // ── About ──
  {
    _id: "about",
    _type: "about",
    imgAlt: ls(en.about.imgAlt, mr.about.imgAlt),
    quoteP: lt(en.about.quoteP, mr.about.quoteP),
    quoteCite: ls(en.about.quoteCite, mr.about.quoteCite),
    idx: ls(en.about.idx, mr.about.idx),
    eyebrow: ls(en.about.eyebrow, mr.about.eyebrow),
    title: ls(en.about.title, mr.about.title),
    lede: lt(en.about.lede, mr.about.lede),
    mission: lsList(en.about.mission, mr.about.mission, "m"),
    belief: {
      pre: ls(en.about.belief.pre, mr.about.belief.pre),
      strong: ls(en.about.belief.strong, mr.about.belief.strong),
      post: lt(en.about.belief.post, mr.about.belief.post),
    },
  },

  // ── Co-Founder ──
  {
    _id: "cofounder",
    _type: "cofounder",
    photoAlt: ls(en.cofounder.photoAlt, mr.cofounder.photoAlt),
    name: ls(en.cofounder.name, mr.cofounder.name),
    role: ls(en.cofounder.role, mr.cofounder.role),
    sub: ls(en.cofounder.sub, mr.cofounder.sub),
    tags: lsList(en.cofounder.tags, mr.cofounder.tags, "t"),
    idx: ls(en.cofounder.idx, mr.cofounder.idx),
    eyebrow: ls(en.cofounder.eyebrow, mr.cofounder.eyebrow),
    title: {
      pre: ls(en.cofounder.title.pre, mr.cofounder.title.pre),
      em: ls(en.cofounder.title.em, mr.cofounder.title.em),
      post: ls(en.cofounder.title.post, mr.cofounder.title.post),
    },
    lede: lt(en.cofounder.lede, mr.cofounder.lede),
    rows: en.cofounder.rows.map((r, i) => ({
      _key: `r${i}`,
      k: ls(r.k, mr.cofounder.rows[i].k),
      v: lt(r.v, mr.cofounder.rows[i].v),
    })),
    quote: lt(en.cofounder.quote, mr.cofounder.quote),
  },

  // ── Founder ──
  {
    _id: "founder",
    _type: "founder",
    name: ls(en.founder.name, mr.founder.name),
    avatarAria: ls(en.founder.avatarAria, mr.founder.avatarAria),
    role: ls(en.founder.role, mr.founder.role),
    sub: ls(en.founder.sub, mr.founder.sub),
    tags: lsList(en.founder.tags, mr.founder.tags, "t"),
    idx: ls(en.founder.idx, mr.founder.idx),
    title: ls(en.founder.title, mr.founder.title),
    pullquote: {
      pre: lt(en.founder.pullquote.pre, mr.founder.pullquote.pre),
      em: ls(en.founder.pullquote.em, mr.founder.pullquote.em),
    },
    storyP1: lt(en.founder.storyP1, mr.founder.storyP1),
    storyP2: lt(en.founder.storyP2, mr.founder.storyP2),
    storyP3: {
      strong: ls(en.founder.storyP3.strong, mr.founder.storyP3.strong),
      post: lt(en.founder.storyP3.post, mr.founder.storyP3.post),
    },
    ecoTitle: ls(en.founder.ecoTitle, mr.founder.ecoTitle),
    eco: lsList(en.founder.eco, mr.founder.eco, "e"),
    closing: {
      normal: lt(en.founder.closing.normal, mr.founder.closing.normal),
      strong: ls(en.founder.closing.strong, mr.founder.closing.strong),
    },
    ctaPartner: ls(en.founder.ctaPartner, mr.founder.ctaPartner),
    ctaRtr: ls(en.founder.ctaRtr, mr.founder.ctaRtr),
  },

  // ── RTR ──
  {
    _id: "rtr",
    _type: "rtr",
    idx: ls(en.rtr.idx, mr.rtr.idx),
    eyebrow: ls(en.rtr.eyebrow, mr.rtr.eyebrow),
    title: ls(en.rtr.title, mr.rtr.title),
    lede: lt(en.rtr.lede, mr.rtr.lede),
    benefits: en.rtr.benefits.map((b, i) => ({
      _key: `b${i}`,
      title: ls(b.title, mr.rtr.benefits[i].title),
      sub: ls(b.sub, mr.rtr.benefits[i].sub),
    })),
    registerRtr: ls(en.rtr.registerRtr, mr.rtr.registerRtr),
    panelNum: en.rtr.panelNum,
    panelNumL: ls(en.rtr.panelNumL, mr.rtr.panelNumL),
    panelDesc: lt(en.rtr.panelDesc, mr.rtr.panelDesc),
    steps: lsList(en.rtr.steps, mr.rtr.steps, "s"),
    certLabel: ls(en.rtr.certLabel, mr.rtr.certLabel),
    certs: lsList(en.rtr.certs, mr.rtr.certs, "c"),
    becomeToday: ls(en.rtr.becomeToday, mr.rtr.becomeToday),
  },

  // ── Maharashtra ──
  {
    _id: "maharashtra",
    _type: "maharashtra",
    idx: ls(en.maharashtra.idx, mr.maharashtra.idx),
    eyebrow: ls(en.maharashtra.eyebrow, mr.maharashtra.eyebrow),
    title: {
      pre: ls(en.maharashtra.title.pre, mr.maharashtra.title.pre),
      em: ls(en.maharashtra.title.em, mr.maharashtra.title.em),
      post: ls(en.maharashtra.title.post, mr.maharashtra.title.post),
    },
    lede: lt(en.maharashtra.lede, mr.maharashtra.lede),
    stages: en.maharashtra.stages.map((s, i) => ({
      _key: `st${i}`,
      stage: ls(s.stage, mr.maharashtra.stages[i].stage),
      title: ls(s.title, mr.maharashtra.stages[i].title),
      desc: lt(s.desc, mr.maharashtra.stages[i].desc),
    })),
    cardTag: ls(en.maharashtra.cardTag, mr.maharashtra.cardTag),
    cardTitle: en.maharashtra.cardTitle,
    cardSub: en.maharashtra.cardSub,
    cardDesc: lt(en.maharashtra.cardDesc, mr.maharashtra.cardDesc),
    stats: en.maharashtra.stats.map((s, i) => ({
      _key: `ms${i}`,
      n: s.n,
      t: ls(s.t, mr.maharashtra.stats[i].t),
    })),
  },

  // ── Economy ──
  {
    _id: "economy",
    _type: "economy",
    idx: ls(en.economy.idx, mr.economy.idx),
    title: {
      pre: ls(en.economy.title.pre, mr.economy.title.pre),
      em: ls(en.economy.title.em, mr.economy.title.em),
      post: ls(en.economy.title.post, mr.economy.title.post),
    },
    lede: lt(en.economy.lede, mr.economy.lede),
    pillars: en.economy.pillars.map((p, i) => ({
      _key: `p${i}`,
      name: ls(p.name, mr.economy.pillars[i].name),
      desc: lt(p.desc, mr.economy.pillars[i].desc),
    })),
    subhead: ls(en.economy.subhead, mr.economy.subhead),
    cards: en.economy.cards.map((c, i) => ({
      _key: `c${i}`,
      name: ls(c.name, mr.economy.cards[i].name),
      desc: lt(c.desc, mr.economy.cards[i].desc),
      tags: lsList(c.tags, mr.economy.cards[i].tags, `c${i}t`),
    })),
    visionTitle: {
      pre: ls(en.economy.visionTitle.pre, mr.economy.visionTitle.pre),
      em: ls(en.economy.visionTitle.em, mr.economy.visionTitle.em),
      post: ls(en.economy.visionTitle.post, mr.economy.visionTitle.post),
    },
    visionDesc: lt(en.economy.visionDesc, mr.economy.visionDesc),
    vision: en.economy.vision.map((v, i) => ({
      _key: `v${i}`,
      n: v.n,
      t: ls(v.t, mr.economy.vision[i].t),
    })),
  },

  // ── Emergency ──
  {
    _id: "emergency",
    _type: "emergency",
    idx: ls(en.emergency.idx, mr.emergency.idx),
    eyebrow: ls(en.emergency.eyebrow, mr.emergency.eyebrow),
    title: {
      pre: ls(en.emergency.title.pre, mr.emergency.title.pre),
      em: ls(en.emergency.title.em, mr.emergency.title.em),
      post: ls(en.emergency.title.post, mr.emergency.title.post),
    },
    helplineLbl: ls(en.emergency.helplineLbl, mr.emergency.helplineLbl),
    cards: en.emergency.cards.map((c, i) => ({
      _key: `c${i}`,
      title: ls(c.title, mr.emergency.cards[i].title),
      desc: lt(c.desc, mr.emergency.cards[i].desc),
    })),
    flowEyebrow: ls(en.emergency.flowEyebrow, mr.emergency.flowEyebrow),
    steps: en.emergency.steps.map((s, i) => ({
      _key: `s${i}`,
      title: ls(s.title, mr.emergency.steps[i].title),
      desc: lt(s.desc, mr.emergency.steps[i].desc),
    })),
  },

  // ── Road safety ──
  {
    _id: "roadsafety",
    _type: "roadsafety",
    idx: ls(en.roadsafety.idx, mr.roadsafety.idx),
    eyebrow: ls(en.roadsafety.eyebrow, mr.roadsafety.eyebrow),
    title: ls(en.roadsafety.title, mr.roadsafety.title),
    lede: lt(en.roadsafety.lede, mr.roadsafety.lede),
    apexTag: ls(en.roadsafety.apexTag, mr.roadsafety.apexTag),
    apexTitle: en.roadsafety.apexTitle,
    apexSub: ls(en.roadsafety.apexSub, mr.roadsafety.apexSub),
    apexDesc: lt(en.roadsafety.apexDesc, mr.roadsafety.apexDesc),
    apexLink: en.roadsafety.apexLink,
    morthFacts: lsList(en.roadsafety.morthFacts, mr.roadsafety.morthFacts, "f"),
    hierLabel: ls(en.roadsafety.hierLabel, mr.roadsafety.hierLabel),
    underMorth: en.roadsafety.underMorth.map((b, i) => ({
      _key: `b${i}`,
      href: b.href,
      name: b.name,
      org: b.org,
      desc: lt(b.desc, mr.roadsafety.underMorth[i].desc),
      link: b.link,
    })),
    assocHead: ls(en.roadsafety.assocHead, mr.roadsafety.assocHead),
    assoc: en.roadsafety.assoc.map((a, i) => ({
      _key: `a${i}`,
      href: a.href,
      name: a.name,
      url: a.url,
    })),
  },

  // ── Vendor ──
  {
    _id: "vendor",
    _type: "vendor",
    idx: ls(en.vendor.idx, mr.vendor.idx),
    title: ls(en.vendor.title, mr.vendor.title),
    lede: lt(en.vendor.lede, mr.vendor.lede),
    cats: lsList(en.vendor.cats, mr.vendor.cats, "c"),
    journeyTitle: ls(en.vendor.journeyTitle, mr.vendor.journeyTitle),
    journey: en.vendor.journey.map((j, i) => ({
      _key: `j${i}`,
      label: ls(j.label, mr.vendor.journey[i].label),
      sub: ls(j.sub, mr.vendor.journey[i].sub),
    })),
    registerVendor: ls(en.vendor.registerVendor, mr.vendor.registerVendor),
  },

  // ── Mission band ──
  {
    _id: "missionBand",
    _type: "missionBand",
    pre: lt(en.missionBand.pre, mr.missionBand.pre),
    em: ls(en.missionBand.em, mr.missionBand.em),
    join: ls(en.missionBand.join, mr.missionBand.join),
  },

  // ── Contact ──
  {
    _id: "contact",
    _type: "contact",
    idx: ls(en.contact.idx, mr.contact.idx),
    title: ls(en.contact.title, mr.contact.title),
    lede: lt(en.contact.lede, mr.contact.lede),
    types: en.contact.types.map((t, i) => ({
      _key: `t${i}`,
      title: ls(t.title, mr.contact.types[i].title),
      sub: ls(t.sub, mr.contact.types[i].sub),
    })),
  },

  // ── Registration form ──
  {
    _id: "form",
    _type: "form",
    roles: lsList(en.form.roles, mr.form.roles, "r"),
    successTitle: ls(en.form.successTitle, mr.form.successTitle),
    successPre: ls(en.form.successPre, mr.form.successPre),
    successPost: lt(en.form.successPost, mr.form.successPost),
    registerAnother: ls(en.form.registerAnother, mr.form.registerAnother),
    title: ls(en.form.title, mr.form.title),
    sub: lt(en.form.sub, mr.form.sub),
    fullName: ls(en.form.fullName, mr.form.fullName),
    namePlaceholder: ls(en.form.namePlaceholder, mr.form.namePlaceholder),
    mobile: ls(en.form.mobile, mr.form.mobile),
    mobilePlaceholder: en.form.mobilePlaceholder,
    state: ls(en.form.state, mr.form.state),
    statePlaceholder: ls(en.form.statePlaceholder, mr.form.statePlaceholder),
    district: ls(en.form.district, mr.form.district),
    districtPlaceholder: ls(en.form.districtPlaceholder, mr.form.districtPlaceholder),
    joinAs: ls(en.form.joinAs, mr.form.joinAs),
    selectRole: ls(en.form.selectRole, mr.form.selectRole),
    message: ls(en.form.message, mr.form.message),
    messagePlaceholder: ls(en.form.messagePlaceholder, mr.form.messagePlaceholder),
    submit: ls(en.form.submit, mr.form.submit),
  },

  // ── Footer ──
  {
    _id: "footer",
    _type: "footer",
    logoAlt: ls(en.footer.logoAlt, mr.footer.logoAlt),
    tagline: lt(en.footer.tagline, mr.footer.tagline),
    colPlatform: ls(en.footer.colPlatform, mr.footer.colPlatform),
    colSafety: ls(en.footer.colSafety, mr.footer.colSafety),
    colOrg: ls(en.footer.colOrg, mr.footer.colOrg),
    platform: en.footer.platform.map((l, i) => ({
      _key: `p${i}`,
      href: l.href,
      label: ls(l.label, mr.footer.platform[i].label),
    })),
    safety: en.footer.safety.map((l, i) => ({
      _key: `s${i}`,
      href: l.href,
      label: ls(l.label, mr.footer.safety[i].label),
    })),
    org: en.footer.org.map((l, i) => ({
      _key: `o${i}`,
      href: l.href,
      label: ls(l.label, mr.footer.org[i].label),
    })),
    copyright: lt(en.footer.copyright, mr.footer.copyright),
    flagAlt: ls(en.footer.flagAlt, mr.footer.flagAlt),
    natl: lt(en.footer.natl, mr.footer.natl),
  },
];

async function run() {
  const tx = client.transaction();
  docs.forEach((d) => tx.createOrReplace(d));
  await tx.commit();
  console.log(`✓ Migrated ${docs.length} sections:`, docs.map((d) => d._id).join(", "));
}

run().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
