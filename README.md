# Roadveer — Landing Site

Driver Ka Saathi · Highway Ka Dost — India's Highway Economy Platform.

Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind v4**, and
fonts loaded via `next/font/google` (**Inter** + **Rajdhani**).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
src/
  app/
    layout.tsx      Fonts (Inter, Rajdhani) + metadata
    globals.css     Full design system (CSS variables, all section styles)
    page.tsx        Assembles the page from section components
  components/
    SiteNav.tsx     Fixed nav — mobile menu + scroll-spy (client)
    Hero.tsx        Hero with founder photo + floating badges
    GovtStrip.tsx   Government alignment pills
    About.tsx       Mission / About
    Founder.tsx     Founder story (Farukh Yelapure)
    RTR.tsx         Roadveer Tiger Rakshaks volunteer network
    Economy.tsx     Highway economy (6 streams) + 2030 vision
    Emergency.tsx   24×7 emergency response flow
    RoadSafety.tsx  NHAI / MoRTH initiatives + associate orgs
    Vendor.tsx      Vendor categories + onboarding journey
    MissionBand.tsx Orange mission band
    Contact.tsx     Register section + RegisterForm
    RegisterForm.tsx Controlled form (client)
    Footer.tsx      Footer
public/
  founder-gadkari.jpg   Hero + About image
  farukh-portrait.png   Founder portrait
```

## Wiring up the form

`RegisterForm.tsx` collects the fields and currently shows a thank-you state on
submit. Replace the `// Wire this up...` line in `handleSubmit` with a POST to
your API route, Google Sheet, or WhatsApp flow.
