import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ronit-jitesh.github.io"),
  title: "Ronit Jitesh — AI Analyst",
  description:
    "AI analyst who validates the problem with data, then builds the AI that solves it. MSc Business Analytics, Edinburgh. Builder of ORAII. Dissertation partner at Siemens Digital Industries. Two years of commercial analytics across US, Canada, and EU.",
  authors: [{ name: "Ronit Jitesh" }],
  openGraph: {
    title: "Ronit Jitesh — AI Analyst",
    description:
      "I validate the problem with data, then build the AI that solves it. Edinburgh, UK.",
    url: "https://ronit-jitesh.github.io",
    siteName: "Ronit Jitesh",
    locale: "en_GB",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain">{children}</body>
    </html>
  );
}
