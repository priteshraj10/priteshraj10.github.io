import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        {/* You can add more sections here, e.g., ProjectsSection, ContactSection, etc. */}
      </main>
    </div>
  );
}
