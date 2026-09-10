import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div style={{ position: 'fixed', right: '24px', bottom: '80px', zIndex: 900, display: 'flex', flexDirection: 'column', gap: '12px' }}>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            aria-label="Contact via WhatsApp"
            style={{
              width: '52px', height: '52px',
              borderRadius: '50%',
              background: '#25D366',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
              position: 'relative',
            }}
            whileHover={{ scale: 1.12, boxShadow: '0 6px 28px rgba(37,211,102,0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Pulse ring */}
            <motion.div
              style={{
                position: 'absolute', inset: '-4px',
                borderRadius: '50%',
                border: '2px solid rgba(37,211,102,0.4)',
              }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <MessageCircle size={22} color="#fff" />
          </motion.a>

          {/* Call */}
          <motion.a
            href="tel:+91XXXXXXXXXX"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            aria-label="Call BL Associate"
            style={{
              width: '52px', height: '52px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #C9A227, #E1C76A)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(201,162,39,0.35)',
              position: 'relative',
            }}
            whileHover={{ scale: 1.12, boxShadow: '0 6px 28px rgba(201,162,39,0.55)' }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              style={{
                position: 'absolute', inset: '-4px',
                borderRadius: '50%',
                border: '2px solid rgba(201,162,39,0.3)',
              }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <Phone size={20} color="#080808" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
