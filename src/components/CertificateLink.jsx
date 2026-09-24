import { ArrowUpRight } from 'lucide-react'
import Button from './Button'

// "View Certificate ↗": opens the specific certificate in a new tab.
export default function CertificateLink({ href, label, variant = 'outline', className = '' }) {
  if (!href) return null
  return (
    <Button
      href={href}
      external
      variant={variant}
      size="sm"
      className={`group/cert ${className}`}
      aria-label={`View certificate: ${label} (opens in a new tab)`}
    >
      View Certificate
      <ArrowUpRight
        className="size-3.5 transition-transform duration-300 ease-out group-hover/cert:-translate-y-px group-hover/cert:translate-x-0.5"
        aria-hidden="true"
      />
    </Button>
  )
}
