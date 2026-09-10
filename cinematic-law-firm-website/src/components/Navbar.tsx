import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Practice Areas', href: '#practice' },
  { label: 'Our Team', href: '#team' },
  { label: 'Selected Matters', href: '#matters' },
  { label: 'Tamil Nadu Network', href: '#network' },
  { label: 'Our Story', href: '#story' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  visible: boolean;
}

export default function Navbar({ visible }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 500,
          padding: scrolled ? '14px 0' : '22px 0',
          background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,162,39,0.15)' : 'none',
          boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.4)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div style={{
          maxWidth: '1400px', margin: '0 auto',
          padding: '0 40px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
            aria-label="BL Associate Home"
          >
            <svg viewBox="0 0 44 44" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="20" stroke="rgba(201,162,39,0.4)" strokeWidth="0.5" />
              <line x1="14" y1="16" x2="30" y2="16" stroke="#C9A227" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="22" y1="11" x2="22" y2="33" stroke="#C9A227" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M14 16 L10.5 24 Q10.5 27.5 14 27.5 Q17.5 27.5 17.5 24 Z" stroke="#C9A227" strokeWidth="0.8" fill="none" />
              <path d="M30 16 L26.5 22 Q26.5 25.5 30 25.5 Q33.5 25.5 33.5 22 Z" stroke="#C9A227" strokeWidth="0.8" fill="none" />
              <line x1="18" y1="33" x2="26" y2="33" stroke="#C9A227" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <div>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '18px',
                fontWeight: 500,
                color: '#F6F1E7',
                letterSpacing: '0.08em',
                lineHeight: 1,
              }}>
                BL Associate
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '9px',
                letterSpacing: '0.2em',
                color: '#C9A227',
                marginTop: '2px',
                fontWeight: 400,
              }}>
                ADVOCATES
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center" style={{ gap: '32px' }}>
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="nav-link"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  color: activeSection === link.href.replace('#', '')
                    ? '#C9A227'
                    : 'rgba(246,241,231,0.75)',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  padding: '4px 0',
                }}
              >
                {link.label.toUpperCase()}
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeNav"
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0, right: 0,
                      height: '1px',
                      background: '#C9A227',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center" style={{ gap: '16px' }}>
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-gold"
              style={{
                padding: '10px 24px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.12em',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '2px',
              }}
            >
              BOOK CONSULTATION
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#F6F1E7' }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} color="#C9A227" /> : <Menu size={24} color="#F6F1E7" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 490,
              background: '#080808',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px 40px',
            }}
          >
            {/* Gold decorative line */}
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: '1px', height: '100%',
              background: 'linear-gradient(180deg, transparent, rgba(201,162,39,0.3), transparent)',
            }} />

            {/* Logo */}
            <div style={{ marginBottom: '48px', textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '28px',
                color: '#F6F1E7',
                letterSpacing: '0.1em',
              }}>BL Associate</div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                color: '#C9A227',
                letterSpacing: '0.25em',
                marginTop: '6px',
              }}>ADVOCATES • LEGAL CONSULTANTS</div>
            </div>

            {/* Nav links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', maxWidth: '300px' }}>
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '28px',
                    fontWeight: 400,
                    color: '#F6F1E7',
                    textAlign: 'left',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(201,162,39,0.1)',
                    letterSpacing: '0.02em',
                    transition: 'color 0.3s ease',
                  }}
                  whileHover={{ color: '#C9A227', x: 8 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile CTA */}
            <motion.button
              onClick={() => scrollTo('#contact')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="btn-gold"
              style={{
                marginTop: '40px',
                padding: '16px 48px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                letterSpacing: '0.15em',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '2px',
                width: '100%',
                maxWidth: '300px',
              }}
            >
              BOOK CONSULTATION
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
