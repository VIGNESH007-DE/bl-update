import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
  isReturnVisit: boolean;
}

export default function Intro({ onComplete, isReturnVisit }: IntroProps) {
  const [phase, setPhase] = useState(0);
  const [skipped, setSkipped] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => timerRef.current.forEach(clearTimeout);

  const skip = () => {
    setSkipped(true);
    clearTimers();
    setTimeout(onComplete, 600);
  };

  useEffect(() => {
    if (isReturnVisit) {
      // Short 600ms logo flash for returning visitors
      setPhase(3);
      const t = setTimeout(() => {
        setPhase(6);
        setTimeout(onComplete, 700);
      }, 700);
      timerRef.current.push(t);
      return () => clearTimers();
    }

    const timings = [
      { phase: 1, delay: 300 },
      { phase: 2, delay: 900 },
      { phase: 3, delay: 1800 },
      { phase: 4, delay: 2700 },
      { phase: 5, delay: 3400 },
      { phase: 6, delay: 4200 },
    ];

    timings.forEach(({ phase: p, delay }) => {
      const t = setTimeout(() => setPhase(p), delay);
      timerRef.current.push(t);
    });

    const done = setTimeout(onComplete, 5200);
    timerRef.current.push(done);

    return () => clearTimers();
  }, [isReturnVisit, onComplete]);

  return (
    <AnimatePresence>
      {!skipped && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: '#080808' }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Ambient light */}
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: phase >= 3 ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            style={{
              background: 'radial-gradient(ellipse at center, rgba(201,162,39,0.06) 0%, transparent 70%)',
            }}
          />

          {/* Architectural lines */}
          {phase >= 2 && (
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1440 900"
              preserveAspectRatio="xMidYMid slice"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Courthouse columns - left */}
              <motion.line x1="200" y1="900" x2="200" y2="0"
                stroke="rgba(201,162,39,0.06)" strokeWidth="1"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.2 }} />
              <motion.line x1="240" y1="900" x2="240" y2="0"
                stroke="rgba(201,162,39,0.04)" strokeWidth="1"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.4 }} />
              {/* Right */}
              <motion.line x1="1240" y1="900" x2="1240" y2="0"
                stroke="rgba(201,162,39,0.06)" strokeWidth="1"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.2 }} />
              <motion.line x1="1200" y1="900" x2="1200" y2="0"
                stroke="rgba(201,162,39,0.04)" strokeWidth="1"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.4 }} />
              {/* Top arch */}
              <motion.path
                d="M 400 100 Q 720 20 1040 100"
                stroke="rgba(201,162,39,0.08)" strokeWidth="1" fill="none"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.6 }} />
              {/* Bottom line */}
              <motion.line x1="300" y1="820" x2="1140" y2="820"
                stroke="rgba(201,162,39,0.08)" strokeWidth="1"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }} />
            </motion.svg>
          )}

          {/* Golden line — phase 1 */}
          <motion.div
            className="absolute"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              style={{
                width: '2px',
                height: '120px',
                background: 'linear-gradient(180deg, transparent, #C9A227, transparent)',
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: phase >= 1 ? 1 : 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </motion.div>

          {/* Frame — phase 2 */}
          {phase >= 2 && (
            <motion.div
              className="absolute"
              style={{
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '340px', height: '200px',
                border: '1px solid rgba(201,162,39,0.2)',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Corner accents */}
              {[
                { top: -4, left: -4 },
                { top: -4, right: -4 },
                { bottom: -4, left: -4 },
                { bottom: -4, right: -4 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3"
                  style={{
                    ...pos,
                    border: '2px solid #C9A227',
                    borderRadius: '1px',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 * i, duration: 0.4 }}
                />
              ))}
            </motion.div>
          )}

          {/* Logo — phase 3 */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            style={{ gap: '24px' }}
          >
            {/* Logo placeholder / BL monogram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: phase >= 3 ? 1 : 0,
                scale: phase >= 3 ? 1 : 0.85,
              }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ position: 'relative' }}
            >
              {/* Gold shimmer sweep */}
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, transparent 0%, rgba(201,162,39,0.4) 50%, transparent 100%)',
                  zIndex: 2,
                }}
                initial={{ x: '-100%' }}
                animate={{ x: phase >= 3 ? '200%' : '-100%' }}
                transition={{ duration: 1.2, delay: 0.4 }}
              />
              {/* Logo mark */}
              <div style={{
                width: '120px', height: '120px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
              }}>
                {/* SVG Logo representation */}
                <svg viewBox="0 0 120 120" width="120" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer ring */}
                  <motion.circle cx="60" cy="60" r="56"
                    stroke="rgba(201,162,39,0.3)" strokeWidth="0.5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: phase >= 3 ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.2 }} />
                  {/* Inner ring */}
                  <motion.circle cx="60" cy="60" r="48"
                    stroke="rgba(201,162,39,0.2)" strokeWidth="0.5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: phase >= 3 ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.4 }} />
                  {/* Scales of justice */}
                  <motion.g
                    initial={{ opacity: 0 }} animate={{ opacity: phase >= 3 ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {/* Top bar */}
                    <line x1="40" y1="42" x2="80" y2="42" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Center post */}
                    <line x1="60" y1="30" x2="60" y2="85" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Left pan */}
                    <path d="M 40 42 L 33 58 Q 33 65 40 65 Q 47 65 47 58 Z" stroke="#C9A227" strokeWidth="1" fill="none" />
                    {/* Right pan */}
                    <path d="M 80 42 L 73 55 Q 73 62 80 62 Q 87 62 87 55 Z" stroke="#C9A227" strokeWidth="1" fill="none" />
                    {/* Base */}
                    <line x1="50" y1="85" x2="70" y2="85" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
                  </motion.g>
                  {/* BL text */}
                  <motion.text
                    x="60" y="106" textAnchor="middle"
                    fill="#C9A227" fontSize="9" fontFamily="Cormorant Garamond, serif"
                    letterSpacing="4"
                    initial={{ opacity: 0 }} animate={{ opacity: phase >= 3 ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    BL ASSOCIATE
                  </motion.text>
                </svg>
              </div>
            </motion.div>

            {/* Firm name — phase 4 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: phase >= 4 ? 1 : 0, y: phase >= 4 ? 0 : 20 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '38px',
                fontWeight: 300,
                letterSpacing: '0.15em',
                color: '#F6F1E7',
                lineHeight: 1,
              }}>
                BL ASSOCIATE
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: phase >= 4 ? 1 : 0, y: phase >= 4 ? 0 : 10 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.35em',
                  color: '#C9A227',
                  marginTop: '12px',
                  fontWeight: 400,
                }}
              >
                ADVOCATES • LEGAL CONSULTANTS
              </motion.div>
            </motion.div>

            {/* Gold divider */}
            {phase >= 4 && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  width: '160px', height: '1px',
                  background: 'linear-gradient(90deg, transparent, #C9A227, transparent)',
                }}
              />
            )}

            {/* Tagline — phase 5 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: phase >= 5 ? 1 : 0, y: phase >= 5 ? 0 : 15 }}
              transition={{ duration: 0.8 }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '16px',
                fontStyle: 'italic',
                color: 'rgba(246,241,231,0.7)',
                letterSpacing: '0.05em',
                textAlign: 'center',
              }}
            >
              "Integrity in Counsel. Strategy in Action."
            </motion.div>
          </motion.div>

              {/* Skip button */}
          {!isReturnVisit && (
            <motion.button
              onClick={skip}
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 2 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '32px',
                right: '32px',
                background: 'transparent',
                border: '1px solid rgba(201,162,39,0.3)',
                color: 'rgba(246,241,231,0.6)',
                padding: '8px 20px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.15em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              whileHover={{
                borderColor: 'rgba(201,162,39,0.8)',
                color: '#C9A227',
              }}
            >
              SKIP INTRO
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
