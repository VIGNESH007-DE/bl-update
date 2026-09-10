import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const words = ['Strategic Legal Counsel.', 'Strong Representation.', 'Trusted Advocacy.'];

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const y = window.scrollY * 0.4;
        parallaxRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const el = document.getElementById('practice');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 20% 50%, #0B1220 0%, #080808 60%)',
      }}
    >
      {/* Background image with parallax */}
      <div
        style={{
          position: 'absolute', inset: '-20%',
          overflow: 'hidden', zIndex: 0,
        }}
      >
        <div ref={parallaxRef} style={{ width: '100%', height: '140%' }}>
          <img
            src="/images/hero-courthouse.jpg"
            alt="Cinematic courthouse interior"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.25) contrast(1.1) saturate(0.8)',
            }}
          />
        </div>
      </div>

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(135deg, rgba(8,8,8,0.85) 0%, rgba(11,18,32,0.7) 50%, rgba(8,8,8,0.9) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'radial-gradient(ellipse at 20% 50%, rgba(201,162,39,0.05) 0%, transparent 60%)',
      }} />
      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', zIndex: 3,
        background: 'linear-gradient(transparent, #080808)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: '1400px', margin: '0 auto',
        padding: '160px 40px 100px',
        width: '100%',
      }}>
        {/* Gold vertical line + label */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px', marginBottom: '48px' }}>
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            style={{
              width: '2px', height: '80px',
              background: 'linear-gradient(180deg, #C9A227, rgba(201,162,39,0.1))',
              transformOrigin: 'top',
              flexShrink: 0,
              marginTop: '4px',
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.3em',
              color: '#C9A227',
              fontWeight: 500,
              marginBottom: '4px',
            }}>
              BL ASSOCIATE / ADVOCATES
            </div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: 'rgba(246,241,231,0.4)',
              fontWeight: 400,
            }}>
              MADRAS HIGH COURT
            </div>
          </motion.div>
        </div>

        {/* Headline */}
        <div style={{ maxWidth: '900px' }}>
          {words.map((word, i) => (
            <div key={i} style={{ overflow: 'hidden', marginBottom: '8px' }}>
              <motion.h1
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7 + i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(40px, 6vw, 88px)',
                  fontWeight: 300,
                  lineHeight: 1.05,
                  color: i === 0 ? '#F6F1E7' : i === 1 ? 'rgba(246,241,231,0.85)' : '#C9A227',
                  letterSpacing: '-0.01em',
                }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            lineHeight: 1.75,
            color: 'rgba(168,168,168,0.9)',
            maxWidth: '560px',
            marginTop: '32px',
            fontWeight: 300,
          }}
        >
          BL Associate provides professional legal representation and advisory services
          across diverse areas of law, combining rigorous legal analysis, practical
          strategy and a commitment to the interests of every client.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          style={{ display: 'flex', gap: '16px', marginTop: '48px', flexWrap: 'wrap' }}
        >
          <motion.button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-gold"
            style={{
              padding: '16px 36px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              letterSpacing: '0.15em',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '2px',
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            BOOK A CONSULTATION
          </motion.button>
          <motion.button
            onClick={() => {
              const el = document.getElementById('practice');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-ghost"
            style={{
              padding: '16px 36px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              letterSpacing: '0.15em',
              cursor: 'pointer',
              borderRadius: '2px',
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            EXPLORE PRACTICE AREAS
          </motion.button>
        </motion.div>

        {/* Micro text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          style={{
            marginTop: '32px',
            display: 'flex', alignItems: 'center', gap: '12px',
          }}
        >
          <div style={{
            width: '24px', height: '1px',
            background: 'rgba(201,162,39,0.5)',
          }} />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'rgba(168,168,168,0.7)',
          }}>
            OFFICES IN CHENNAI & CHIDAMBARAM • SERVING CLIENTS ACROSS TAMIL NADU
          </span>
        </motion.div>
      </div>

      {/* Animated gold light at bottom */}
      <motion.div
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
        style={{
          position: 'absolute', bottom: '40px', left: 0,
          width: '200px', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.6), transparent)',
          zIndex: 10,
        }}
      />

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        style={{
          position: 'absolute', bottom: '32px', left: '50%',
          transform: 'translateX(-50%)',
          background: 'none', border: 'none', cursor: 'pointer',
          zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        }}
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} color="rgba(201,162,39,0.6)" />
        </motion.div>
      </motion.button>
    </section>
  );
}
