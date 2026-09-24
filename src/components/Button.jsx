// Solid purple button that inverts on hover, like the reference. Small variant for card actions.
const variants = {
  solid:
    'border border-primary bg-primary text-white hover:bg-page hover:text-primary',
  outline:
    'border border-primary bg-transparent text-primary hover:bg-primary hover:text-white',
}

const sizes = {
  md: 'px-6 py-3 text-[0.9rem] font-semibold uppercase tracking-wide',
  sm: 'px-3.5 py-1.5 text-[0.8rem] font-medium',
}

export default function Button({
  href,
  variant = 'solid',
  size = 'md',
  external = false,
  className = '',
  children,
  ...rest
}) {
  const extra = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a
      href={href}
      {...extra}
      {...rest}
      className={`inline-flex items-center justify-center gap-2 rounded-[4px] whitespace-nowrap transition-[color,background-color,border-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_22px_-10px_rgb(0_0_0/0.4)] active:translate-y-0 active:shadow-none ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  )
}
