// Original flat illustrations in a lavender / violet / yellow palette.
// Colours come from CSS variables so they adapt to light and dark mode.

const C = {
  ink: 'var(--ill-ink)',
  tint: 'var(--tint)',
  tint2: 'var(--tint-strong)',
  violet: 'var(--violet)',
  sun: 'var(--sun)',
  card: 'var(--card)',
}

export function Cloud({ className = '', style }) {
  return (
    <svg viewBox="0 0 120 60" className={className} style={style} aria-hidden="true">
      <path
        d="M20 58c-11 0-19-7-19-16s8-16 18-16c1 0 2 0 3 .3C24 14 33 6 45 6c11 0 20 6 24 15 3-2 6-3 10-3 10 0 17 8 17 17 0 12-9 23-22 23H20Z"
        fill={C.tint2}
      />
    </svg>
  )
}

export function Sparkle({ className = '', style, color = C.violet }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M12 3v18M3 12h18" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  )
}

// A desk scene: laptop running a waveform + detection box, a chip, a small neural net.
export function SkillsIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 520 440" className={className} role="img" aria-label="Illustration of a laptop, a microchip and a neural network on a desk">
      {/* clouds and sparkles */}
      <path d="M60 96c-12 0-20-8-20-18 0-9 7-17 18-17 3-14 17-24 32-24 16 0 28 9 31 22 3-1 6-2 9-2 11 0 20 8 20 19s-9 20-21 20H60Z" fill={C.tint} />
      <path d="M368 60c-10 0-17-6-17-15 0-8 6-14 15-14 3-11 13-19 26-19 13 0 23 7 26 18 2-1 5-1 7-1 9 0 16 7 16 16s-7 15-17 15h-56Z" fill={C.tint} />
      <path d="M470 150v20M460 160h20" stroke={C.violet} strokeWidth="4" strokeLinecap="round" />
      <path d="M44 214v16M36 222h16" stroke={C.sun} strokeWidth="4" strokeLinecap="round" />
      <circle cx="486" cy="240" r="6" fill="none" stroke={C.violet} strokeWidth="3" />

      {/* neural net */}
      <g stroke={C.tint2} strokeWidth="2.5">
        {[130, 180, 230].flatMap((y1) => [105, 155, 205, 255].map((y2) => <line key={`${y1}-${y2}`} x1="64" y1={y1} x2="124" y2={y2} />))}
        {[105, 155, 205, 255].flatMap((y1) => [150, 210].map((y2) => <line key={`b${y1}-${y2}`} x1="124" y1={y1} x2="184" y2={y2} />))}
      </g>
      {[130, 180, 230].map((y) => <circle key={`l${y}`} cx="64" cy={y} r="10" fill={C.ink} />)}
      {[105, 155, 205, 255].map((y) => <circle key={`m${y}`} cx="124" cy={y} r="10" fill={C.violet} />)}
      {[150, 210].map((y) => <circle key={`r${y}`} cx="184" cy={y} r="10" fill={C.sun} stroke={C.ink} strokeWidth="3" />)}

      {/* laptop */}
      <rect x="196" y="140" width="176" height="140" rx="10" fill={C.tint} stroke={C.ink} strokeWidth="4" />
      <path d="M190 292h188l-10 -12H200Z" fill={C.ink} />
      <rect x="212" y="156" width="144" height="108" rx="4" fill={C.card} />
      <path d="M220 222c14-34 28-34 42 0s28 34 42 0 28-34 42 0" fill="none" stroke={C.violet} strokeWidth="5" strokeLinecap="round" />
      <path d="M232 178h24M232 178v22M344 178h-24M344 178v22" stroke={C.sun} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="226" y="246" width="60" height="7" rx="3.5" fill={C.tint2} />
      <rect x="296" y="246" width="40" height="7" rx="3.5" fill={C.tint2} />

      {/* chip */}
      <g stroke={C.violet} strokeWidth="6" strokeLinecap="round">
        <path d="M368 92v-16M390 92v-16M412 92v-16M368 168v16M390 168v16M412 168v16M340 114h-16M340 136h-16M340 158h-16M440 114h16M440 136h16M440 158h16" />
      </g>
      <rect x="340" y="92" width="100" height="76" rx="14" fill={C.violet} />
      <rect x="362" y="106" width="56" height="48" rx="8" fill={C.tint} />
      <circle cx="390" cy="130" r="9" fill={C.ink} />
      <path d="M372 172c0 30 6 46-22 64" fill="none" stroke={C.ink} strokeWidth="3.5" strokeDasharray="2 9" strokeLinecap="round" />

      {/* desk */}
      <rect x="72" y="296" width="380" height="16" rx="4" fill={C.ink} />
      <path d="M104 312v82M420 312v82" stroke={C.ink} strokeWidth="5" strokeLinecap="round" />
      <path d="M30 394h460" stroke={C.ink} strokeWidth="4" strokeLinecap="round" />

      {/* mug */}
      <rect x="92" y="268" width="30" height="28" rx="5" fill={C.tint} stroke={C.ink} strokeWidth="4" />
      <path d="M122 276h6a6 6 0 0 1 0 14h-6" fill="none" stroke={C.ink} strokeWidth="4" />

      {/* plant */}
      <path d="M396 296c-4-30 4-46 18-56 4 24-2 46-18 56Z" fill={C.violet} />
      <path d="M404 296c8-26 24-38 40-40-2 24-16 38-40 40Z" fill={C.tint2} stroke={C.ink} strokeWidth="3" />
      <path d="M388 296h32l-4 -0h-24Z" fill={C.ink} />
      <rect x="388" y="282" width="34" height="14" rx="4" fill={C.sun} stroke={C.ink} strokeWidth="3" />
    </svg>
  )
}

export function MailIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 360 300" className={className} role="img" aria-label="Illustration of an envelope">
      <ellipse cx="180" cy="262" rx="70" ry="9" fill={C.tint2} />
      <circle cx="64" cy="70" r="9" fill="none" stroke={C.tint2} strokeWidth="5" />
      <circle cx="308" cy="34" r="12" fill="none" stroke={C.tint2} strokeWidth="6" />
      <path d="M312 118v22M301 129h22" stroke={C.tint2} strokeWidth="6" strokeLinecap="round" />
      <circle cx="40" cy="176" r="5" fill={C.sun} />
      <rect x="74" y="72" width="212" height="148" rx="18" fill={C.tint} />
      <path d="M286 130c0 38-32 90-70 90h52c11 0 18-7 18-18Z" fill={C.tint2} />
      <rect x="74" y="72" width="212" height="148" rx="18" fill="none" stroke={C.violet} strokeWidth="12" />
      <path d="M92 94l88 66 88-66" fill="none" stroke={C.violet} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
