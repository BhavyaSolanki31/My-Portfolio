// Flat, theme-aware concept illustrations for the Projects section.
// These represent the engineering idea behind each project instead of a raw
// screenshot: a dashboard for the energy meter, a waveform for speech emotion,
// a signal pipeline for the DSP project, a score card for the ATS analyzer,
// and a schematic for the analog circuits series.

const C = {
  ink: 'var(--ill-ink)',
  tint: 'var(--tint)',
  tint2: 'var(--tint-strong)',
  violet: 'var(--violet)',
  sun: 'var(--sun)',
  card: 'var(--card)',
  primary: 'var(--primary)',
}

const wrap = 'h-full w-full'

// AI-Powered Smart Energy Meter: dashboard with a forecast line and a gauge.
export function EnergyVisual({ className = '' }) {
  return (
    <svg viewBox="0 0 400 250" className={`${wrap} ${className}`} role="img" aria-label="Smart energy dashboard with a forecast chart and a live-load gauge">
      <rect width="400" height="250" fill={C.tint} />
      <rect x="24" y="24" width="352" height="202" rx="14" fill={C.card} />
      {/* gauge */}
      <g transform="translate(94,120)">
        <path d="M-52 8a52 52 0 0 1 104 0" fill="none" stroke={C.tint2} strokeWidth="12" strokeLinecap="round" />
        <path d="M-52 8a52 52 0 0 1 78 -42" fill="none" stroke={C.violet} strokeWidth="12" strokeLinecap="round" />
        <circle cx="0" cy="8" r="6" fill={C.ink} />
        <path d="M0 8 L28 -22" stroke={C.ink} strokeWidth="4" strokeLinecap="round" />
        <text x="0" y="34" textAnchor="middle" fontSize="13" fontWeight="700" fill={C.ink}>3.6 kW</text>
        <text x="0" y="50" textAnchor="middle" fontSize="8" fill={C.ink} opacity="0.6">LIVE LOAD</text>
      </g>
      {/* forecast chart */}
      <g transform="translate(176,58)">
        <line x1="0" y1="110" x2="180" y2="110" stroke={C.tint2} strokeWidth="2" />
        <polyline points="0,70 24,86 48,50 72,64 96,34 120,58 144,20 168,44 180,30" fill="none" stroke={C.violet} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="0,90 24,84 48,78 72,72 96,66 120,60 144,54 168,48 180,44" fill="none" stroke={C.sun} strokeWidth="3" strokeDasharray="1 8" strokeLinecap="round" />
        <circle cx="180" cy="30" r="5" fill={C.violet} />
        <text x="0" y="-8" fontSize="9" fontWeight="700" fill={C.ink} opacity="0.7">ACTUAL VS FORECAST</text>
      </g>
      {/* AI badge */}
      <g transform="translate(320,44)">
        <circle r="16" fill={C.violet} />
        <path d="M-6 2h12M0 -6v12" stroke={C.card} strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  )
}

// DSP-Based Secure Image Authentication: image -> bit planes -> PIN lock -> stego image.
export function DspVisual({ className = '' }) {
  return (
    <svg viewBox="0 0 400 250" className={`${wrap} ${className}`} role="img" aria-label="Image split into bit planes, secured behind a PIN lock">
      <rect width="400" height="250" fill={C.tint} />
      {/* source image */}
      <rect x="34" y="70" width="80" height="80" rx="10" fill={C.card} stroke={C.ink} strokeWidth="3" />
      <path d="M46 130l16-20 14 14 12-16 20 22Z" fill={C.tint2} />
      <circle cx="94" cy="90" r="7" fill={C.sun} stroke={C.ink} strokeWidth="2" />
      {/* stacked bit planes */}
      <g transform="translate(150,60)">
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={i * 10} y={i * 10} width="70" height="70" rx="8" fill={i % 2 ? C.violet : C.tint2} opacity={0.85 - i * 0.12} stroke={C.card} strokeWidth="2" />
        ))}
      </g>
      {/* arrow */}
      <path d="M126 110h16" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />
      <path d="M138 104l8 6-8 6" fill="none" stroke={C.ink} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M264 110h18" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />
      <path d="M278 104l8 6-8 6" fill="none" stroke={C.ink} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* PIN lock */}
      <g transform="translate(310,70)">
        <rect x="-34" y="16" width="68" height="52" rx="10" fill={C.card} stroke={C.ink} strokeWidth="3" />
        <path d="M-20 16v-14a20 20 0 0 1 40 0v14" fill="none" stroke={C.ink} strokeWidth="6" strokeLinecap="round" />
        <circle cx="0" cy="40" r="6" fill={C.violet} />
        <rect x="-3" y="44" width="6" height="14" rx="3" fill={C.violet} />
      </g>
      <text x="200" y="210" textAnchor="middle" fontSize="10" fontWeight="700" letterSpacing="1" fill={C.ink} opacity="0.65">
        BIT-PLANE EMBEDDING · PIN-GATED RECOVERY
      </text>
    </svg>
  )
}

// Real-Time Speech Emotion Detection: waveform, spectrogram bars and an emotion tag.
export function SpeechVisual({ className = '' }) {
  const bars = [10, 24, 15, 34, 20, 40, 26, 46, 30, 44, 22, 38, 16, 28, 12]
  return (
    <svg viewBox="0 0 400 250" className={`${wrap} ${className}`} role="img" aria-label="Speech waveform and spectrogram feeding an emotion classifier">
      <rect width="400" height="250" fill={C.tint} />
      <rect x="24" y="24" width="352" height="202" rx="14" fill={C.card} />
      {/* mic */}
      <g transform="translate(70,120)">
        <rect x="-14" y="-46" width="28" height="52" rx="14" fill={C.violet} />
        <path d="M-24 -6a24 24 0 0 0 48 0" fill="none" stroke={C.ink} strokeWidth="4" strokeLinecap="round" />
        <path d="M0 18v14M-14 32h28" stroke={C.ink} strokeWidth="4" strokeLinecap="round" />
      </g>
      {/* waveform */}
      <g transform="translate(120,70)">
        <polyline
          points="0,40 12,26 24,52 36,18 48,58 60,30 72,46 84,20 96,50 108,34 120,44 132,26 144,40 156,32 168,40"
          fill="none"
          stroke={C.violet}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      {/* spectrogram bars */}
      <g transform="translate(120,150)">
        {bars.map((h, i) => (
          <rect key={i} x={i * 11} y={46 - h} width="6" height={h} rx="2" fill={i % 3 === 0 ? C.sun : C.tint2} />
        ))}
      </g>
      {/* emotion chip */}
      <g transform="translate(330,60)">
        <rect x="-34" y="-16" width="68" height="32" rx="16" fill={C.violet} />
        <text x="0" y="5" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.card}>HAPPY</text>
      </g>
    </svg>
  )
}

// ATS Resume Analyzer Pro: a resume document with checks and a score ring.
export function AtsVisual({ className = '' }) {
  return (
    <svg viewBox="0 0 400 250" className={`${wrap} ${className}`} role="img" aria-label="Resume document with section checks and an ATS score ring">
      <rect width="400" height="250" fill={C.tint} />
      {/* document */}
      <rect x="48" y="34" width="150" height="182" rx="10" fill={C.card} stroke={C.ink} strokeWidth="3" />
      <rect x="66" y="54" width="70" height="10" rx="5" fill={C.violet} />
      <rect x="66" y="74" width="110" height="6" rx="3" fill={C.tint2} />
      {[100, 122, 144, 166, 188].map((y, i) => (
        <g key={y}>
          <circle cx="72" cy={y} r="6" fill="none" stroke={C.violet} strokeWidth="2.5" />
          <path d={`M69 ${y} l2 3 l5 -6`} fill="none" stroke={C.violet} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="86" y={y - 4} width={90 - i * 8} height="6" rx="3" fill={C.tint2} />
        </g>
      ))}
      {/* score ring */}
      <g transform="translate(292,120)">
        <circle r="58" fill="none" stroke={C.tint2} strokeWidth="14" />
        <circle r="58" fill="none" stroke={C.violet} strokeWidth="14" strokeLinecap="round" strokeDasharray="330 364" transform="rotate(-90)" />
        <text x="0" y="2" textAnchor="middle" fontSize="30" fontWeight="700" fill={C.ink}>91</text>
        <text x="0" y="22" textAnchor="middle" fontSize="10" fill={C.ink} opacity="0.6">ATS SCORE</text>
      </g>
    </svg>
  )
}

// 51 Analog Circuits Series: a breadboard-style schematic with components and a scope trace.
export function AnalogVisual({ className = '' }) {
  return (
    <svg viewBox="0 0 400 250" className={`${wrap} ${className}`} role="img" aria-label="Analog circuit schematic with an oscilloscope trace">
      <rect width="400" height="250" fill={C.tint} />
      <rect x="24" y="24" width="352" height="202" rx="14" fill={C.card} />
      {/* schematic */}
      <g stroke={C.ink} strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M56 90h32" />
        <path d="M88 78l0 24M100 78l0 24M112 78l0 24" strokeWidth="3" />
        <path d="M124 90h30" />
        <rect x="154" y="78" width="40" height="24" rx="3" stroke={C.violet} strokeWidth="3" />
        <path d="M194 90h26" />
        <path d="M220 74a16 16 0 1 1 0 32" stroke={C.tint2} strokeWidth="3" />
        <path d="M236 90h30" />
      </g>
      <circle cx="286" cy="90" r="9" fill={C.sun} stroke={C.ink} strokeWidth="2.5" />
      <path d="M56 90v40h250v-40" stroke={C.ink} strokeWidth="2" fill="none" opacity="0.35" />
      {/* oscilloscope */}
      <g transform="translate(70,150)">
        <rect width="260" height="58" rx="8" fill={C.ink} />
        <polyline
          points="14,44 40,44 52,14 66,44 80,20 94,44 110,44 124,14 138,44 152,20 166,44 180,44 194,14 208,44 222,20 236,44 248,44"
          fill="none"
          stroke={C.sun}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <text x="200" y="230" textAnchor="middle" fontSize="10" fontWeight="700" letterSpacing="1" fill={C.ink} opacity="0.6">
        51 CIRCUITS · CADENCE VIRTUOSO
      </text>
    </svg>
  )
}

export const projectVisuals = {
  energy: EnergyVisual,
  dsp: DspVisual,
  speech: SpeechVisual,
  ats: AtsVisual,
  analog: AnalogVisual,
}
