import { useState } from 'react';
import { AnimatedBackground } from './components/layout/AnimatedBackground';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { MobileStickyCta } from './components/layout/MobileStickyCta';
import { ContactSection } from './components/sections/ContactSection';
import { AccessSection } from './components/sections/AccessSection';
import { CoursesSection } from './components/sections/CoursesSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { FlowSection } from './components/sections/FlowSection';
import { HeroSection } from './components/sections/HeroSection';
import { PricingSection } from './components/sections/PricingSection';
import { CONTACT_INFO } from './data/siteData';
import './styles/customAnimations.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('elementary');

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-slate-600 bg-slate-50 min-h-screen selection:bg-pink-100 selection:text-pink-900 overflow-x-hidden">
      <AnimatedBackground />
      <Header
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((prev) => !prev)}
        onScrollToSection={scrollToSection}
      />
      <HeroSection onScrollToSection={scrollToSection} />
      <FeaturesSection />
      <CoursesSection />
      <PricingSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <FlowSection />
      <ContactSection contactInfo={CONTACT_INFO} />
      <AccessSection />
      <Footer />
      <MobileStickyCta phone={CONTACT_INFO.phone} onReserve={() => scrollToSection('contact')} />
    </div>
  );
}
