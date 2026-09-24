import { useReveal } from '../hooks/useReveal'

// One-time reveal when scrolled into view. Disabled by prefers-reduced-motion.
// variant: 'up' (default) | 'rise' (cards) | 'left' | 'right' | 'scale' | 'fade'
export default function Reveal({ as: Tag = 'div', delay = 0, variant = 'up', className = '', style, children, ...rest }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      style={{ '--d': `${delay}ms`, ...style }}
      data-reveal={variant === 'up' ? undefined : variant}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
