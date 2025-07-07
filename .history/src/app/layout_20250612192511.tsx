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
  metadataBase: new URL('https://priteshraj10.github.io'),
  title: "Pritesh Raj",
  description: "Pritesh Raj",
  verification: {
    google: "google342de175bdf92ea8",
  },
  openGraph: {
    title: "Pritesh Raj",
    description: "Pritesh Raj",
    url: "https://priteshraj10.github.io",
    siteName: "Pritesh Raj",
    images: [
      {
        url: "/file.svg",
        width: 800,
        height: 600,
        alt: "Pritesh Raj",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-zinc-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
