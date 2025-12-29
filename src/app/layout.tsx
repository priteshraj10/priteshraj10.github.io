import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Pritesh Raj",
    "AI Architect",
    "Data Scientist",
    "Machine Learning Engineer",
    "Artificial Intelligence",
    "LLM Infrastructure",
    "LLM Fine-tuning",
    "Generative AI",
    "RAG",
    "LLM Ops",
    "LangChain Developer",
    "Fine-tuning LLMs",
    "AI Infrastructure",
    "Machine Learning Operations",
    "CliniQX",
    "LangTrain",
    "QuadTree.ai",
    "ISB",
    "ISRO",
    "BIT Mesra",
    "PyTorch",
    "TensorFlow",
    "LangChain",
    "Hugging Face",
    "Python Developer",
    "Full Stack Developer",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  verification: {
    google: "google342de175bdf92ea8",
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/me.jpeg`,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - AI Architect & Data Scientist`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/me.jpeg`],
    creator: "@10Priteshraj",
    site: "@10Priteshraj",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  image: `${SITE_CONFIG.url}/me.jpeg`,
  jobTitle: "AI Architect & Data Scientist",
  worksFor: {
    "@type": "Organization",
    name: "CliniQX (QuadTree.ai)",
  },
  description: SITE_CONFIG.description,
  sameAs: [
    SITE_CONFIG.links.linkedin,
    SITE_CONFIG.links.github,
    SITE_CONFIG.links.twitter,
    SITE_CONFIG.links.kaggle,
    SITE_CONFIG.links.medium,
    SITE_CONFIG.links.huggingface,
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "LLM Infrastructure",
    "LLM Fine-tuning",
    "Python",
    "PyTorch",
    "TensorFlow",
    "LangChain",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Indian School of Business",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "BIT Mesra",
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.title,
  url: SITE_CONFIG.url,
  author: {
    "@type": "Person",
    name: SITE_CONFIG.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <link rel="canonical" href={SITE_CONFIG.url} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-zinc-100 min-h-screen`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
