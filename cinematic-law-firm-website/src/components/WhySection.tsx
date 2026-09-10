import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, BookOpen, Brain, Heart, Layers, Star } from 'lucide-react';

const REASONS = [
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'Professional conduct built around trust and responsibility. Every client engagement is handled with complete transparency and ethical commitment.',
  },
  {
    icon: BookOpen,
    title: 'Legal Knowledge',
    desc: 'Continuous learning and careful analysis of legal issues. The practice keeps pace with legal developments across multiple areas of law.',
  },
  {
    icon: Brain,
    title: 'Strategic Thinking',
    desc: 'Understanding the facts before developing a legal approach. Every matter receives a considered strategy tailored to its specific circumstances.',
  },
  {
    icon: Heart,
    title: 'Client Focus',
    desc: 'Listening carefully to the client\'s concerns and objectives. Legal advice that reflects the client\'s priorities and practical realities.',
  },
  {
    icon: Layers,
    title: 'Multi-disciplinary Practice',
    desc: 'Legal support across litigation, dispute resolution, commercial and advisory matters — one practice covering diverse legal needs.',
  },
  {
    icon: Star,
    title: 'Determined Representation',
    desc: 'Committed representation grounded in preparation and professionalism. Every matter is approached with equal focus and dedication.',
  },
];

export default function WhySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ padding: '140px 0', background: '#080808', position: 'relative', overflow: 'hidden' }}>

      {/* Background */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '900px', height: '900px',
        background: 'radial-gradient(circle, rgba(201,162,39,0.025) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

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
              THE DIFFERENCE
            </span>
            <div style={{ width: '40px', height: '1px', background: '#C9A227' }} />
          </motion.div>

          <div style={{ overflow: 'hidden', marginBottom: '16px' }}>
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
              Why Clients Choose BL Associate
            </motion.h2>
          </div>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1px',
          background: 'rgba(201,162,39,0.06)',
        }}>
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                whileHover={{
                  background: 'rgba(201,162,39,0.04)',
                  transition: { duration: 0.2 },
                }}
                style={{
                  background: '#080808',
                  padding: '48px 40px',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Gold corner */}
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  width: '40px', height: '1px',
                  background: '#C9A227',
                  transformOrigin: 'left',
                  transition: 'width 0.3s ease',
                }} />

                {/* Icon */}
                <div style={{ marginBottom: '24px' }}>
                  <Icon size={24} color="#C9A227" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '24px',
                  fontWeight: 500,
                  color: '#F6F1E7',
                  marginBottom: '12px',
                }}>
                  {reason.title}
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  lineHeight: 1.8,
                  color: 'rgba(168,168,168,0.8)',
                  fontWeight: 300,
                }}>
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
