import { useEffect, useState } from 'react';
import { BackToTopButton } from './components/common/BackToTopButton';
import { ReadingProgressBar } from './components/common/ReadingProgressBar';
import { TrialContactModal } from './components/common/TrialContactModal';
import { AnimatedBackground } from './components/layout/AnimatedBackground';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { MobileStickyCta } from './components/layout/MobileStickyCta';
import { ContactSection } from './components/sections/ContactSection';
import { CoursesSection } from './components/sections/CoursesSection';
import { FaqSection } from './components/sections/FaqSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { FlowSection } from './components/sections/FlowSection';
import { HeroSection } from './components/sections/HeroSection';
import { PricingSection } from './components/sections/PricingSection';
import { CONTACT_INFO, NAV_ITEMS } from './data/siteData';
import './styles/customAnimations.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('elementary');
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('features');

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const ids = [...NAV_ITEMS.map((item) => item.id), 'contact', 'faq'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: 0.1 },
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans text-slate-600 bg-slate-50 min-h-screen selection:bg-pink-100 selection:text-pink-900 overflow-x-hidden">
      <ReadingProgressBar />
      <AnimatedBackground />
      <Header
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((prev) => !prev)}
        onScrollToSection={scrollToSection}
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
        activeSection={activeSection}
      />
      <HeroSection onScrollToSection={scrollToSection} onOpenTrialModal={() => setIsTrialModalOpen(true)} />
      <FeaturesSection />
      <CoursesSection />
      <PricingSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <FlowSection />
      <FaqSection />
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
      <BackToTopButton />
    </div>
  );
}
