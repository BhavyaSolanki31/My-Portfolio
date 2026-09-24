export default function Chip({ children, tone = 'tint', className = '' }) {
  const tones = {
    tint: 'bg-tint text-primary',
    outline: 'border border-line text-sub',
  }
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[0.78rem] font-medium leading-snug ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
