
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <PortfolioSection />
      <ReferencesSection />
      <ContactSection />
    </main>
  );
}
