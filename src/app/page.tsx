import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import GovtStrip from "@/components/GovtStrip";
import About from "@/components/About";
import Founder from "@/components/Founder";
import RTR from "@/components/RTR";
import Economy from "@/components/Economy";
import Emergency from "@/components/Emergency";
import RoadSafety from "@/components/RoadSafety";
import Vendor from "@/components/Vendor";
import MissionBand from "@/components/MissionBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <Hero />
      <GovtStrip />
      <About />
      <Founder />
      <RTR />
      <Economy />
      <Emergency />
      <RoadSafety />
      <Vendor />
      <MissionBand />
      <Contact />
      <Footer />
    </>
  );
}
