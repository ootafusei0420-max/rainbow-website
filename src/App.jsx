import { useState } from 'react';
import { AnimatedBackground } from './components/layout/AnimatedBackground';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { MobileStickyCta } from './components/layout/MobileStickyCta';
import { ContactSection } from './components/sections/ContactSection';
import { TrialContactModal } from './components/common/TrialContactModal';
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
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

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
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
      />
      <HeroSection onScrollToSection={scrollToSection} onOpenTrialModal={() => setIsTrialModalOpen(true)} />
      <FeaturesSection />
      <CoursesSection />
      <PricingSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <FlowSection />
      <ContactSection contactInfo={CONTACT_INFO} onOpenTrialModal={() => setIsTrialModalOpen(true)} />
      <Footer />
      <MobileStickyCta phone={CONTACT_INFO.phone} onReserve={() => setIsTrialModalOpen(true)} />
      <TrialContactModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        phone={CONTACT_INFO.phone}
        lineUrl={CONTACT_INFO.lineUrl}
        businessHours={CONTACT_INFO.businessHours}
        lineId={CONTACT_INFO.line}
      />
    </div>
  );
}
