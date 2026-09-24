import { useEffect } from 'react'

// One delegated listener drives the cursor spotlight on every `.spot` card:
// it only writes two CSS variables (--mx / --my), so it costs almost nothing.
// Skipped on touch devices and when the visitor prefers reduced motion.
export function useSpotlight() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || calm) return

    const onMove = (e) => {
      const el = e.target instanceof Element ? e.target.closest('.spot') : null
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])
}
