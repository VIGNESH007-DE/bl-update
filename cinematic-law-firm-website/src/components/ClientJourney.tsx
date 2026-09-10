import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    title: 'Understand',
    desc: 'We begin by carefully listening to the client\'s concern and understanding the legal situation fully — without assumptions.',
    icon: '👂',
  },
  {
    number: '02',
    title: 'Analyse',
    desc: 'We examine the relevant facts, documents and legal issues, researching applicable statutes, precedents and procedural requirements.',
    icon: '🔍',
  },
  {
    number: '03',
    title: 'Strategize',
    desc: 'Having understood and analysed the matter, we develop an appropriate legal approach that balances effectiveness with the client\'s objectives.',
    icon: '♟',
  },
  {
    number: '04',
    title: 'Represent',
    desc: 'We provide professional representation and ongoing legal support throughout the matter, keeping the client informed at every stage.',
    icon: '⚖',
  },
];

export default function ClientJourney() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{
      padding: '140px 0',
      background: 'linear-gradient(180deg, #080808 0%, #0B1220 50%, #080808 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}
          >
            <div style={{ width: '40px', height: '1px', background: '#C9A227' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.3em', color: '#C9A227', fontWeight: 500 }}>
              HOW WE WORK
            </span>
            <div style={{ width: '40px', height: '1px', background: '#C9A227' }} />
          </motion.div>

          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '100%', opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(32px, 5vw, 64px)',
                fontWeight: 300,
                color: '#F6F1E7',
                lineHeight: 1.1,
              }}
            >
              The Client Journey
            </motion.h2>
          </div>
        </div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>

          {/* Connecting gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.4 }}
            style={{
              position: 'absolute',
              top: '40px',
              left: '10%', right: '10%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #C9A227, transparent)',
              transformOrigin: 'left',
              display: 'none',
            }}
            className="hidden md:block"
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '32px',
          }}>
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                style={{
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                {/* Step circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15, type: 'spring' }}
                  style={{
                    width: '80px', height: '80px',
                    border: '1px solid rgba(201,162,39,0.4)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 24px',
                    position: 'relative',
                    background: 'rgba(11,18,32,0.8)',
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    style={{
                      position: 'absolute', inset: '6px',
                      border: '1px dashed rgba(201,162,39,0.15)',
                      borderRadius: '50%',
                    }}
                  />
                  <span style={{ fontSize: '24px', lineHeight: 1 }}>{step.icon}</span>
                </motion.div>

                {/* Step number */}
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '48px',
                  fontWeight: 300,
                  color: 'rgba(201,162,39,0.1)',
                  lineHeight: 1,
                  position: 'absolute',
                  top: '0', left: '50%',
                  transform: 'translateX(-50%)',
                  userSelect: 'none',
                }}>
                  {step.number}
                </div>

                {/* Title */}
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '28px',
                  fontWeight: 500,
                  color: '#F6F1E7',
                  marginBottom: '16px',
                }}>
                  {step.title}
                </div>

                {/* Gold line */}
                <div style={{ width: '24px', height: '1px', background: '#C9A227', margin: '0 auto 16px' }} />

                {/* Description */}
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  lineHeight: 1.8,
                  color: 'rgba(168,168,168,0.8)',
                  fontWeight: 300,
                }}>
                  {step.desc}
                </p>

                {/* Connector arrow (hidden on mobile) */}
                {i < STEPS.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '38px', right: '-18px',
                      color: 'rgba(201,162,39,0.3)',
                      fontSize: '16px',
                      display: 'none',
                    }}
                    className="hidden md:block"
                  >
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
