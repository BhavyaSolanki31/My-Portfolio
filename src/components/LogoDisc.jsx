import { useState } from 'react'

// A logo centred in a circle, sized by its own aspect ratio.
//
// Wide wordmarks (MathWorks, Barco) and tall marks (Google Cloud) would look very different in
// size if they were simply "contained". Here every logo's diagonal covers the same fraction of
// the disc (`fill`), so a wide logo runs edge to edge while a tall one fills the height, and all
// of them keep the same clearance from the circle. Pass `bg` = the logo's own background colour
// for logos that ship on a coloured canvas (Barco red, Codec black) so the join is invisible.
export default function LogoDisc({ src, alt, bg = '#ffffff', fill = 0.84, className = '', style }) {
  const [ratio, setRatio] = useState(null)

  const measure = (img) => {
    if (img && img.naturalWidth) setRatio(img.naturalWidth / img.naturalHeight)
  }

  const width = ratio ? Math.min(0.9, (fill * ratio) / Math.sqrt(1 + ratio * ratio)) : 0.7

  return (
    <span
      className={`logo-disc grid aspect-square place-items-center overflow-hidden rounded-full ${className}`}
      style={{ background: bg, ...style }}
    >
      <img
        ref={measure}
        onLoad={(e) => measure(e.currentTarget)}
        onError={() => setRatio(1)}
        src={src}
        alt={alt}
        decoding="async"
        draggable={false}
        style={{ width: `${width * 100}%`, height: 'auto', opacity: ratio ? 1 : 0 }}
        className="select-none transition-opacity duration-500"
      />
    </span>
  )
}
