import { useEffect } from "react";
import { Toaster } from "sonner";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import CoverageSection from "./components/CoverageSection";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  useEffect(() => {
    document.title = "Auto Gruas EC | Servicio 24/7 en Quito | Llegamos en 20 Minutos";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" richColors />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <CoverageSection />
        <FAQSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
