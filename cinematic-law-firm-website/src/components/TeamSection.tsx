import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Award, ShieldCheck, Scale } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/constants';

export default function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedMember, setSelectedMember] = useState<typeof TEAM_MEMBERS[0] | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedMember(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="team" ref={ref} style={{ padding: '140px 0', background: 'linear-gradient(180deg, #080808 0%, #0B1220 50%, #080808 100%)', position: 'relative', overflow: 'hidden' }}>

      {/* Ambient */}
      <div style={{
        position: 'absolute', top: '30%', right: '-5%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(201,162,39,0.04) 0%, transparent 70%)',
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
              THE PRACTICE
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
              }}
            >
              Our Legal Team
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
              marginTop: '16px',
            }}
          >
            Experienced advocates committed to providing strategic counsel and steadfast representation before all Courts and Tribunals. Touch any profile to view full details.
          </motion.p>
        </div>

        {/* Team grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedMember(member)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedMember(member); }}
              style={{
                background: 'rgba(14,14,14,0.9)',
                border: '1px solid rgba(201,162,39,0.15)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              {/* Top accent */}
              <div style={{ height: '2px', background: 'linear-gradient(90deg, #C9A227, transparent)' }} />

              {/* Portrait area */}
              <div style={{
                height: '220px',
                background: 'linear-gradient(135deg, #0a0a0a 0%, #141825 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <svg viewBox="0 0 80 80" width="64" height="64" fill="none">
                  <circle cx="40" cy="28" r="18" stroke="rgba(201,162,39,0.3)" strokeWidth="1" />
                  <path d="M 8 80 Q 8 52 40 52 Q 72 52 72 80" stroke="rgba(201,162,39,0.3)" strokeWidth="1" fill="none" />
                </svg>

                {/* Partner badge */}
                {(member.role === 'Partner') && (
                  <div style={{
                    position: 'absolute', top: '16px', right: '16px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    color: '#C9A227',
                    border: '1px solid rgba(201,162,39,0.3)',
                    padding: '3px 10px',
                    background: 'rgba(201,162,39,0.08)',
                  }}>
                    PARTNER
                  </div>
                )}
              </div>

              {/* Info */}
              <div style={{ padding: '24px' }}>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '22px',
                  fontWeight: 500,
                  color: '#F6F1E7',
                  marginBottom: '4px',
                }}>
                  {member.name}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  color: '#C9A227',
                  letterSpacing: '0.1em',
                  marginBottom: '4px',
                }}>
                  {member.qualifications}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  color: 'rgba(168,168,168,0.6)',
                  marginBottom: '16px',
                }}>
                  {member.court || member.role}
                </div>

                {/* Divider */}
                <div style={{ width: '30px', height: '1px', background: 'rgba(201,162,39,0.3)', marginBottom: '16px' }} />

                {/* Specializations */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {member.specializations.slice(0, 3).map((spec) => (
                    <span key={spec} style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      color: 'rgba(246,241,231,0.6)',
                      border: '1px solid rgba(201,162,39,0.12)',
                      padding: '3px 8px',
                    }}>
                      {spec}
                    </span>
                  ))}
                  {member.specializations.length > 3 && (
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      color: 'rgba(201,162,39,0.8)',
                    }}>
                      +{member.specializations.length - 3} more
                    </span>
                  )}
                </div>

                {/* View profile prompt */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  color: '#C9A227',
                  letterSpacing: '0.05em',
                  fontWeight: 500,
                  marginTop: '8px',
                }}>
                  <span>View Profile</span>
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Member Detail Pop-up Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            key="team-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedMember(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 850,
              background: 'rgba(4, 6, 8, 0.88)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#0d1015',
                border: '1px solid rgba(201,162,39,0.35)',
                maxWidth: '680px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 25px 70px rgba(0,0,0,0.8), 0 0 40px rgba(201,162,39,0.15)',
              }}
            >
              {/* Top gold bar */}
              <div style={{ height: '3px', background: 'linear-gradient(90deg, #C9A227 0%, #E1C76A 50%, transparent 100%)' }} />

              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(201,162,39,0.2)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'rgba(246,241,231,0.7)',
                  transition: 'all 0.2s ease',
                  zIndex: 10,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#C9A227';
                  e.currentTarget.style.borderColor = '#C9A227';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(246,241,231,0.7)';
                  e.currentTarget.style.borderColor = 'rgba(201,162,39,0.2)';
                }}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div style={{ padding: '40px' }}>
                {/* Header Profile Section */}
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '2px',
                    background: 'linear-gradient(135deg, #111827 0%, #1e293b 100%)',
                    border: '1px solid rgba(201,162,39,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Scale size={36} color="#C9A227" strokeWidth={1.5} />
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <h3 style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: 'clamp(26px, 3.5vw, 36px)',
                        fontWeight: 500,
                        color: '#F6F1E7',
                        lineHeight: 1.1,
                      }}>
                        {selectedMember.name}
                      </h3>
                      {selectedMember.role === 'Partner' && (
                        <span style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '9px',
                          letterSpacing: '0.15em',
                          color: '#C9A227',
                          border: '1px solid rgba(201,162,39,0.4)',
                          padding: '2px 8px',
                          background: 'rgba(201,162,39,0.1)',
                          fontWeight: 600,
                        }}>
                          PARTNER
                        </span>
                      )}
                    </div>

                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      color: '#C9A227',
                      letterSpacing: '0.1em',
                      fontWeight: 500,
                      marginBottom: '4px',
                    }}>
                      {selectedMember.qualifications}
                    </div>

                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      color: 'rgba(168,168,168,0.85)',
                    }}>
                      {selectedMember.court || selectedMember.role}
                    </div>
                  </div>
                </div>

                {/* Gold divider line */}
                <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(201,162,39,0.4), transparent)', marginBottom: '24px' }} />

                {/* Biography */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '10px',
                    letterSpacing: '0.25em',
                    color: '#C9A227',
                    marginBottom: '12px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                    <ShieldCheck size={14} color="#C9A227" />
                    BACKGROUND & PRACTICE
                  </div>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    lineHeight: 1.85,
                    color: 'rgba(220,220,220,0.88)',
                    fontWeight: 300,
                  }}>
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Specializations */}
                <div style={{ marginBottom: '36px' }}>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '10px',
                    letterSpacing: '0.25em',
                    color: '#C9A227',
                    marginBottom: '14px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                    <Award size={14} color="#C9A227" />
                    AREAS OF SPECIALIZATION
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {selectedMember.specializations.map((spec) => (
                      <span
                        key={spec}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '12px',
                          color: '#F6F1E7',
                          border: '1px solid rgba(201,162,39,0.25)',
                          padding: '6px 14px',
                          background: 'rgba(201,162,39,0.06)',
                          borderRadius: '2px',
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => {
                      setSelectedMember(null);
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn-gold"
                    style={{
                      flex: 1,
                      minWidth: '200px',
                      padding: '14px 24px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.15em',
                      border: 'none',
                      cursor: 'pointer',
                      borderRadius: '2px',
                      textAlign: 'center',
                    }}
                  >
                    REQUEST CONSULTATION
                  </button>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="btn-ghost"
                    style={{
                      padding: '14px 28px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.15em',
                      cursor: 'pointer',
                      borderRadius: '2px',
                    }}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

