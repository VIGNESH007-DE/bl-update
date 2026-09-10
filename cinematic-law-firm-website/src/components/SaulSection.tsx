import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SaulSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="saul-section"
      style={{
        padding: '140px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Venetian blinds overlay */}
      <div className="saul-venetian" />

      {/* Yellow-green ambient light */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-20%', left: '-10%',
          width: '60%', height: '100%',
          background: 'radial-gradient(ellipse at 30% 50%, rgba(180,200,30,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Film grain effect */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
        opacity: 0.3,
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Film strip - top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '24px',
        background: '#060a04',
        borderBottom: '1px solid rgba(180,200,30,0.1)',
        display: 'flex', alignItems: 'center', overflow: 'hidden',
        zIndex: 2,
      }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} style={{
            flexShrink: 0, width: '14px', height: '10px', marginRight: '8px',
            border: '1px solid rgba(180,200,30,0.15)', borderRadius: '2px',
            background: i % 3 === 0 ? 'rgba(180,200,30,0.05)' : 'transparent',
          }} />
        ))}
      </div>

      {/* Film strip - bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '24px',
        background: '#060a04',
        borderTop: '1px solid rgba(180,200,30,0.1)',
        display: 'flex', alignItems: 'center', overflow: 'hidden',
        zIndex: 2,
      }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} style={{
            flexShrink: 0, width: '14px', height: '10px', marginRight: '8px',
            border: '1px solid rgba(180,200,30,0.15)', borderRadius: '2px',
          }} />
        ))}
      </div>

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 5,
        maxWidth: '1400px', margin: '0 auto', padding: '0 40px',
      }}>

        {/* Film title card style header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          {/* Film frame counter */}
          <div style={{
            fontFamily: 'Inter, monospace',
            fontSize: '10px',
            color: 'rgba(180,200,30,0.3)',
            letterSpacing: '0.3em',
            marginBottom: '16px',
          }}>
            [FRAME 001] — EDITORIAL
          </div>

          {/* Heading: Better Call Saul (struck out) Us */}
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 5.5vw, 68px)',
            fontWeight: 300,
            color: '#F6F1E7',
            letterSpacing: '-0.01em',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}>
            Better Call{' '}
            <span style={{
              position: 'relative',
              display: 'inline-block',
              color: 'rgba(210,230,140,0.35)',
              textDecoration: 'line-through',
              textDecorationColor: '#e05353',
              textDecorationThickness: '3px',
              marginRight: '12px',
            }}>
              Saul
            </span>
            <span style={{
              color: '#C9A227',
              fontStyle: 'italic',
              fontWeight: 400,
            }}>
              Us
            </span>
          </h2>

          {/* Subtitle card */}
          <div style={{
            display: 'inline-block',
            border: '1px solid rgba(180,200,30,0.2)',
            padding: '8px 24px',
            background: 'rgba(0,0,0,0.5)',
          }}>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '9px',
              letterSpacing: '0.4em',
              color: 'rgba(180,200,30,0.6)',
              fontWeight: 500,
            }}>
              INSPIRED BY BETTER CALL SAUL
            </div>
          </div>
        </motion.div>

        <div style={{ display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap' }}>

          {/* Left — cinematic quote panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            style={{ flex: '0 0 auto', maxWidth: '480px' }}
          >
            {/* Desaturated/faded TV-style text */}
            <div style={{
              position: 'relative',
              padding: '48px',
              border: '1px solid rgba(180,200,30,0.12)',
              background: 'rgba(4,8,2,0.85)',
            }}>
              {/* Corner film marks */}
              {[
                { top: 8, left: 8 }, { top: 8, right: 8 },
                { bottom: 8, left: 8 }, { bottom: 8, right: 8 },
              ].map((pos, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  width: '16px', height: '16px',
                  ...pos,
                  borderTop: i < 2 ? '1px solid rgba(180,200,30,0.3)' : 'none',
                  borderBottom: i >= 2 ? '1px solid rgba(180,200,30,0.3)' : 'none',
                  borderLeft: i % 2 === 0 ? '1px solid rgba(180,200,30,0.3)' : 'none',
                  borderRight: i % 2 !== 0 ? '1px solid rgba(180,200,30,0.3)' : 'none',
                }} />
              ))}

              {/* Quote mark */}
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '80px',
                lineHeight: 0.6,
                color: 'rgba(180,200,30,0.12)',
                marginBottom: '24px',
                userSelect: 'none',
              }}>"</div>

              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(18px, 2.5vw, 26px)',
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'rgba(210,230,140,0.85)',
                lineHeight: 1.6,
                marginBottom: '32px',
                filter: 'sepia(40%) brightness(0.9)',
              }}>
                "It's not about what you know. It's about what you can prove."
              </p>

              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: 'rgba(180,200,30,0.4)',
                borderTop: '1px solid rgba(180,200,30,0.1)',
                paddingTop: '16px',
              }}>
                — JIMMY MCGILL / SAUL GOODMAN
              </div>
            </div>
          </motion.div>

          {/* Right — content */}
          <div style={{ flex: 1, minWidth: '280px' }}>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '32px' }}
            >
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: 'rgba(180,200,30,0.5)',
                marginBottom: '16px',
                fontWeight: 500,
              }}>
                FROM FICTION TO PRINCIPLE
              </div>

              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 300,
                color: 'rgba(210,230,200,0.9)',
                lineHeight: 1.15,
                marginBottom: '16px',
                filter: 'sepia(20%) brightness(0.9)',
              }}>
                The Law, as Drama.<br />
                <span style={{ color: 'rgba(180,200,30,0.7)', fontStyle: 'italic' }}>The Craft, as Reality.</span>
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ marginBottom: '32px' }}
            >
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(13px, 1.5vw, 15px)',
                lineHeight: 1.9,
                color: 'rgba(180,190,150,0.7)',
                fontWeight: 300,
                marginBottom: '20px',
                filter: 'sepia(15%)',
              }}>
                Better Call Saul captured something rarely seen in popular culture — the unglamorous, demanding, human reality of legal practice. The late nights. The difficult clients. The moments when the right answer and the easy answer are not the same thing.
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(13px, 1.5vw, 15px)',
                lineHeight: 1.9,
                color: 'rgba(180,190,150,0.7)',
                fontWeight: 300,
                filter: 'sepia(15%)',
              }}>
                At BL Associate, we hold to a different standard — one built not on theatrical manoeuvre, but on integrity, careful preparation and honest counsel. The drama may be fiction. The commitment to the client is real.
              </p>
            </motion.div>

            {/* The contrast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                border: '1px solid rgba(180,200,30,0.15)',
                padding: '24px',
                background: 'rgba(4,8,2,0.6)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    color: 'rgba(180,200,30,0.4)',
                    marginBottom: '8px',
                    textDecoration: 'line-through',
                  }}>
                    SAUL'S WAY
                  </div>
                  {['Bend the rules', 'Outmanoeuvre', 'Win at any cost'].map((item) => (
                    <div key={item} style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      color: 'rgba(180,190,150,0.4)',
                      marginBottom: '6px',
                      textDecoration: 'line-through',
                    }}>
                      {item}
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    color: 'rgba(201,162,39,0.8)',
                    marginBottom: '8px',
                  }}>
                    OUR WAY
                  </div>
                  {['Uphold the law', 'Prepare thoroughly', 'Serve with integrity'].map((item) => (
                    <div key={item} style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      color: 'rgba(246,241,231,0.7)',
                      marginBottom: '6px',
                    }}>
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
