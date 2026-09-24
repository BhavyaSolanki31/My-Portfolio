export default function Section({ id, labelledBy, alt = false, className = '', children }) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative py-16 sm:py-24 ${alt ? 'bg-page-alt' : ''} ${className}`}
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">{children}</div>
    </section>
  )
}
