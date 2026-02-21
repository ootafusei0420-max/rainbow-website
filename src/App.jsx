import { useEffect, useState } from 'react';
import { BackToTopButton } from './components/common/BackToTopButton';
import { NextSectionGuide } from './components/common/NextSectionGuide';
import { ReadingProgressBar } from './components/common/ReadingProgressBar';
import { TrialContactModal } from './components/common/TrialContactModal';
import { StructuredData } from './components/common/StructuredData';
import { AnimatedBackground } from './components/layout/AnimatedBackground';
import { Footer } from './components/layout/Footer';
import { IntroSplash } from './components/layout/IntroSplash';
import { Header } from './components/layout/Header';
import { MobileStickyCta } from './components/layout/MobileStickyCta';
import { ContactSection } from './components/sections/ContactSection';
import { CoursesSection } from './components/sections/CoursesSection';
import { FAQ_CATEGORIES, FaqSection } from './components/sections/FaqSection';
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
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateViewport = () => setIsMobileViewport(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener('change', updateViewport);
    return () => mediaQuery.removeEventListener('change', updateViewport);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('focusMode');
    setFocusMode(saved === 'on');
  }, []);

  const toggleFocusMode = () => {
    setFocusMode((prev) => {
      const next = !prev;
      localStorage.setItem('focusMode', next ? 'on' : 'off');
      return next;
    });
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

  const calmMode = isMobileViewport || focusMode;

  return (
    <div className="font-sans text-slate-600 bg-slate-50 min-h-screen selection:bg-pink-100 selection:text-pink-900 overflow-x-hidden">
      {showSplash && <IntroSplash onComplete={() => setShowSplash(false)} />}
      {!calmMode && <ReadingProgressBar />}
      <AnimatedBackground disabled={calmMode} />
      <StructuredData faqCategories={FAQ_CATEGORIES} />
      <Header
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((prev) => !prev)}
        onScrollToSection={scrollToSection}
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
        activeSection={activeSection}
        focusMode={focusMode}
        onToggleFocusMode={toggleFocusMode}
      />
      <HeroSection onScrollToSection={scrollToSection} onOpenTrialModal={() => setIsTrialModalOpen(true)} />
      <FeaturesSection />
      <CoursesSection />
      <PricingSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <FlowSection />
      <FaqSection />
      <ContactSection contactInfo={CONTACT_INFO} onOpenTrialModal={() => setIsTrialModalOpen(true)} />
      <Footer />
      <NextSectionGuide currentSection={activeSection} onMove={scrollToSection} />
      <MobileStickyCta phone={CONTACT_INFO.phone} onReserve={() => setIsTrialModalOpen(true)} />
      <TrialContactModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        phone={CONTACT_INFO.phone}
        lineUrl={CONTACT_INFO.lineUrl}
        businessHours={CONTACT_INFO.businessHours}
        lineId={CONTACT_INFO.line}
      />
      {!calmMode && <BackToTopButton />}
    </div>
  );
}
