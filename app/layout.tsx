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
  title: "Ronit Jitesh — AI & Data Analyst · ML Builder",
  description:
    "AI and data analyst who turns data into models, and models into products: machine learning, statistics, and commercial analytics. MSc Business Analytics, Edinburgh. RAG dissertation with Siemens Digital Industries. Builder of ORAII. Two years of analytics across US, Canada, and EU.",
  authors: [{ name: "Ronit Jitesh" }],
  openGraph: {
    title: "Ronit Jitesh — AI & Data Analyst · ML Builder",
    description:
      "I turn data into models, and models into products people use. Edinburgh, UK.",
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
