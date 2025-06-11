import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { PolaroidCollectionSection } from "@/components/sections/polaroid-collection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PolaroidCollectionSection />
      {/* You can add more sections here, e.g., ProjectsSection, ContactSection, etc. */}
    </div>
  );
}
