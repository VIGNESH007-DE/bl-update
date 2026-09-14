import { PRACTICE_AREAS } from '../data/constants';
import CrestEmblem from './CrestEmblem';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer style={{
      background: '#040404',
      borderTop: '1px solid rgba(201,162,39,0.12)',
      padding: '80px 0 0',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Gold accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #C9A227, transparent)',
      }} />

      {/* Ambient */}
      <div style={{
        position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(201,162,39,0.03) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '64px' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <CrestEmblem size={48} animated={false} showCurvedText={false} />
              <div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: 500, color: '#F6F1E7', letterSpacing: '0.05em' }}>
                  BL Associate
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', color: '#C9A227', letterSpacing: '0.2em', marginTop: '2px' }}>
                  ADVOCATES
                </div>
              </div>
            </div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              color: 'rgba(168,168,168,0.6)',
              lineHeight: 1.8,
              maxWidth: '220px',
              fontWeight: 300,
            }}>
              Professional legal representation and advisory services across Tamil Nadu with offices in Chennai and Chidambaram.
            </p>
            <div style={{ marginTop: '24px', width: '40px', height: '1px', background: 'rgba(201,162,39,0.3)' }} />
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '14px',
              fontStyle: 'italic',
              color: 'rgba(201,162,39,0.5)',
              marginTop: '16px',
            }}>
              "Integrity in Counsel. Strategy in Action."
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '9px',
              letterSpacing: '0.3em',
              color: '#C9A227',
              marginBottom: '20px',
              fontWeight: 500,
            }}>
              NAVIGATION
            </div>
            {[
              { label: 'Home', id: 'home' },
              { label: 'Practice Areas', id: 'practice' },
              { label: 'Our Team', id: 'team' },
              { label: 'Selected Matters', id: 'matters' },
              { label: 'Tamil Nadu Network', id: 'network' },
              { label: 'Our Story', id: 'story' },
              { label: 'Contact', id: 'contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  display: 'block',
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: 'rgba(168,168,168,0.6)',
                  padding: '5px 0',
                  textAlign: 'left',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A227')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(168,168,168,0.6)')}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Practice Areas */}
          <div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '9px',
              letterSpacing: '0.3em',
              color: '#C9A227',
              marginBottom: '20px',
              fontWeight: 500,
            }}>
              PRACTICE AREAS
            </div>
            {PRACTICE_AREAS.slice(0, 9).map((area) => (
              <button
                key={area.id}
                onClick={() => scrollTo('practice')}
                style={{
                  display: 'block',
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: 'rgba(168,168,168,0.6)',
                  padding: '4px 0',
                  textAlign: 'left',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A227')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(168,168,168,0.6)')}
              >
                {area.title}
              </button>
            ))}
          </div>

          {/* Legal */}
          <div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '9px',
              letterSpacing: '0.3em',
              color: '#C9A227',
              marginBottom: '20px',
              fontWeight: 500,
            }}>
              LEGAL
            </div>
            {['Disclaimer', 'Privacy Policy', 'Terms of Use'].map((item) => (
              <div
                key={item}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: 'rgba(168,168,168,0.6)',
                  padding: '5px 0',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A227')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(168,168,168,0.6)')}
              >
                {item}
              </div>
            ))}

            <div style={{ marginTop: '32px' }}>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '9px',
                letterSpacing: '0.3em',
                color: '#C9A227',
                marginBottom: '12px',
                fontWeight: 500,
              }}>
                CONSULTATION
              </div>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-gold"
                style={{
                  padding: '10px 20px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  width: '100%',
                }}
              >
                BOOK CONSULTATION
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{
          padding: '32px 0',
          borderTop: '1px solid rgba(201,162,39,0.08)',
          marginBottom: '0',
        }}>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '9px',
            letterSpacing: '0.2em',
            color: '#C9A227',
            marginBottom: '12px',
            fontWeight: 500,
          }}>
            DISCLAIMER
          </div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            color: 'rgba(168,168,168,0.45)',
            lineHeight: 1.8,
            maxWidth: '900px',
          }}>
            The information provided on this website is intended for general informational purposes only and should not be construed as legal advice.
            Visiting this website or communicating through this website does not by itself create an advocate-client relationship. Legal outcomes depend
            on the facts and circumstances of each matter. For advice regarding a specific legal issue, please consult a qualified legal professional.
          </p>
        </div>

        {/* Copyright */}
        <div style={{
          padding: '24px 0',
          borderTop: '1px solid rgba(201,162,39,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            color: 'rgba(168,168,168,0.4)',
          }}>
            © 2026 BL Associate. All Rights Reserved.
          </div>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '13px',
            fontStyle: 'italic',
            color: 'rgba(201,162,39,0.3)',
          }}>
            Advocates • Legal Consultants • Chennai & Chidambaram
          </div>
        </div>
      </div>
    </footer>
  );
}
