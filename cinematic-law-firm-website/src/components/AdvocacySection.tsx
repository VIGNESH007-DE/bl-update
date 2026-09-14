import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AdvocacySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{
      padding: '140px 0',
      background: 'linear-gradient(180deg, #080808 0%, #0B1220 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background document lines */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04, pointerEvents: 'none' }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={i} x1="15%" y1={`${5 + i * 5}%`} x2="85%" y2={`${5 + i * 5}%`}
            stroke="#C9A227" strokeWidth="0.5" />
        ))}
      </svg>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>

        <div style={{ display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap' }}>

          {/* Left — visual document */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            style={{ flex: '0 0 auto' }}
          >
            <div style={{
              width: 'clamp(240px, 28vw, 360px)',
              background: 'rgba(14,14,14,0.95)',
              border: '1px solid rgba(201,162,39,0.2)',
              padding: '40px 36px',
              position: 'relative',
            }}>
              {/* Corner marks */}
              {[
                { top: -2, left: -2 }, { top: -2, right: -2 },
                { bottom: -2, left: -2 }, { bottom: -2, right: -2 },
              ].map((pos, i) => (
                <div key={i} style={{
                  position: 'absolute', width: '12px', height: '12px',
                  ...pos,
                  border: '2px solid rgba(201,162,39,0.4)',
                }} />
              ))}

              {/* Document header */}
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '13px',
                letterSpacing: '0.15em',
                color: '#C9A227',
                marginBottom: '20px',
                borderBottom: '1px solid rgba(201,162,39,0.2)',
                paddingBottom: '16px',
              }}>
                LEGAL
              </div>

              {/* Simulated document lines */}
              {[85, 100, 72, 90, 65, 100, 80, 55].map((w, i) => (
                <div key={i} style={{
                  height: '1px',
                  background: 'rgba(201,162,39,0.15)',
                  width: `${w}%`,
                  marginBottom: '12px',
                }} />
              ))}

              <div style={{ margin: '20px 0', borderLeft: '2px solid rgba(201,162,39,0.3)', paddingLeft: '12px' }}>
                {[90, 75, 100].map((w, i) => (
                  <div key={i} style={{
                    height: '1px',
                    background: 'rgba(201,162,39,0.2)',
                    width: `${w}%`,
                    marginBottom: '10px',
                  }} />
                ))}
              </div>

              {[100, 85, 70, 95].map((w, i) => (
                <div key={i} style={{
                  height: '1px',
                  background: 'rgba(201,162,39,0.12)',
                  width: `${w}%`,
                  marginBottom: '12px',
                }} />
              ))}

              {/* Signature line */}
              <div style={{ marginTop: '24px', borderTop: '1px solid rgba(201,162,39,0.2)', paddingTop: '16px' }}>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '12px',
                  color: 'rgba(201,162,39,0.5)',
                  letterSpacing: '0.1em',
                }}>
                  S. NATARAJ<br />
                  <span style={{ fontSize: '10px', color: 'rgba(168,168,168,0.4)' }}>BL ASSOCIATE, HIGH COURT OF MADRAS</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — content */}
          <div style={{ flex: 1, minWidth: '280px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}
            >
              <div style={{ width: '40px', height: '1px', background: '#C9A227' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.3em', color: '#C9A227', fontWeight: 500 }}>
                REPRESENTATIVE WORK
              </span>
            </motion.div>

            <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
              <motion.h2
                initial={{ y: '100%', opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(30px, 4.5vw, 56px)',
                  fontWeight: 300,
                  color: '#F6F1E7',
                  lineHeight: 1.1,
                }}
              >
                Advocacy Beyond
              </motion.h2>
            </div>
            <div style={{ overflow: 'hidden', marginBottom: '32px' }}>
              <motion.h2
                initial={{ y: '100%', opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(30px, 4.5vw, 56px)',
                  fontWeight: 300,
                  color: '#C9A227',
                  fontStyle: 'italic',
                  lineHeight: 1.1,
                }}
              >
                the Courtroom
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                lineHeight: 1.9,
                color: 'rgba(168,168,168,0.85)',
                marginBottom: '40px',
                fontWeight: 300,
              }}
            >
              Legal representation extends beyond appearances before the Court — from strategic
              notices to dispute resolution and enforcement of legal rights. Whether drafting
              precise legal notices, conducting pre-litigation negotiations, or advising on
              regulatory compliance, every engagement is approached with the same rigour and
              professionalism.
            </motion.p>

            {/* Feature points */}
            {[
              { title: 'Strategic Legal Notices', desc: 'Precise, legally sound notices crafted to protect client interests.' },
              { title: 'Pre-Litigation Advisory', desc: 'Careful analysis before formal proceedings to identify the best approach.' },
              { title: 'IPR Enforcement', desc: 'Protection and enforcement of intellectual property rights including copyright and trademark matters.' },
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}
              >
                <div style={{
                  flexShrink: 0,
                  width: '1px', height: '100%',
                  background: '#C9A227',
                  alignSelf: 'stretch',
                }} />
                <div>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#F6F1E7',
                    marginBottom: '4px',
                  }}>{point.title}</div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: 'rgba(168,168,168,0.7)',
                    lineHeight: 1.6,
                  }}>{point.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
