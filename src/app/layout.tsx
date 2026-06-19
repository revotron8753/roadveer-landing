import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tiger Roadveer — Driver Ka Saathi | Highway Ka Dost",
  description:
    "India's Highway Economy Platform. Building for those who keep India moving — drivers, RTR volunteers, vendors and communities across every national highway.",
  keywords: [
    "Tiger Roadveer",
    "highway economy",
    "RTR volunteer",
    "driver safety",
    "NHAI",
    "MoRTH",
    "road safety India",
  ],
  openGraph: {
    title: "Tiger Roadveer — Driver Ka Saathi | Highway Ka Dost",
    description:
      "India's Highway Economy Platform connecting drivers, volunteers, vendors and emergency networks across every national highway.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#15171C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <body className="antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
