import { motion } from 'framer-motion';

interface CrestEmblemProps {
  size?: number;
  animated?: boolean;
  className?: string;
  showCurvedText?: boolean;
}

export default function CrestEmblem({
  size = 280,
  animated = true,
  className = '',
  showCurvedText = true,
}: CrestEmblemProps) {
  // Harmonic balance oscillation for the beam (settling to 0)
  const beamKeyframes = animated
    ? [0, -5.5, 4.2, -2.8, 1.6, -0.7, 0.2, 0]
    : [0];

  // Counter-rotation for the pans to remain perpendicular to gravity
  const panCounterKeyframes = animated
    ? [0, 5.5, -4.2, 2.8, -1.6, 0.7, -0.2, 0]
    : [0];

  const transitionSettings = {
    duration: 5,
    ease: [0.33, 1, 0.68, 1] as const,
    times: [0, 0.18, 0.36, 0.54, 0.7, 0.84, 0.94, 1],
  };

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        viewBox="0 0 400 400"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 12px 30px rgba(0,0,0,0.85)) drop-shadow(0 0 16px rgba(212,175,55,0.18))',
          overflow: 'visible',
        }}
      >
        <defs>
          {/* Metallic 3D Gold Gradients */}
          <linearGradient id="gold-bright" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4D0" />
            <stop offset="30%" stopColor="#E5C158" />
            <stop offset="65%" stopColor="#BF953F" />
            <stop offset="85%" stopColor="#8A6409" />
            <stop offset="100%" stopColor="#E5C158" />
          </linearGradient>

          <linearGradient id="gold-metallic" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#F9E79F" />
            <stop offset="25%" stopColor="#D4AF37" />
            <stop offset="55%" stopColor="#AA7C11" />
            <stop offset="78%" stopColor="#E5C158" />
            <stop offset="100%" stopColor="#8A6409" />
          </linearGradient>

          <linearGradient id="gold-beam" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#AA7C11" />
            <stop offset="25%" stopColor="#F9E79F" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="75%" stopColor="#F9E79F" />
            <stop offset="100%" stopColor="#AA7C11" />
          </linearGradient>

          <linearGradient id="gold-pan-bowl" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F9E79F" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="80%" stopColor="#6E4F06" />
            <stop offset="100%" stopColor="#3D2B03" />
          </linearGradient>

          <radialGradient id="gold-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(212,175,55,0.16)" />
            <stop offset="70%" stopColor="rgba(212,175,55,0.03)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Curved path for text "BL ASSOCIATE" below scale */}
          <path
            id="bl-crest-arc"
            d="M 116 270 A 118 118 0 0 0 284 270"
            fill="none"
          />
        </defs>

        {/* Ambient warm glow behind crest */}
        <circle cx="200" cy="200" r="170" fill="url(#gold-core-glow)" />

        {/* ================================================================= */}
        {/* ORNATE FILIGREE BORDER & CREST EMBELLISHMENTS */}
        {/* ================================================================= */}

        {/* Top Fleur / Crown Finial (12 o'clock) */}
        <g id="crest-top-flourish">
          {/* Central Spearhead / Flame */}
          <path
            d="M 200 34 C 196 48 193 58 193 68 C 193 72 196 76 200 76 C 204 76 207 72 207 68 C 207 58 204 48 200 34 Z"
            fill="url(#gold-bright)"
          />
          {/* Left Wing Scroll */}
          <path
            d="M 200 70 C 188 56 166 52 154 64 C 144 74 152 88 166 84 C 178 80 188 84 195 90 C 192 84 192 76 200 70 Z"
            fill="url(#gold-metallic)"
          />
          <path
            d="M 166 84 C 158 86 150 78 156 70 C 164 60 182 62 194 72"
            stroke="url(#gold-bright)"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Right Wing Scroll */}
          <path
            d="M 200 70 C 212 56 234 52 246 64 C 256 74 248 88 234 84 C 222 80 212 84 205 90 C 208 84 208 76 200 70 Z"
            fill="url(#gold-metallic)"
          />
          <path
            d="M 234 84 C 242 86 250 78 244 70 C 236 60 218 62 206 72"
            stroke="url(#gold-bright)"
            strokeWidth="1.2"
            fill="none"
          />
        </g>

        {/* Bottom Filigree Scroll (6 o'clock) */}
        <g id="crest-bottom-flourish">
          {/* Inverted drop finial */}
          <path
            d="M 200 366 C 196 352 193 342 193 332 C 193 328 196 324 200 324 C 204 324 207 328 207 332 C 207 342 204 352 200 366 Z"
            fill="url(#gold-bright)"
          />
          {/* Left bottom scroll */}
          <path
            d="M 200 330 C 188 344 166 348 154 336 C 144 326 152 312 166 316 C 178 320 188 316 195 310 C 192 316 192 324 200 330 Z"
            fill="url(#gold-metallic)"
          />
          {/* Right bottom scroll */}
          <path
            d="M 200 330 C 212 344 234 348 246 336 C 256 326 248 312 234 316 C 222 320 212 316 205 310 C 208 316 208 324 200 330 Z"
            fill="url(#gold-metallic)"
          />
        </g>

        {/* Left Filigree Accent (9 o'clock) */}
        <g id="crest-left-flourish">
          <path
            d="M 68 200 C 54 188 50 166 62 154 C 72 144 86 152 82 166 C 78 178 82 188 88 195 C 82 192 74 192 68 200 Z"
            fill="url(#gold-metallic)"
          />
          <path
            d="M 68 200 C 54 212 50 234 62 246 C 72 256 86 248 82 234 C 78 222 82 212 88 205 C 82 208 74 208 68 200 Z"
            fill="url(#gold-metallic)"
          />
          <circle cx="48" cy="200" r="3" fill="url(#gold-bright)" />
        </g>

        {/* Right Filigree Accent (3 o'clock) */}
        <g id="crest-right-flourish">
          <path
            d="M 332 200 C 346 188 350 166 338 154 C 328 144 314 152 318 166 C 322 178 318 188 312 195 C 318 192 326 192 332 200 Z"
            fill="url(#gold-metallic)"
          />
          <path
            d="M 332 200 C 346 212 350 234 338 246 C 328 256 314 248 318 234 C 322 222 318 212 312 205 C 318 208 326 208 332 200 Z"
            fill="url(#gold-metallic)"
          />
          <circle cx="352" cy="200" r="3" fill="url(#gold-bright)" />
        </g>

        {/* ================================================================= */}
        {/* CONCENTRIC CIRCULAR FRAMES & PEARL BEADS */}
        {/* ================================================================= */}

        {/* Outer Fine Ring */}
        <circle
          cx="200"
          cy="200"
          r="142"
          stroke="url(#gold-metallic)"
          strokeWidth="1"
          opacity="0.85"
        />

        {/* Main Outer Beaded/Ornate Ring */}
        <circle
          cx="200"
          cy="200"
          r="136"
          stroke="url(#gold-bright)"
          strokeWidth="2.5"
        />

        {/* Dotted Pearl Ring */}
        <circle
          cx="200"
          cy="200"
          r="131"
          stroke="url(#gold-bright)"
          strokeWidth="1.8"
          strokeDasharray="1.5 5.5"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Middle Clean Gold Ring */}
        <circle
          cx="200"
          cy="200"
          r="124"
          stroke="url(#gold-metallic)"
          strokeWidth="1.2"
        />

        {/* Inner Solid Frame Ring */}
        <circle
          cx="200"
          cy="200"
          r="114"
          stroke="url(#gold-bright)"
          strokeWidth="2"
        />

        {/* ================================================================= */}
        {/* STATIC PEDESTAL BASE & CENTRAL PILLAR */}
        {/* ================================================================= */}

        {/* Stepped Pedestal Base */}
        <g id="scale-base">
          {/* Bottom stepped plinth */}
          <path
            d="M 166 268 L 234 268 L 230 263 L 170 263 Z"
            fill="url(#gold-bright)"
          />
          <rect
            x="172"
            y="261"
            width="56"
            height="3"
            rx="1.5"
            fill="url(#gold-metallic)"
          />
          {/* Molded base ring */}
          <path
            d="M 182 261 L 218 261 L 212 254 L 188 254 Z"
            fill="url(#gold-bright)"
          />
        </g>

        {/* Central Fluted Pillar / Column */}
        <g id="scale-pillar">
          {/* Column shaft */}
          <rect
            x="197"
            y="142"
            width="6"
            height="112"
            rx="1"
            fill="url(#gold-bright)"
          />
          {/* Flute highlight */}
          <line
            x1="200"
            y1="144"
            x2="200"
            y2="252"
            stroke="#FFF8E0"
            strokeWidth="1.2"
            opacity="0.75"
          />
          {/* Shadow edge */}
          <line
            x1="202"
            y1="144"
            x2="202"
            y2="252"
            stroke="#6E4F06"
            strokeWidth="0.8"
            opacity="0.6"
          />

          {/* Column collar / Capital */}
          <rect
            x="193"
            y="136"
            width="14"
            height="4"
            rx="1"
            fill="url(#gold-metallic)"
          />
          <rect
            x="195"
            y="132"
            width="10"
            height="3"
            rx="0.5"
            fill="url(#gold-bright)"
          />

          {/* Top Diamond / Spearhead Finial above the beam */}
          <path
            d="M 200 102 L 206 117 L 200 128 L 194 117 Z"
            fill="url(#gold-bright)"
          />
          {/* Facet line */}
          <line
            x1="200"
            y1="102"
            x2="200"
            y2="128"
            stroke="#FFF9E6"
            strokeWidth="0.9"
          />
          {/* Base ball */}
          <circle cx="200" cy="130" r="2.5" fill="url(#gold-bright)" />
        </g>

        {/* ================================================================= */}
        {/* ANIMATED BALANCING SYSTEM: BEAM & COUNTER-BALANCED PANS */}
        {/* ================================================================= */}

        {/* The rotating crossbeam group (Pivot at 200, 140) */}
        <motion.g
          id="animated-balance-beam"
          animate={{ rotate: beamKeyframes }}
          transition={transitionSettings}
          style={{ transformOrigin: '200px 140px' }}
        >
          {/* The Horizontal Arch Beam */}
          <path
            d="M 126 142 Q 163 133 200 136 Q 237 133 274 142"
            stroke="url(#gold-beam)"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 126 142 Q 163 135 200 138 Q 237 135 274 142"
            stroke="#FFF4D0"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />

          {/* Center decorative pivot boss */}
          <circle cx="200" cy="140" r="5" fill="url(#gold-bright)" />
          <circle cx="200" cy="140" r="2" fill="#5C4103" />

          {/* Left beam terminal ring */}
          <circle cx="126" cy="142" r="3.5" fill="url(#gold-bright)" />
          <circle cx="126" cy="142" r="1.5" fill="#3D2B03" />

          {/* Right beam terminal ring */}
          <circle cx="274" cy="142" r="3.5" fill="url(#gold-bright)" />
          <circle cx="274" cy="142" r="1.5" fill="#3D2B03" />

          {/* ------------------------------------------------------------- */}
          {/* LEFT SUSPENDED PAN ASSEMBLY (Counter-rotates around 126, 142) */}
          {/* ------------------------------------------------------------- */}
          <motion.g
            id="left-pan-system"
            animate={{ rotate: panCounterKeyframes }}
            transition={transitionSettings}
            style={{ transformOrigin: '126px 142px' }}
          >
            {/* Triangular suspension chains */}
            <line
              x1="126"
              y1="144"
              x2="104"
              y2="198"
              stroke="url(#gold-bright)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="126"
              y1="144"
              x2="148"
              y2="198"
              stroke="url(#gold-bright)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Center plumb line */}
            <line
              x1="126"
              y1="144"
              x2="126"
              y2="198"
              stroke="url(#gold-bright)"
              strokeWidth="0.8"
              opacity="0.65"
            />

            {/* Left Pan Attachment points */}
            <circle cx="104" cy="198" r="1.8" fill="url(#gold-bright)" />
            <circle cx="148" cy="198" r="1.8" fill="url(#gold-bright)" />

            {/* Left Pan Bowl (Spherical / Conical profile) */}
            <path
              d="M 100 198 C 104 220 148 220 152 198 Z"
              fill="url(#gold-pan-bowl)"
              stroke="url(#gold-bright)"
              strokeWidth="1.5"
            />
            {/* Pan rolled rim */}
            <ellipse
              cx="126"
              cy="198"
              rx="26"
              ry="3"
              fill="url(#gold-bright)"
              stroke="#AA7C11"
              strokeWidth="0.8"
            />
            {/* Pan interior lip highlight */}
            <ellipse
              cx="126"
              cy="198"
              rx="24"
              ry="1.8"
              fill="#523A04"
              opacity="0.6"
            />
          </motion.g>

          {/* -------------------------------------------------------------- */}
          {/* RIGHT SUSPENDED PAN ASSEMBLY (Counter-rotates around 274, 142) */}
          {/* -------------------------------------------------------------- */}
          <motion.g
            id="right-pan-system"
            animate={{ rotate: panCounterKeyframes }}
            transition={transitionSettings}
            style={{ transformOrigin: '274px 142px' }}
          >
            {/* Triangular suspension chains */}
            <line
              x1="274"
              y1="144"
              x2="252"
              y2="198"
              stroke="url(#gold-bright)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="274"
              y1="144"
              x2="296"
              y2="198"
              stroke="url(#gold-bright)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Center plumb line */}
            <line
              x1="274"
              y1="144"
              x2="274"
              y2="198"
              stroke="url(#gold-bright)"
              strokeWidth="0.8"
              opacity="0.65"
            />

            {/* Right Pan Attachment points */}
            <circle cx="252" cy="198" r="1.8" fill="url(#gold-bright)" />
            <circle cx="296" cy="198" r="1.8" fill="url(#gold-bright)" />

            {/* Right Pan Bowl */}
            <path
              d="M 248 198 C 252 220 296 220 300 198 Z"
              fill="url(#gold-pan-bowl)"
              stroke="url(#gold-bright)"
              strokeWidth="1.5"
            />
            {/* Pan rolled rim */}
            <ellipse
              cx="274"
              cy="198"
              rx="26"
              ry="3"
              fill="url(#gold-bright)"
              stroke="#AA7C11"
              strokeWidth="0.8"
            />
            {/* Pan interior lip highlight */}
            <ellipse
              cx="274"
              cy="198"
              rx="24"
              ry="1.8"
              fill="#523A04"
              opacity="0.6"
            />
          </motion.g>
        </motion.g>

        {/* ================================================================= */}
        {/* CURVED TEXT "BL ASSOCIATE" BELOW SCALE */}
        {/* ================================================================= */}
        {showCurvedText && (
          <text
            fill="url(#gold-bright)"
            fontSize="10"
            fontFamily="Cormorant Garamond, 'Cinzel', serif"
            fontWeight="600"
            letterSpacing="3.8px"
            style={{
              filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.9))',
            }}
          >
            <textPath
              href="#bl-crest-arc"
              startOffset="50%"
              textAnchor="middle"
            >
              BL ASSOCIATE
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
}
