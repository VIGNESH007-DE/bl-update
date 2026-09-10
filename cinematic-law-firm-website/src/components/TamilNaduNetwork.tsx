import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { MapPin, Building2, Scale, Compass, ArrowUpRight } from 'lucide-react';
import { TN_DISTRICTS } from '../data/constants';

type FilterType = 'all' | 'headoffice' | 'major' | 'madurai' | 'chennai';

export default function TamilNaduNetwork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState<string | null>('Chennai');
  const [filter, setFilter] = useState<FilterType>('all');

  const activeDistrict = TN_DISTRICTS.find(d => d.name === hovered) || TN_DISTRICTS[0];

  const filteredDistricts = TN_DISTRICTS.filter(d => {
    if (filter === 'headoffice') return d.name === 'Chennai' || d.name === 'Chidambaram';
    if (filter === 'major') return d.major;
    if (filter === 'madurai') return d.bench.includes('Madurai');
    if (filter === 'chennai') return d.bench.includes('Principal Seat');
    return true;
  });

  // Major network connections from Chennai & Madurai + Head Office Link
  const networkLines = [
    { from: { x: 360, y: 64 }, to: { x: 324, y: 172 }, isHeadOfficeLink: true }, // Chennai Head Office to Chidambaram Head Office
    { from: { x: 360, y: 64 }, to: { x: 190, y: 320 } }, // Chennai to Madurai (High Court Bench line)
    { from: { x: 360, y: 64 }, to: { x: 95, y: 235 } },  // Chennai to Coimbatore
    { from: { x: 360, y: 64 }, to: { x: 238, y: 250 } }, // Chennai to Trichy
    { from: { x: 360, y: 64 }, to: { x: 192, y: 180 } }, // Chennai to Salem
    { from: { x: 190, y: 320 }, to: { x: 160, y: 420 } }, // Madurai to Tirunelveli
    { from: { x: 190, y: 320 }, to: { x: 238, y: 250 } }, // Madurai to Trichy
  ];

  return (
    <section id="network" ref={ref} style={{
      padding: '140px 0',
      background: 'linear-gradient(180deg, #080808 0%, #0B1220 50%, #080808 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Ambient background glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(201,162,39,0.04) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

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
              JURISDICTION & REACH
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
              Across Tamil Nadu
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              color: 'rgba(168,168,168,0.85)',
              maxWidth: '640px',
              lineHeight: 1.75,
              marginTop: '12px',
            }}
          >
            Seamless legal representation and litigation support spanning both the Principal Seat of the Madras High Court in Chennai and the Madurai Bench, serving clients across all 38 districts of Tamil Nadu with established offices in Chennai and Chidambaram.
          </motion.p>
        </div>

        {/* Two Head Offices Quick Switch Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          {/* Chennai Head Office Card */}
          <div
            onClick={() => setHovered('Chennai')}
            style={{
              padding: '18px 24px',
              background: hovered === 'Chennai' ? 'rgba(201,162,39,0.12)' : 'rgba(14,14,14,0.7)',
              border: `1px solid ${hovered === 'Chennai' ? '#C9A227' : 'rgba(201,162,39,0.25)'}`,
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#C9A227', fontSize: '14px' }}>★</span>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 600, color: '#F6F1E7' }}>
                  Chennai Head Office
                </span>
              </div>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '9px',
                letterSpacing: '0.15em',
                color: '#C9A227',
                border: '1px solid rgba(201,162,39,0.3)',
                padding: '2px 8px',
                background: 'rgba(201,162,39,0.08)',
              }}>
                PRINCIPAL SEAT
              </span>
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(168,168,168,0.85)', lineHeight: 1.5 }}>
              Principal Seat of Madras High Court & City Civil Courts jurisdiction.
            </div>
          </div>

          {/* Chidambaram Head Office Card */}
          <div
            onClick={() => setHovered('Chidambaram')}
            style={{
              padding: '18px 24px',
              background: hovered === 'Chidambaram' ? 'rgba(201,162,39,0.12)' : 'rgba(14,14,14,0.7)',
              border: `1px solid ${hovered === 'Chidambaram' ? '#C9A227' : 'rgba(201,162,39,0.25)'}`,
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#C9A227', fontSize: '14px' }}>★</span>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 600, color: '#F6F1E7' }}>
                  Chidambaram Head Office
                </span>
              </div>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '9px',
                letterSpacing: '0.15em',
                color: '#C9A227',
                border: '1px solid rgba(201,162,39,0.3)',
                padding: '2px 8px',
                background: 'rgba(201,162,39,0.08)',
              }}>
                REGIONAL HEAD
              </span>
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(168,168,168,0.85)', lineHeight: 1.5 }}>
              Sub-Courts & District Sessions hub serving regional & coastal matters.
            </div>
          </div>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}
        >
          {[
            { id: 'all', label: `All Districts (${TN_DISTRICTS.length})` },
            { id: 'headoffice', label: '★ Two Head Offices (2)' },
            { id: 'major', label: 'Primary Judicial Hubs (6)' },
            { id: 'chennai', label: 'Principal Seat Jurisdiction (19)' },
            { id: 'madurai', label: 'Madurai Bench Jurisdiction (19)' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as FilterType)}
              style={{
                padding: '8px 18px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.05em',
                background: filter === tab.id ? 'rgba(201,162,39,0.15)' : 'rgba(14,14,14,0.6)',
                color: filter === tab.id ? '#C9A227' : 'rgba(246,241,231,0.7)',
                border: `1px solid ${filter === tab.id ? '#C9A227' : 'rgba(201,162,39,0.15)'}`,
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Interactive Cinematic Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9 }}
            style={{ flex: '1 1 420px', maxWidth: '560px', position: 'relative' }}
          >
            <div style={{
              background: 'radial-gradient(ellipse at 50% 40%, #0d1527 0%, #070a10 70%, #050608 100%)',
              border: '1px solid rgba(201,162,39,0.25)',
              borderRadius: '4px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6), inset 0 0 40px rgba(201,162,39,0.03)',
              padding: '24px 16px 16px',
            }}>
              {/* Corner decorative marks */}
              <div style={{ position: 'absolute', top: 8, left: 8, width: 8, height: 8, borderTop: '1px solid #C9A227', borderLeft: '1px solid #C9A227' }} />
              <div style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderTop: '1px solid #C9A227', borderRight: '1px solid #C9A227' }} />
              <div style={{ position: 'absolute', bottom: 8, left: 8, width: 8, height: 8, borderBottom: '1px solid #C9A227', borderLeft: '1px solid #C9A227' }} />
              <div style={{ position: 'absolute', bottom: 8, right: 8, width: 8, height: 8, borderBottom: '1px solid #C9A227', borderRight: '1px solid #C9A227' }} />

              {/* Map SVG */}
              <svg
                viewBox="0 0 400 500"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Glowing filter */}
                  <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Gradient for Tamil Nadu landmass */}
                  <linearGradient id="tnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#121d33" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#0e172a" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#080e1a" stopOpacity="0.95" />
                  </linearGradient>

                  {/* High Court Pulse Gradient */}
                  <radialGradient id="hcPulse">
                    <stop offset="0%" stopColor="#C9A227" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Subtle Grid Coordinate lines */}
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={`h${i}`} x1="10" y1={50 + i * 50} x2="390" y2={50 + i * 50}
                    stroke="rgba(201,162,39,0.05)" strokeWidth="0.5" strokeDasharray="3 4" />
                ))}
                {Array.from({ length: 7 }).map((_, i) => (
                  <line key={`v${i}`} x1={50 + i * 50} y1="20" x2={50 + i * 50} y2="480"
                    stroke="rgba(201,162,39,0.05)" strokeWidth="0.5" strokeDasharray="3 4" />
                ))}

                {/* Bay of Bengal & Arabian Sea decorative labels */}
                <text x="310" y="380" fill="rgba(201,162,39,0.15)" fontSize="10" fontFamily="Inter, sans-serif" letterSpacing="0.2em" transform="rotate(75, 310, 380)">
                  BAY OF BENGAL
                </text>
                <text x="50" y="360" fill="rgba(201,162,39,0.12)" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="0.2em" transform="rotate(-65, 50, 360)">
                  INDIAN OCEAN
                </text>

                {/* Accurate Tamil Nadu State Boundary Landmass */}
                <motion.path
                  d="M 345 35 C 365 45, 375 60, 368 75 C 360 95, 345 125, 335 155 C 330 170, 328 195, 330 215 C 338 230, 348 245, 342 265 C 335 275, 315 285, 290 288 C 275 300, 270 340, 285 365 C 260 380, 230 400, 205 425 C 185 450, 160 475, 142 475 C 125 465, 110 435, 115 395 C 118 360, 125 330, 120 295 C 95 270, 80 250, 85 225 C 55 210, 60 185, 95 175 C 125 170, 150 160, 165 140 C 175 115, 185 95, 205 90 C 220 88, 240 75, 265 65 C 285 60, 305 50, 325 40 Z"
                  fill="url(#tnGradient)"
                  stroke="rgba(201,162,39,0.4)"
                  strokeWidth="1.2"
                  filter="url(#goldGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.8, ease: 'easeInOut' }}
                />

                {/* Inner State Texture Contour */}
                <path
                  d="M 335 50 C 352 65, 355 85, 345 110 C 335 135, 322 170, 320 210 C 325 230, 330 245, 325 260 C 310 270, 285 275, 265 280 C 255 310, 255 340, 265 360 C 240 380, 215 400, 195 420 C 175 440, 155 455, 142 465 C 130 450, 122 425, 125 390 C 128 355, 130 325, 125 295 C 105 265, 95 245, 100 225 C 75 205, 80 185, 105 175 C 135 165, 155 155, 170 135 C 185 115, 195 95, 215 88 C 235 80, 255 70, 275 62 Z"
                  fill="none"
                  stroke="rgba(201,162,39,0.1)"
                  strokeWidth="0.8"
                  strokeDasharray="2 3"
                />

                {/* Inter-City Judicial Network Lines */}
                {networkLines.map((line, idx) => (
                  <motion.line
                    key={`net-${idx}`}
                    x1={line.from.x}
                    y1={line.from.y}
                    x2={line.to.x}
                    y2={line.to.y}
                    stroke={line.isHeadOfficeLink ? "#E1C76A" : "rgba(201,162,39,0.25)"}
                    strokeWidth={line.isHeadOfficeLink ? "1.8" : "1"}
                    strokeDasharray={line.isHeadOfficeLink ? "3 3" : "4 4"}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: line.isHeadOfficeLink ? 0.9 : 0.6 } : {}}
                    transition={{ duration: 1, delay: 0.8 + idx * 0.15 }}
                  />
                ))}

                {/* Active Dynamic Connection Line to Hovered District */}
                {activeDistrict && !activeDistrict.isHighCourt && (
                  <motion.line
                    x1={activeDistrict.bench.includes('Madurai') ? 190 : 360}
                    y1={activeDistrict.bench.includes('Madurai') ? 320 : 64}
                    x2={activeDistrict.x}
                    y2={activeDistrict.y}
                    stroke="#E1C76A"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}

                {/* District Nodes & Markers */}
                {TN_DISTRICTS.map((d, i) => {
                  const isHovered = hovered === d.name;
                  const isHeadOffice = d.name === 'Chennai' || d.name === 'Chidambaram';
                  const isFiltered = filter === 'all' ||
                    (filter === 'headoffice' && isHeadOffice) ||
                    (filter === 'major' && d.major) ||
                    (filter === 'madurai' && d.bench.includes('Madurai')) ||
                    (filter === 'chennai' && d.bench.includes('Principal Seat'));

                  return (
                    <g
                      key={d.name}
                      style={{
                        cursor: 'pointer',
                        opacity: isFiltered ? 1 : 0.2,
                        transition: 'opacity 0.3s ease',
                      }}
                      onMouseEnter={() => setHovered(d.name)}
                      onClick={() => setHovered(d.name)}
                    >
                      {/* High Court / Head Office Bench Pulse Rings */}
                      {(d.isHighCourt || isHeadOffice) && (
                        <>
                          <motion.circle
                            cx={d.x}
                            cy={d.y}
                            r="12"
                            fill="none"
                            stroke="#C9A227"
                            strokeWidth="0.8"
                            animate={{ r: [6, 18, 6], opacity: [0.8, 0, 0.8] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                          />
                          <motion.circle
                            cx={d.x}
                            cy={d.y}
                            r="22"
                            fill="none"
                            stroke="#E1C76A"
                            strokeWidth="0.4"
                            animate={{ r: [10, 26, 10], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                          />
                        </>
                      )}

                      {/* Major City Pulse Ring */}
                      {d.major && !d.isHighCourt && !isHeadOffice && (
                        <motion.circle
                          cx={d.x}
                          cy={d.y}
                          r="8"
                          fill="none"
                          stroke="rgba(201,162,39,0.4)"
                          strokeWidth="0.6"
                          animate={{ r: [4, 12, 4], opacity: [0.6, 0, 0.6] }}
                          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                        />
                      )}

                      {/* Active hover ripple */}
                      {isHovered && (
                        <circle
                          cx={d.x}
                          cy={d.y}
                          r={d.isHighCourt || isHeadOffice ? 16 : 10}
                          fill="none"
                          stroke="#E1C76A"
                          strokeWidth="1.2"
                        />
                      )}

                      {/* Base Marker Circle */}
                      <circle
                        cx={d.x}
                        cy={d.y}
                        r={d.isHighCourt || isHeadOffice ? 5.5 : d.major ? 4 : isHovered ? 3.5 : 2.5}
                        fill={isHovered ? '#FFFFFF' : isHeadOffice ? '#E1C76A' : d.isHighCourt ? '#E1C76A' : d.major ? '#C9A227' : 'rgba(201,162,39,0.7)'}
                        stroke={d.isHighCourt || isHeadOffice ? '#080808' : isHovered ? '#C9A227' : 'rgba(0,0,0,0.5)'}
                        strokeWidth={d.isHighCourt || isHeadOffice ? 1.5 : 0.8}
                        style={{ transition: 'all 0.2s ease' }}
                      />

                      {/* City Name Label for Major Hubs, Head Offices & Active Selection */}
                      {(d.major || isHovered || isHeadOffice) && (
                        <text
                          x={d.x > 320 ? d.x - 8 : d.x + (d.isHighCourt || isHeadOffice ? 10 : 7)}
                          y={d.y + 4}
                          textAnchor={d.x > 320 ? 'end' : 'start'}
                          fontSize={d.isHighCourt || isHeadOffice ? '10' : d.major ? '8.5' : '7.5'}
                          fontWeight={d.isHighCourt || isHovered || isHeadOffice ? '600' : '400'}
                          fill={isHovered ? '#FFFFFF' : isHeadOffice ? '#E1C76A' : d.isHighCourt ? '#E1C76A' : 'rgba(246,241,231,0.85)'}
                          fontFamily="Inter, sans-serif"
                          style={{
                            textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.8)',
                            pointerEvents: 'none',
                            transition: 'fill 0.2s ease',
                          }}
                        >
                          {d.name}
                          {isHeadOffice ? (
                            <tspan dx="4" fontSize="6.5" fill="#C9A227" fontWeight="600">★ HEAD OFFICE</tspan>
                          ) : d.isHighCourt ? (
                            <tspan dx="4" fontSize="6.5" fill="#C9A227" fontWeight="500">★ HIGH COURT</tspan>
                          ) : null}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Map Footer Bar */}
              <div style={{
                marginTop: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid rgba(201,162,39,0.15)',
                paddingTop: '12px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E1C76A', border: '1px solid #000' }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(246,241,231,0.7)' }}>High Court Hub</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A227' }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(246,241,231,0.7)' }}>Major Judicial Hub</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(201,162,39,0.6)' }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(168,168,168,0.6)' }}>District Court</span>
                  </div>
                </div>

                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '9px',
                  letterSpacing: '0.15em',
                  color: 'rgba(201,162,39,0.5)',
                }}>
                  38 DISTRICTS
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Information Panel & District Directory */}
          <div style={{ flex: '1 1 340px', minWidth: '300px' }}>

            {/* Selected District Highlight Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDistrict.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                style={{
                  marginBottom: '28px',
                  padding: '28px',
                  background: 'rgba(13, 16, 23, 0.95)',
                  border: '1px solid rgba(201,162,39,0.35)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.5), 0 0 20px rgba(201,162,39,0.08)',
                }}
              >
                {/* Gold Top Accent */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #C9A227, transparent)' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <MapPin size={16} color="#C9A227" />
                      <h3 style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '32px',
                        fontWeight: 500,
                        color: '#F6F1E7',
                        lineHeight: 1.1,
                      }}>
                        {activeDistrict.name}
                      </h3>
                    </div>
                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      color: '#C9A227',
                      letterSpacing: '0.1em',
                      fontWeight: 500,
                    }}>
                      {activeDistrict.bench}
                    </div>
                  </div>

                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9px',
                    letterSpacing: '0.15em',
                    padding: '4px 10px',
                    border: '1px solid rgba(201,162,39,0.3)',
                    background: 'rgba(201,162,39,0.08)',
                    color: '#C9A227',
                    fontWeight: 600,
                  }}>
                    ACTIVE COVERAGE
                  </span>
                </div>

                <div style={{ height: '1px', background: 'rgba(201,162,39,0.15)', margin: '14px 0' }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Building2 size={15} color="rgba(201,162,39,0.7)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(168,168,168,0.5)', letterSpacing: '0.1em' }}>COURT JURISDICTION</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F6F1E7' }}>{activeDistrict.court}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Scale size={15} color="rgba(201,162,39,0.7)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(168,168,168,0.5)', letterSpacing: '0.1em' }}>LEGAL SERVICES AVAILABLE</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(220,220,220,0.85)' }}>
                        Writ Petitions, Civil & Criminal Litigation, Appeals, Bail, Arbitration & Document Registration
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-gold"
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                >
                  <span>CONSULT FOR {activeDistrict.name.toUpperCase()} MATTERS</span>
                  <ArrowUpRight size={14} />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Quick District Grid Selector */}
            <div style={{
              background: 'rgba(8,10,14,0.6)',
              border: '1px solid rgba(201,162,39,0.12)',
              padding: '16px',
            }}>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.2em',
                color: '#C9A227',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 600,
              }}>
                <Compass size={13} color="#C9A227" />
                <span>EXPLORE ALL DISTRICTS ({filteredDistricts.length})</span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                gap: '6px',
                maxHeight: '260px',
                overflowY: 'auto',
                paddingRight: '4px',
              }}>
                {filteredDistricts.map((d) => {
                  const isSelected = hovered === d.name;
                  return (
                    <div
                      key={d.name}
                      onMouseEnter={() => setHovered(d.name)}
                      onClick={() => setHovered(d.name)}
                      style={{
                        padding: '7px 10px',
                        border: `1px solid ${isSelected ? 'rgba(201,162,39,0.5)' : 'rgba(201,162,39,0.1)'}`,
                        background: isSelected ? 'rgba(201,162,39,0.12)' : 'rgba(14,14,14,0.4)',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflow: 'hidden' }}>
                        <div style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: isSelected ? '#FFFFFF' : d.isHighCourt ? '#E1C76A' : d.major ? '#C9A227' : 'rgba(201,162,39,0.3)',
                          flexShrink: 0,
                        }} />
                        <span style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '11px',
                          color: isSelected ? '#FFFFFF' : 'rgba(246,241,231,0.75)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}>
                          {d.name}
                        </span>
                      </div>
                      {d.isHighCourt && (
                        <span style={{ fontSize: '9px', color: '#C9A227', flexShrink: 0 }}>★</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

