import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TRUST_ITEMS = [
  { value: '17+', label: 'Areas of Law' },
  { value: '5', label: 'Legal Professionals' },
  { value: '34', label: 'Reported Matters' },
];

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div
      ref={ref}
      style={{
        background: 'rgba(11,18,32,0.6)',
        borderTop: '1px solid rgba(201,162,39,0.1)',
        borderBottom: '1px solid rgba(201,162,39,0.1)',
        padding: '40px 0',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '32px',
        }}>
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              style={{ textAlign: 'center', position: 'relative' }}
            >
              {/* Divider between items */}
              {i > 0 && (
                <div style={{
                  position: 'absolute',
                  left: 0, top: '20%', bottom: '20%',
                  width: '1px',
                  background: 'rgba(201,162,39,0.1)',
                }} />
              )}

              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: 300,
                color: '#C9A227',
                lineHeight: 1,
                marginBottom: '8px',
                letterSpacing: '-0.02em',
              }}>
                {item.value}
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                color: 'rgba(168,168,168,0.6)',
                letterSpacing: '0.15em',
                fontWeight: 400,
              }}>
                {item.label.toUpperCase()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
