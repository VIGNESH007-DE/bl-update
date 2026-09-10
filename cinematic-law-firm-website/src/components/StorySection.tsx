import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const paragraphs = [
  "Being a first-generation lawyer is more than a professional distinction — it represents a journey built through determination, perseverance and a commitment to the legal profession.",
  "With no family legacy in law to rely upon, our journey has been shaped by hard work, continuous learning and practical experience before the Courts. Every matter handled has strengthened our understanding of the law and deepened our commitment to providing sincere, strategic and effective legal representation.",
  "We believe that the practice of law is not merely about appearing before a Court. It is about understanding a client's concerns, analysing the legal issues, developing a sound strategy and standing firmly for the client's rights.",
];

function AnimatedWord({ children, delay }: { children: React.ReactElement; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function StorySection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="story"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '140px 0',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #080808 0%, #0B1220 60%, #080808 100%)',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '-10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(201,162,39,0.04) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>

        {/* Large decorative text */}
        <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Left — large typography */}
          <div style={{ flex: '0 0 auto', maxWidth: '420px' }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(72px, 10vw, 160px)',
                fontWeight: 300,
                lineHeight: 0.85,
                color: 'rgba(201,162,39,0.08)',
                letterSpacing: '-0.04em',
                userSelect: 'none',
              }}>
                FIRST
              </div>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(72px, 10vw, 160px)',
                fontWeight: 300,
                lineHeight: 0.85,
                color: 'rgba(201,162,39,0.08)',
                letterSpacing: '-0.04em',
                userSelect: 'none',
                marginLeft: '20px',
              }}>
                GENE-
              </div>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(72px, 10vw, 160px)',
                fontWeight: 300,
                lineHeight: 0.85,
                color: 'rgba(201,162,39,0.08)',
                letterSpacing: '-0.04em',
                userSelect: 'none',
              }}>
                RATION
              </div>
            </motion.div>

            {/* Gold accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                width: '80px', height: '2px',
                background: '#C9A227',
                transformOrigin: 'left',
                marginTop: '24px',
                marginLeft: '20px',
              }}
            />
          </div>

          {/* Right — story content */}
          <div style={{ flex: 1, minWidth: '300px', paddingTop: '20px' }}>
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: '#C9A227',
                marginBottom: '24px',
                fontWeight: 500,
              }}
            >
              OUR JOURNEY
            </motion.div>

        {/* Title */}
        <div style={{ marginBottom: '40px' }}>
          <AnimatedWord delay={0.2}>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(30px, 4vw, 52px)',
              fontWeight: 400,
              color: '#F6F1E7',
              lineHeight: 1.1,
              display: 'block',
            }}>
              A First-Generation Lawyer.
            </span>
          </AnimatedWord>
          <AnimatedWord delay={0.35}>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(30px, 4vw, 52px)',
              fontWeight: 400,
              color: '#C9A227',
              fontStyle: 'italic',
              lineHeight: 1.1,
              display: 'block',
            }}>
              A Journey Built on Determination.
            </span>
          </AnimatedWord>
        </div>

            {/* Paragraphs */}
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.2 }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  lineHeight: 1.9,
                  color: 'rgba(168,168,168,0.9)',
                  marginBottom: '24px',
                  fontWeight: 300,
                }}
              >
                {para}
              </motion.p>
            ))}

            {/* Gold divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              style={{
                width: '100%', height: '1px',
                background: 'linear-gradient(90deg, rgba(201,162,39,0.5), transparent)',
                transformOrigin: 'left',
                margin: '40px 0',
              }}
            />

            {/* Principle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              style={{
                borderLeft: '2px solid #C9A227',
                paddingLeft: '28px',
                marginBottom: '36px',
              }}
            >
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: '#C9A227',
                marginBottom: '12px',
                fontWeight: 500,
              }}>
                OUR PRINCIPLE
              </div>
              <blockquote style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#F6F1E7',
                lineHeight: 1.6,
              }}>
                "Earn trust through integrity, pursue justice through knowledge, and build excellence through experience."
              </blockquote>
            </motion.div>

            {/* First-Generation Advocates Spotlight */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
              style={{
                padding: '24px',
                background: 'rgba(14,14,14,0.7)',
                border: '1px solid rgba(201,162,39,0.2)',
                borderRadius: '2px',
              }}
            >
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.25em',
                color: '#C9A227',
                marginBottom: '16px',
                fontWeight: 600,
              }}>
                FIRST-GENERATION ADVOCATES & PRACTICE TEAM
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                <div style={{
                  padding: '12px 16px',
                  background: 'rgba(201,162,39,0.06)',
                  border: '1px solid rgba(201,162,39,0.25)',
                  borderRadius: '2px',
                }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: 600, color: '#F6F1E7' }}>
                    S. Nataraj
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#C9A227', marginTop: '2px' }}>
                    Partner • Madras High Court
                  </div>
                </div>

                {/* Keerthana S & Santhosh Kumar A. positioned side by side */}
                <div style={{
                  padding: '12px 16px',
                  background: 'rgba(201,162,39,0.08)',
                  border: '1px solid rgba(201,162,39,0.3)',
                  borderRadius: '2px',
                }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: 600, color: '#F6F1E7' }}>
                    Keerthana S
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#C9A227', marginTop: '2px' }}>
                    Associate Advocate
                  </div>
                </div>

                <div style={{
                  padding: '12px 16px',
                  background: 'rgba(201,162,39,0.08)',
                  border: '1px solid rgba(201,162,39,0.3)',
                  borderRadius: '2px',
                }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: 600, color: '#F6F1E7' }}>
                    Santhosh Kumar A.
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#C9A227', marginTop: '2px' }}>
                    Associate Advocate
                  </div>
                </div>

                <div style={{
                  padding: '12px 16px',
                  background: 'rgba(201,162,39,0.04)',
                  border: '1px solid rgba(201,162,39,0.15)',
                  borderRadius: '2px',
                }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: 600, color: '#F6F1E7' }}>
                    M. Santhosh Priya Bharathraj
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(168,168,168,0.7)', marginTop: '2px' }}>
                    Associate Advocate
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
