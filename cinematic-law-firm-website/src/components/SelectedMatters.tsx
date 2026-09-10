import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Search } from 'lucide-react';
import { SELECTED_MATTERS } from '../data/constants';

const FILTERS = ['ALL', 'ARBITRATION', 'COMMERCIAL', 'FINANCIAL', 'CIVIL', 'OTHER'];

export default function SelectedMatters() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filtered = SELECTED_MATTERS.filter((m) => {
    const matchFilter = activeFilter === 'ALL' || m.type.toUpperCase().includes(activeFilter);
    const matchSearch = search === '' || m.type.toLowerCase().includes(search.toLowerCase()) || m.court.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const visible = showAll ? filtered : filtered.slice(0, 8);

  return (
    <section id="matters" ref={ref} style={{ padding: '140px 0', background: '#080808', position: 'relative', overflow: 'hidden' }}>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}
          >
            <div style={{ width: '40px', height: '1px', background: '#C9A227' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.3em', color: '#C9A227', fontWeight: 500 }}>
              CASE ARCHIVE
            </span>
          </motion.div>

          <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
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
              Selected Matters
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              color: 'rgba(168,168,168,0.7)',
              maxWidth: '560px',
              lineHeight: 1.7,
              fontStyle: 'italic',
            }}
          >
            Selected reported matters associated with the practice. Each entry links to the publicly available judgment on Indian Kanoon.
          </motion.p>
        </div>

        {/* Filters + Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', gap: '16px', marginBottom: '48px', flexWrap: 'wrap', alignItems: 'center' }}
        >
          {/* Filter buttons */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  padding: '7px 16px',
                  background: activeFilter === f ? '#C9A227' : 'transparent',
                  color: activeFilter === f ? '#080808' : 'rgba(168,168,168,0.7)',
                  border: activeFilter === f ? 'none' : '1px solid rgba(201,162,39,0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontWeight: activeFilter === f ? 600 : 400,
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Search */}
          <div style={{ position: 'relative', marginLeft: 'auto' }}>
            <Search size={14} color="rgba(201,162,39,0.5)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search matters..."
              style={{
                background: 'rgba(17,17,17,0.8)',
                border: '1px solid rgba(201,162,39,0.2)',
                color: '#F6F1E7',
                padding: '8px 16px 8px 36px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                outline: 'none',
                width: '220px',
              }}
            />
          </div>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>

          {/* Central gold line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{
              position: 'absolute',
              left: '50%', transform: 'translateX(-50%)',
              width: '1px',
              top: 0, bottom: 0,
              background: 'linear-gradient(180deg, #C9A227 0%, rgba(201,162,39,0.1) 100%)',
              transformOrigin: 'top',
              display: 'none',
            }}
            className="hidden md:block"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {visible.map((matter, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={matter.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * (i % 6) }}
                  style={{
                    display: 'flex',
                    justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  }}
                >
                  <div
                    style={{
                      width: 'min(100%, 560px)',
                      background: 'rgba(14,14,14,0.95)',
                      border: '1px solid rgba(201,162,39,0.12)',
                      padding: '28px',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'border-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,162,39,0.35)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,162,39,0.12)';
                    }}
                  >
                    {/* Left gold accent */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0,
                      width: '2px', height: '100%',
                      background: 'linear-gradient(180deg, #C9A227, transparent)',
                    }} />

                    {/* Matter number */}
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '48px',
                      fontWeight: 300,
                      color: 'rgba(201,162,39,0.1)',
                      lineHeight: 1,
                      position: 'absolute',
                      top: '16px', right: '16px',
                    }}>
                      {String(matter.id).padStart(2, '0')}
                    </div>

                    {/* Type badge */}
                    <div style={{
                      display: 'inline-block',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '9px',
                      letterSpacing: '0.2em',
                      color: '#C9A227',
                      border: '1px solid rgba(201,162,39,0.25)',
                      padding: '3px 10px',
                      marginBottom: '16px',
                    }}>
                      {matter.type.toUpperCase()}
                    </div>

                    {/* Court */}
                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      color: 'rgba(168,168,168,0.6)',
                      marginBottom: '8px',
                      letterSpacing: '0.05em',
                    }}>
                      {matter.court}
                    </div>

                    {/* Title */}
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '18px',
                      fontWeight: 500,
                      color: '#F6F1E7',
                      marginBottom: '20px',
                      lineHeight: 1.3,
                    }}>
                      {matter.title}
                    </div>

                    {/* View judgment */}
                    <a
                      href={matter.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '11px',
                        letterSpacing: '0.12em',
                        color: '#C9A227',
                        textDecoration: 'none',
                        transition: 'gap 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.gap = '10px';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.gap = '6px';
                      }}
                    >
                      READ JUDGMENT <ArrowUpRight size={12} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Show more */}
          {!showAll && filtered.length > 8 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{ textAlign: 'center', marginTop: '48px' }}
            >
              <button
                onClick={() => setShowAll(true)}
                className="btn-ghost"
                style={{
                  padding: '14px 48px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  cursor: 'pointer',
                  borderRadius: '2px',
                }}
              >
                VIEW ALL {filtered.length} MATTERS
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
