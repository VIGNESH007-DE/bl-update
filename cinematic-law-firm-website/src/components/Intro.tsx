import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CrestEmblem from './CrestEmblem';

interface IntroProps {
  onComplete: () => void;
  isReturnVisit: boolean;
}

export default function Intro({ onComplete, isReturnVisit }: IntroProps) {
  const [phase, setPhase] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => timerRef.current.forEach(clearTimeout);

  useEffect(() => {
    if (isReturnVisit) {
      // Elegant swift presentation for returning visitors
      setPhase(2);
      const t1 = setTimeout(() => setPhase(3), 400);
      const t2 = setTimeout(() => setPhase(4), 800);
      const t3 = setTimeout(onComplete, 2200);
      timerRef.current.push(t1, t2, t3);
      return () => clearTimers();
    }

    const timings = [
      { phase: 1, delay: 250 },   // Ambient glow & crest entrance
      { phase: 2, delay: 800 },   // Scale balance swing animation
      { phase: 3, delay: 1900 },  // 3D Embossed BL ASSOCIATE title
      { phase: 4, delay: 2600 },  // ADVOCATES • LEGAL CONSULTANTS
      { phase: 5, delay: 3200 },  // Ornamental diamond divider & Tagline
    ];

    timings.forEach(({ phase: p, delay }) => {
      const t = setTimeout(() => setPhase(p), delay);
      timerRef.current.push(t);
    });

    const done = setTimeout(onComplete, 5400);
    timerRef.current.push(done);

    return () => clearTimers();
  }, [isReturnVisit, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at 50% 45%, #13171F 0%, #0B0D12 55%, #050608 100%)',
        }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
      >
        {/* Subtle dark matte vignette and warm ambient radial lighting */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: phase >= 1 ? 1 : 0 }}
          transition={{ duration: 1.4 }}
          style={{
            background: 'radial-gradient(circle at 50% 45%, rgba(201,162,39,0.08) 0%, rgba(11,18,32,0) 65%)',
          }}
        />

        {/* Outer subtle concentric highlight rings */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '560px',
            height: '560px',
            border: '1px solid rgba(201,162,39,0.05)',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: phase >= 1 ? 1 : 0, scale: phase >= 1 ? 1 : 0.8 }}
          transition={{ duration: 1.6 }}
        />

        {/* Central Brand Showcase Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
            maxWidth: '680px',
          }}
        >
          {/* ========================================================= */}
          {/* ELEGANT CREST WITH ANIMATED SCALES OF JUSTICE */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            animate={{
              opacity: phase >= 1 ? 1 : 0,
              scale: phase >= 1 ? 1 : 0.88,
              y: phase >= 1 ? 0 : 16,
            }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: '18px' }}
          >
            <CrestEmblem
              size={290}
              animated={phase >= 2}
              showCurvedText={true}
            />
          </motion.div>

          {/* ========================================================= */}
          {/* REFINED 3D GOLD-EMBOSSED TYPOGRAPHY: BL ASSOCIATE */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{
              opacity: phase >= 3 ? 1 : 0,
              y: phase >= 3 ? 0 : 22,
            }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            style={{ marginBottom: '10px' }}
          >
            <h1
              style={{
                fontFamily: 'Cormorant Garamond, "Cinzel", serif',
                fontSize: 'clamp(38px, 5.5vw, 56px)',
                fontWeight: 600,
                letterSpacing: '0.15em',
                lineHeight: 1.05,
                margin: 0,
                background: 'linear-gradient(180deg, #FFF6D4 0%, #E8C868 28%, #C99E2F 54%, #8F670F 78%, #D4AF37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.95)) drop-shadow(0 0 20px rgba(212,175,55,0.22))',
              }}
            >
              BL ASSOCIATE
            </h1>
          </motion.div>

          {/* ========================================================= */}
          {/* BALANCED HIERARCHY: ADVOCATES • LEGAL CONSULTANTS */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{
              opacity: phase >= 4 ? 1 : 0,
              y: phase >= 4 ? 0 : 14,
            }}
            transition={{ duration: 0.75, delay: 0.15 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(10px, 1.2vw, 12px)',
              letterSpacing: '0.36em',
              color: '#C9A227',
              fontWeight: 500,
              textTransform: 'uppercase',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            ADVOCATES • LEGAL CONSULTANTS
          </motion.div>

          {/* ========================================================= */}
          {/* ORNAMENTAL TAPERED DIVIDER WITH CENTERED DIAMOND */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{
              opacity: phase >= 5 ? 1 : 0,
              scaleX: phase >= 5 ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              width: '100%',
              margin: '22px 0 16px',
            }}
          >
            {/* Left tapered line */}
            <div
              style={{
                width: '120px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.75))',
              }}
            />
            {/* Center heraldic diamond */}
            <div
              style={{
                width: '7px',
                height: '7px',
                transform: 'rotate(45deg)',
                background: '#D4AF37',
                boxShadow: '0 0 10px rgba(212,175,55,0.7)',
              }}
            />
            {/* Right tapered line */}
            <div
              style={{
                width: '120px',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(201,162,39,0.75), transparent)',
              }}
            />
          </motion.div>

          {/* ========================================================= */}
          {/* GRACEFUL ITALIC SCRIPT TAGLINE */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{
              opacity: phase >= 5 ? 1 : 0,
              y: phase >= 5 ? 0 : 12,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(18px, 2.2vw, 24px)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'rgba(235, 218, 178, 0.88)',
              letterSpacing: '0.04em',
              textShadow: '0 2px 10px rgba(0,0,0,0.9)',
            }}
          >
            Integrity in Counsel. Strategy in Action.
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
