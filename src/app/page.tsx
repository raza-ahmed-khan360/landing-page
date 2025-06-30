import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillSection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactForm";
import TestimonialsSection from "./components/TestimonialSection";
import CTASection from "./components/CTASection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <ProjectsSection />
      <SkillsSection />
      <PricingSection />
      <ContactSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
