import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import PracticeAreas from './components/PracticeAreas';
import TeamSection from './components/TeamSection';
import AdvocacySection from './components/AdvocacySection';
import SelectedMatters from './components/SelectedMatters';
import TamilNaduNetwork from './components/TamilNaduNetwork';
import WhySection from './components/WhySection';
import ClientJourney from './components/ClientJourney';
import SaulSection from './components/SaulSection';
import ConsultationSection from './components/ConsultationSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import SectionDivider from './components/SectionDivider';
import TrustBar from './components/TrustBar';

const SESSION_KEY = 'bl_intro_seen';

function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed', inset: 0,
        zIndex: 9990,
        pointerEvents: 'none',
        opacity: 0.018,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [isReturnVisit, setIsReturnVisit] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (seen) {
      setIsReturnVisit(true);
    }
  }, []);

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, '1');
    setIntroComplete(true);
  }, []);

  // Lock body scroll during intro
  useEffect(() => {
    if (!introComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [introComplete]);

  return (
    <>
      {/* Grain */}
      <GrainOverlay />

      {/* Intro */}
      <AnimatePresence>
        {!introComplete && (
          <Intro
            key="intro"
            onComplete={handleIntroComplete}
            isReturnVisit={isReturnVisit}
          />
        )}
      </AnimatePresence>

      {/* Main site */}
      {introComplete && (
        <>
          {/* Navbar */}
          <Navbar visible={introComplete} />

          {/* Main content */}
          <main>
            {/* 1. Hero */}
            <Hero />

            {/* Trust bar */}
            <TrustBar />

            {/* 2. Areas of Practice (replaces First-Generation Lawyer at the top) */}
            <PracticeAreas />
            <SectionDivider label="§" />

            {/* 3. Our Team */}
            <TeamSection />
            <SectionDivider />

            {/* 4. Advocacy Beyond Courtroom */}
            <AdvocacySection />
            <SectionDivider label="§" />

            {/* 5. Selected Matters */}
            <SelectedMatters />
            <SectionDivider />

            {/* 6. Why Clients Choose BL Associate (swapped before Tamil Nadu) */}
            <WhySection />
            <SectionDivider />

            {/* 7. Tamil Nadu Network */}
            <TamilNaduNetwork />
            <SectionDivider label="§" />

            {/* 8. Client Journey */}
            <ClientJourney />
            <SectionDivider label="§" />

            {/* 9. Better Call Saul Themed Section */}
            <SaulSection />
            <SectionDivider />

            {/* 10. First-Generation Lawyer Story (positioned before the contact number) */}
            <StorySection />
            <SectionDivider label="§" />

            {/* 11. Consultation CTA + Contact Form */}
            <ConsultationSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating buttons */}
          <FloatingButtons />
        </>
      )}
    </>
  );
}
