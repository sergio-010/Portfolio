import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

// Single page composition rendered by every locale route
export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <EducationSection />
            <PortfolioSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
