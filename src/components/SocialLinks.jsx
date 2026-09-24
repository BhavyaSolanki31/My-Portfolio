import { Mail } from 'lucide-react'
import { profile } from '../data/site'
import { GitHubIcon, LinkedInIcon } from './Icons'

// Round, brand-coloured icon buttons, as in the reference.
const items = [
  { label: 'GitHub', href: profile.github, bg: '#333333', Icon: GitHubIcon, external: true },
  { label: 'LinkedIn', href: profile.linkedin, bg: '#0e76a8', Icon: LinkedInIcon, external: true },
  { label: 'Email', href: `mailto:${profile.email}`, bg: '#ea4335', Icon: Mail, external: false },
]

export default function SocialLinks({ size = 'md', className = '', style }) {
  const dim = size === 'sm' ? 'size-9' : 'size-11'
  const ico = size === 'sm' ? 'size-[1.05rem]' : 'size-5'
  return (
    <ul style={style} className={`flex items-center gap-3 ${className}`}>
      {items.map(({ label, href, bg, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            style={{ backgroundColor: bg }}
            className={`grid ${dim} place-items-center rounded-full text-white shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105`}
          >
            <Icon className={ico} aria-hidden="true" strokeWidth={label === 'Email' ? 2 : undefined} />
          </a>
        </li>
      ))}
    </ul>
  )
}
