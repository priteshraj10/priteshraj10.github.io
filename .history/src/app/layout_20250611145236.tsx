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
  title: "Pritesh Raj | AI Architect & Data Scientist",
  description: "Portfolio of Pritesh Raj - AI Architect, Data Scientist, and Innovator. Explore projects, skills, and contact information.",
  openGraph: {
    title: "Pritesh Raj | AI Architect & Data Scientist",
    description: "Portfolio of Pritesh Raj - AI Architect, Data Scientist, and Innovator.",
    url: "https://priteshraj10.github.io",
    siteName: "Pritesh Raj Portfolio",
    images: [
      {
        url: "/file.svg",
        width: 800,
        height: 600,
        alt: "Pritesh Raj Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 text-zinc-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
