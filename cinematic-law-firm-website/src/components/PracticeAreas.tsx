import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/constants';

export default function PracticeAreas() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState<typeof PRACTICE_AREAS[0] | null>(null);

  return (
    <section id="practice" ref={ref} style={{ padding: '140px 0', background: '#080808', position: 'relative', overflow: 'hidden' }}>

      {/* Ambient */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '800px', height: '800px',
        background: 'radial-gradient(circle, rgba(201,162,39,0.03) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}
          >
            <div style={{ width: '40px', height: '1px', background: '#C9A227' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.3em', color: '#C9A227', fontWeight: 500 }}>
              LEGAL SERVICES
            </span>
          </motion.div>

          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '100%', opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(36px, 5vw, 72px)',
                fontWeight: 300,
                color: '#F6F1E7',
                lineHeight: 1.05,
                marginBottom: '16px',
              }}
            >
              Areas of Practice
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              color: 'rgba(168,168,168,0.8)',
              maxWidth: '560px',
              lineHeight: 1.7,
            }}
          >
            Focused legal assistance across litigation, dispute resolution, advisory and transactional matters.
          </motion.p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          background: 'rgba(201,162,39,0.08)',
          border: '1px solid rgba(201,162,39,0.08)',
        }}>
          {PRACTICE_AREAS.map((area, i) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * (i % 8) }}
              className="practice-card"
              onClick={() => setSelected(area)}
              style={{
                background: '#080808',
                padding: '36px 28px',
                border: '1px solid transparent',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              whileHover={{
                background: '#0e0e0e',
                borderColor: 'rgba(201,162,39,0.3)',
              }}
            >
              {/* Number */}
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '40px',
                fontWeight: 300,
                color: 'rgba(201,162,39,0.15)',
                lineHeight: 1,
                marginBottom: '16px',
              }}>
                {area.id}
              </div>

              {/* Icon */}
              <div style={{ fontSize: '24px', marginBottom: '16px' }}>{area.icon}</div>

              {/* Title */}
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '20px',
                fontWeight: 500,
                color: '#F6F1E7',
                marginBottom: '12px',
                lineHeight: 1.2,
              }}>
                {area.title}
              </div>

              {/* Description */}
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                color: 'rgba(168,168,168,0.7)',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}>
                {area.description}
              </p>

              {/* Explore link */}
              <div
                className="explore-link"
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  color: '#C9A227',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                Explore <ArrowUpRight size={12} />
              </div>

              {/* Hover gold line at bottom */}
              <motion.div
                style={{
                  position: 'absolute', bottom: 0, left: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #C9A227, transparent)',
                  transformOrigin: 'left',
                  scaleX: 0,
                }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Practice Area Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 800,
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '20px',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#0e0e0e',
                border: '1px solid rgba(201,162,39,0.25)',
                maxWidth: '640px', width: '100%',
                maxHeight: '85vh', overflowY: 'auto',
                position: 'relative',
              }}
            >
              {/* Top gold line */}
              <div style={{ height: '2px', background: 'linear-gradient(90deg, #C9A227, transparent)' }} />

              <div style={{ padding: '40px' }}>
                {/* Close */}
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    position: 'absolute', top: '20px', right: '20px',
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'rgba(246,241,231,0.5)',
                  }}
                  aria-label="Close"
                >
                  <X size={20} />
                </button>

                {/* Number + Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '52px',
                    fontWeight: 300,
                    color: 'rgba(201,162,39,0.2)',
                    lineHeight: 1,
                  }}>{selected.id}</span>
                  <span style={{ fontSize: '32px' }}>{selected.icon}</span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '36px',
                  fontWeight: 400,
                  color: '#F6F1E7',
                  marginBottom: '8px',
                }}>
                  {selected.title}
                </h3>
                <div style={{ width: '40px', height: '1px', background: '#C9A227', marginBottom: '24px' }} />

                {/* Overview */}
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  color: '#C9A227',
                  marginBottom: '12px',
                  fontWeight: 500,
                }}>OVERVIEW</div>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  lineHeight: 1.8,
                  color: 'rgba(168,168,168,0.9)',
                  marginBottom: '32px',
                }}>
                  {selected.description}
                </p>

                {/* Key services */}
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  color: '#C9A227',
                  marginBottom: '16px',
                  fontWeight: 500,
                }}>KEY SERVICES</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
                  {selected.services.map((s) => (
                    <span key={s} style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      color: 'rgba(246,241,231,0.8)',
                      border: '1px solid rgba(201,162,39,0.2)',
                      padding: '6px 14px',
                      background: 'rgba(201,162,39,0.04)',
                    }}>
                      {s}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    setSelected(null);
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-gold"
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '2px',
                  }}
                >
                  REQUEST CONSULTATION
                </button>

                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  color: 'rgba(168,168,168,0.5)',
                  textAlign: 'center',
                  marginTop: '12px',
                  lineHeight: 1.5,
                }}>
                  This overview is for general information only and does not constitute legal advice.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
