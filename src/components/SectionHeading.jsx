import { useReveal } from '../hooks/useReveal'

// Big light heading with a grey uppercase subtitle, as in the reference.
// On scroll the title slides up out of a mask and the subtitle fades up after it.
export default function SectionHeading({ id, title, children, align = 'left' }) {
  const [ref, visible] = useReveal(0.3)
  return (
    <div ref={ref} className={`mb-10 sm:mb-14 ${align === 'center' ? 'text-center' : ''} ${visible ? 'is-visible' : ''}`}>
      <h2 id={id} className="heading-mask text-[clamp(2.1rem,5vw,3.5rem)] font-normal tracking-[-0.01em]">
        <span className="heading-line">{title}</span>
      </h2>
      {children && (
        <p
          className={`heading-sub mt-4 max-w-3xl text-[0.95rem] uppercase leading-relaxed text-sub sm:text-base ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {children}
        </p>
      )}
    </div>
  )
}
