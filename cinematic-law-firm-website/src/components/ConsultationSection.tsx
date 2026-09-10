import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MessageCircle, Send, CheckCircle } from 'lucide-react';

const PRACTICE_OPTIONS = [
  'Criminal', 'Civil', 'Writ Petition', 'Arbitration', 'DRT / DRAT',
  'Insolvency', 'M&A', 'MCOP', 'IPR', 'Company Registration',
  'Document Registration', 'Banking / Finance / Commercial', 'Taxation',
  'Consumer', 'Cybercrime', 'Family / Matrimonial', 'Real Estate / Land Revenue', 'Other',
];

const CONTACT_METHODS = ['Phone', 'Email', 'WhatsApp'];

export default function ConsultationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', district: '',
    practiceArea: '', description: '', contactMethod: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(17,17,17,0.8)',
    border: '1px solid rgba(201,162,39,0.15)',
    color: '#F6F1E7',
    padding: '14px 16px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '13px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '10px',
    letterSpacing: '0.2em',
    color: 'rgba(201,162,39,0.7)',
    display: 'block',
    marginBottom: '8px',
    fontWeight: 500,
  };

  return (
    <section id="contact" ref={ref} style={{ padding: '140px 0', background: 'linear-gradient(180deg, #080808 0%, #0B1220 40%, #080808 100%)', position: 'relative', overflow: 'hidden' }}>

      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: '900px', height: '600px',
          background: 'radial-gradient(ellipse, rgba(201,162,39,0.04) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>

        {/* CTA Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}
          >
            <div style={{ width: '40px', height: '1px', background: '#C9A227' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.3em', color: '#C9A227', fontWeight: 500 }}>
              GET IN TOUCH
            </span>
            <div style={{ width: '40px', height: '1px', background: '#C9A227' }} />
          </motion.div>

          <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
            <motion.h2
              initial={{ y: '100%', opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(28px, 5vw, 64px)',
                fontWeight: 300,
                color: '#F6F1E7',
                lineHeight: 1.1,
              }}
            >
              Have a Legal Matter That Needs Attention?
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
              maxWidth: '520px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}
          >
            Speak with our legal team to discuss your matter and understand the appropriate next steps.
          </motion.p>

          {/* Quick contact buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.a
              href="tel:+91XXXXXXXXXX"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '14px 28px',
                border: '1px solid rgba(201,162,39,0.3)',
                color: '#F6F1E7',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                letterSpacing: '0.12em',
                background: 'transparent',
                transition: 'all 0.3s ease',
              }}
            >
              <Phone size={14} color="#C9A227" />
              CALL US
            </motion.a>
            <motion.a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-gold"
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '14px 28px',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                letterSpacing: '0.12em',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '2px',
              }}
            >
              <MessageCircle size={14} />
              WHATSAPP
            </motion.a>
          </motion.div>
        </div>

        {/* Contact + Form */}
        <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ flex: '0 0 auto', width: 'clamp(260px, 28vw, 340px)' }}
          >
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.3em',
              color: '#C9A227',
              marginBottom: '32px',
              fontWeight: 500,
            }}>
              CONTACT DETAILS
            </div>

            {[
              {
                label: 'OFFICE & FRANCHISE LOCATIONS',
                value: '• Chennai Office — Principal Seat, Madras High Court\n• Chidambaram Office — Branch / Franchise Location',
                icon: '📍',
              },
              { label: 'PHONE', value: '[Phone to be provided]', icon: '📞' },
              { label: 'EMAIL', value: '[Email to be provided]', icon: '✉' },
              { label: 'WORKING HOURS', value: 'Monday – Saturday\n10:00 AM – 6:00 PM', icon: '🕐' },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: '24px' }}>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '9px',
                  letterSpacing: '0.25em',
                  color: 'rgba(201,162,39,0.6)',
                  marginBottom: '6px',
                  fontWeight: 500,
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(246,241,231,0.85)',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line',
                }}>
                  {item.value}
                </div>
              </div>
            ))}

            {/* Office Locations Box */}
            <div style={{
              width: '100%',
              padding: '16px',
              background: 'rgba(17,17,17,0.85)',
              border: '1px solid rgba(201,162,39,0.2)',
              borderRadius: '2px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.15em',
                color: '#C9A227',
                fontWeight: 600,
              }}>
                TWO ACTIVE LOCATIONS IN TAMIL NADU
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div style={{
                  padding: '10px 12px',
                  background: 'rgba(201,162,39,0.06)',
                  border: '1px solid rgba(201,162,39,0.2)',
                  borderRadius: '2px',
                }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px', fontWeight: 600, color: '#F6F1E7' }}>Chennai</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#C9A227', marginTop: '2px' }}>Principal Office</div>
                </div>
                <div style={{
                  padding: '10px 12px',
                  background: 'rgba(201,162,39,0.06)',
                  border: '1px solid rgba(201,162,39,0.2)',
                  borderRadius: '2px',
                }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px', fontWeight: 600, color: '#F6F1E7' }}>Chidambaram</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#C9A227', marginTop: '2px' }}>Franchise / Branch</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Consultation form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ flex: 1, minWidth: '300px' }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  border: '1px solid rgba(201,162,39,0.25)',
                  padding: '60px 40px',
                  textAlign: 'center',
                  background: 'rgba(14,14,14,0.8)',
                }}
              >
                <div style={{ marginBottom: '24px' }}>
                  <CheckCircle size={48} color="#C9A227" strokeWidth={1} style={{ margin: '0 auto' }} />
                </div>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '28px',
                  color: '#F6F1E7',
                  marginBottom: '16px',
                }}>
                  Request Received
                </div>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(168,168,168,0.8)',
                  lineHeight: 1.7,
                  maxWidth: '380px',
                  margin: '0 auto',
                }}>
                  Thank you for reaching out. A member of our team will be in touch with you shortly to discuss your matter.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={labelStyle}>FULL NAME *</label>
                    <input
                      name="name" type="text" required value={form.name}
                      onChange={handleChange} placeholder="Your full name"
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = 'rgba(201,162,39,0.5)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(201,162,39,0.15)'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>PHONE NUMBER *</label>
                    <input
                      name="phone" type="tel" required value={form.phone}
                      onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = 'rgba(201,162,39,0.5)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(201,162,39,0.15)'}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={labelStyle}>EMAIL</label>
                    <input
                      name="email" type="email" value={form.email}
                      onChange={handleChange} placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = 'rgba(201,162,39,0.5)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(201,162,39,0.15)'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>DISTRICT / LOCATION</label>
                    <input
                      name="district" type="text" value={form.district}
                      onChange={handleChange} placeholder="e.g., Chennai, Chidambaram"
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = 'rgba(201,162,39,0.5)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(201,162,39,0.15)'}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={labelStyle}>PRACTICE AREA *</label>
                    <select
                      name="practiceArea" required value={form.practiceArea}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      <option value="">Select area</option>
                      {PRACTICE_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>PREFERRED CONTACT METHOD</label>
                    <select
                      name="contactMethod" value={form.contactMethod}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      <option value="">Select method</option>
                      {CONTACT_METHODS.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>BRIEF DESCRIPTION OF YOUR MATTER *</label>
                  <textarea
                    name="description" required value={form.description}
                    onChange={handleChange}
                    placeholder="Please provide a brief description of your legal matter..."
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(201,162,39,0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(201,162,39,0.15)'}
                  />
                </div>

                {/* Privacy note */}
                <div style={{
                  padding: '16px',
                  border: '1px solid rgba(201,162,39,0.1)',
                  background: 'rgba(201,162,39,0.02)',
                }}>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    color: 'rgba(168,168,168,0.6)',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                  }}>
                    Please avoid submitting confidential or time-sensitive legal documents through this form until an appropriate communication channel has been established.
                  </p>
                </div>

                <motion.button
                  type="submit"
                  className="btn-gold"
                  style={{
                    padding: '18px 40px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={14} />
                  REQUEST A CONSULTATION
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
