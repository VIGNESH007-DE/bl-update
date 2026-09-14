import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} style={{ padding: '140px 0', background: '#080808', position: 'relative', overflow: 'hidden' }}>

      {/* Background accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '40%', height: '100%',
        background: 'linear-gradient(270deg, rgba(11,18,32,0.8) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '5%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(201,162,39,0.04) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}
        >
          <div style={{ width: '40px', height: '1px', background: '#C9A227' }} />
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.3em', color: '#C9A227', fontWeight: 500 }}>
            FOUNDING PARTNER
          </span>
        </motion.div>

        <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            style={{ flex: '0 0 auto' }}
          >
            <div style={{
              width: 'clamp(240px, 25vw, 320px)',
              aspectRatio: '3/4',
              background: 'linear-gradient(135deg, #111 0%, #1a1f2e 100%)',
              border: '1px solid rgba(201,162,39,0.2)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Placeholder portrait */}
              <div style={{
                width: '100%', height: '100%',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: '16px',
              }}>
                <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
                  <circle cx="40" cy="30" r="20" stroke="rgba(201,162,39,0.3)" strokeWidth="1" />
                  <path d="M 10 80 Q 10 55 40 55 Q 70 55 70 80" stroke="rgba(201,162,39,0.3)" strokeWidth="1" fill="none" />
                </svg>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  color: 'rgba(201,162,39,0.4)',
                  letterSpacing: '0.2em',
                  textAlign: 'center',
                  padding: '0 16px',
                }}>
                  PROFESSIONAL<br />PORTRAIT
                </div>
              </div>

              {/* Corner accent */}
              <div style={{
                position: 'absolute', bottom: 0, right: 0,
                width: '40px', height: '40px',
                borderRight: '2px solid rgba(201,162,39,0.4)',
                borderBottom: '2px solid rgba(201,162,39,0.4)',
              }} />
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: '40px', height: '40px',
                borderLeft: '2px solid rgba(201,162,39,0.4)',
                borderTop: '2px solid rgba(201,162,39,0.4)',
              }} />
            </div>

            {/* Name card below portrait */}
            <div style={{
              marginTop: '20px',
              borderLeft: '2px solid #C9A227',
              paddingLeft: '16px',
            }}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '24px',
                fontWeight: 500,
                color: '#F6F1E7',
              }}>S. Nataraj</div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                color: '#C9A227',
                letterSpacing: '0.15em',
                marginTop: '4px',
              }}>B.A. LL.B. Hons. | Partner</div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                color: 'rgba(168,168,168,0.7)',
                marginTop: '4px',
              }}>BL Associate, High Court of Madras</div>
            </div>
          </motion.div>

          {/* Content */}
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
              <motion.h2
                initial={{ y: '100%', opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  fontWeight: 300,
                  color: '#F6F1E7',
                  lineHeight: 1.05,
                }}
              >
                S. Nataraj
              </motion.h2>
            </div>
            <div style={{ overflow: 'hidden', marginBottom: '40px' }}>
              <motion.div
                initial={{ y: '100%', opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.35 }}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(18px, 2.5vw, 26px)',
                  fontStyle: 'italic',
                  color: '#C9A227',
                }}
              >
                BL Associate, High Court of Madras
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                lineHeight: 1.9,
                color: 'rgba(168,168,168,0.9)',
                marginBottom: '40px',
                fontWeight: 300,
              }}
            >
              S. Nataraj's practice has been shaped by determination,
              continuous learning and practical experience before the Courts. His approach combines rigorous
              legal analysis with practical strategy, ensuring that every client receives focused and
              professional representation.
            </motion.p>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{
                padding: '32px',
                background: 'rgba(17,17,17,0.8)',
                border: '1px solid rgba(201,162,39,0.15)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: '3px', height: '100%',
                background: 'linear-gradient(180deg, #C9A227, transparent)',
              }} />
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: '#C9A227',
                marginBottom: '16px',
                fontWeight: 500,
              }}>
                APPROACH
              </div>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(16px, 2vw, 22px)',
                fontStyle: 'italic',
                color: '#F6F1E7',
                lineHeight: 1.7,
              }}>
                "Every legal matter begins with understanding. Every strategy begins with careful analysis.
                Every representation should be grounded in integrity."
              </p>
            </motion.div>

            {/* Specializations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{ marginTop: '32px' }}
            >
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: '#C9A227',
                marginBottom: '16px',
                fontWeight: 500,
              }}>
                AREAS OF FOCUS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['High Court Litigation', 'Writ Petitions', 'Civil Law', 'Criminal Law', 'IPR', 'Commercial Matters'].map((spec) => (
                  <span key={spec} style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    color: 'rgba(246,241,231,0.7)',
                    border: '1px solid rgba(201,162,39,0.2)',
                    padding: '5px 12px',
                    letterSpacing: '0.05em',
                  }}>
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
