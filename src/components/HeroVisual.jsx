import { useRef } from 'react'
import { Brain, Eye, AudioWaveform, Cpu } from 'lucide-react'
import portrait from '../assets/profile.jpg' // replace src/assets/profile.jpg to change the photo
import { Cloud, Sparkle } from './Illustrations'

const badges = [
  { Icon: Brain, label: 'Machine learning', pos: 'left-[-1%] top-[13%]', f: 0 },
  { Icon: Eye, label: 'Computer vision', pos: 'right-[-2%] top-[28%]', f: 1 },
  { Icon: AudioWaveform, label: 'Signal processing', pos: 'right-[3%] bottom-[13%]', f: 2 },
  { Icon: Cpu, label: 'Embedded AI', pos: 'left-[1%] bottom-[9%]', f: 3 },
]

// The photo stays clean. Flat shapes around it echo the reference's illustration style.
export default function HeroVisual() {
  const ref = useRef(null)
  const frame = useRef(0)

  // Pointer parallax: each layer drifts a few pixels at its own depth (mouse only, one rAF per frame).
  const onMove = (e) => {
    if (e.pointerType !== 'mouse' || frame.current) return
    const { clientX, clientY } = e
    frame.current = requestAnimationFrame(() => {
      frame.current = 0
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--px', (((clientX - r.left) / r.width) * 2 - 1).toFixed(3))
      el.style.setProperty('--py', (((clientY - r.top) / r.height) * 2 - 1).toFixed(3))
    })
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--px', '0')
    el.style.setProperty('--py', '0')
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative mx-auto aspect-[1/1.08] w-full max-w-[470px] lg:ml-auto lg:mr-0 lg:max-w-[600px]"
    >
      {/* lavender disc + clouds + sparkles */}
      <div aria-hidden="true" className="depth drift absolute inset-x-[2%] top-[9%] aspect-square rounded-full bg-tint" style={{ '--depth': 6 }} />
      <Cloud className="depth drift absolute left-[-6%] top-[2%] w-[34%]" style={{ animationDelay: '-3s', '--depth': 12 }} />
      <Cloud className="depth drift absolute bottom-[4%] right-[-8%] w-[28%]" style={{ animationDelay: '-7s', '--depth': 14 }} />
      <Sparkle className="depth absolute right-[10%] top-[2%] size-7" style={{ '--depth': 18 }} />
      <Sparkle className="depth absolute bottom-[26%] left-[-3%] size-5" color="var(--sun)" style={{ '--depth': 16 }} />
      <span aria-hidden="true" className="depth absolute right-[-1%] top-[64%] size-3.5 rounded-full border-[3px] border-violet" style={{ '--depth': 20 }} />

      {/* solid purple card behind the photo */}
      <div
        aria-hidden="true"
        className="depth hero-card-in absolute left-[17%] top-[10%] w-[66%] rotate-[-6deg] rounded-[2rem] bg-primary"
        style={{ aspectRatio: '3 / 4', '--depth': 8 }}
      />

      {/* portrait */}
      <div
        className="depth absolute left-[16%] top-[7%] z-10 w-[66%] overflow-hidden rounded-[2rem] border-[5px] border-card shadow-[0_24px_50px_-18px_rgb(30_10_60/0.55)]"
        style={{ aspectRatio: '3 / 4', '--depth': 14 }}
      >
        <img
          src={portrait}
          alt="Bhavya Solanki"
          width="482"
          height="660"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>

      {/* floating domain badges */}
      {badges.map(({ Icon, label, pos, f }) => (
        <span
          key={label}
          title={label}
          aria-hidden="true"
          style={{ '--f': f, '--p': f, '--depth': 22 + f * 3 }}
          className={`depth float-y hero-pop logo-hover absolute z-20 grid size-[3.4rem] place-items-center rounded-full bg-card text-primary shadow-card ring-1 ring-line ${pos}`}
        >
          <Icon className="size-[1.4rem]" strokeWidth={1.8} />
        </span>
      ))}
    </div>
  )
}
