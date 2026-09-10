import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  label?: string;
}

export default function SectionDivider({ label }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '0 40px', maxWidth: '1400px', margin: '0 auto' }}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1 }}
        style={{
          flex: 1, height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.2))',
          transformOrigin: 'right',
        }}
      />
      {label && (
        <div style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '20px',
          color: 'rgba(201,162,39,0.2)',
          letterSpacing: '0.1em',
          flexShrink: 0,
          fontStyle: 'italic',
        }}>
          {label}
        </div>
      )}
      <div style={{
        width: '6px', height: '6px',
        borderRadius: '50%',
        background: 'rgba(201,162,39,0.3)',
        flexShrink: 0,
      }} />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1 }}
        style={{
          flex: 1, height: '1px',
          background: 'linear-gradient(90deg, rgba(201,162,39,0.2), transparent)',
          transformOrigin: 'left',
        }}
      />
    </div>
  );
}
