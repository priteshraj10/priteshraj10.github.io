import Image from "next/image";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      {/* You can add more sections here, e.g., ProjectsSection, ContactSection, etc. */}
    </div>
  );
}
