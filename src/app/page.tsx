import type { Metadata } from "next";
import "./v2.css";
import V2Client from "./V2Client";

export const metadata: Metadata = {
  title: "Tiger RoadVeer Welfare Foundation — Building India's Highway Economy",
  description:
    "A people-powered movement empowering drivers, mechanics, farmers, women, youth and entrepreneurs through Seva, Kamai and Suraksha.",
};

export default function Home() {
  return <V2Client />;
}
