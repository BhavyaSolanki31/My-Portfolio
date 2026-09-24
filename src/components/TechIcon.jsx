import { techIcons } from '../data/techIcons'
import { NamedIcon } from './Icons'

// A real brand logo when we have one, otherwise a neutral icon for the concept.
export default function TechIcon({ brand, icon, className = 'size-9' }) {
  const b = brand && techIcons[brand]
  if (!b) return <NamedIcon name={icon} className={className} strokeWidth={1.4} />
  return (
    <svg viewBox={b.vb} fill="currentColor" aria-hidden="true" className={className}>
      {b.paths.map((p, i) => (
        <path key={i} d={p.d} {...(p.eo ? { fillRule: 'evenodd', clipRule: 'evenodd' } : {})} />
      ))}
    </svg>
  )
}

export const brandColor = (brand) => (brand && techIcons[brand]?.color) || 'var(--primary)'
