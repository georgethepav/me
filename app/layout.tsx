import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "George Billam | AI and Design Technology Leader, Architecture",
  description:
    "George Billam leads AI adoption, governance and design technology in architecture. 18+ years in practice, 150+ retail fit-outs, Anthropic Claude Certified Associate. Based in Nottingham, UK.",
  openGraph: {
    title: "George Billam | AI and Design Technology Leader, Architecture",
    description:
      "George Billam leads AI adoption, governance and design technology in architecture. 18+ years in practice, 150+ retail fit-outs, Anthropic Claude Certified Associate. Based in Nottingham, UK.",
    url: "https://georgebillam.com",
    siteName: "George Billam",
    images: [
      {
        url: "https://georgebillam.com/GB.png",
        width: 1200,
        height: 630,
        alt: "George Billam | AI and Design Technology Leader, Architecture",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "George Billam | AI and Design Technology Leader, Architecture",
    description:
      "George Billam leads AI adoption, governance and design technology in architecture. 18+ years in practice, 150+ retail fit-outs, Anthropic Claude Certified Associate. Based in Nottingham, UK.",
    images: ["https://georgebillam.com/GB.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
