import ThemeToggle from "@/Components/ThemeToggle";
import StarsBackground from "@/Components/StarBackground";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import AboutSection from "@/Components/AboutSection";
import SkillsSection from "@/Components/SkillsSection";
import Projects from "@/Components/Project";
import ContactSection from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      
      {/* Background Effects */}
      <StarsBackground />
      {/* Navagation */}
      <Navbar />
      {/* Main Section */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Projects />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
