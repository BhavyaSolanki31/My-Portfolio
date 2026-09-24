import Reveal from './Reveal'
import CertificateLink from './CertificateLink'
import LogoDisc from './LogoDisc'

// Coloured banner with only the company logo, floating over the banner edge in a circle,
// then role, duration, a one-line summary and the key bullets on a white card.
// Both cards share this exact layout. Each card is a 6-row subgrid, so the role, dates,
// summary, bullets and button line up across the two cards whatever their text length.
export default function ExperienceCard({ item, index = 0, className = '' }) {
  return (
    <Reveal
      as="article"
      variant="rise"
      delay={index * 130}
      className={`exp-card card-pop spot group row-span-6 mb-7 grid grid-rows-subgrid overflow-hidden rounded-[14px] border border-line bg-card shadow-card [--banner:9rem] [--disc:8.5rem] sm:[--banner:10rem] sm:[--disc:10.5rem] lg:mb-0 ${className}`}
    >
      <div className="relative h-[var(--banner)]">
        <div className="exp-banner absolute inset-0" style={{ background: item.gradient }} aria-hidden="true" />
        <LogoDisc
          src={item.logo}
          alt={`${item.short} logo`}
          bg={item.accent}
          fill={0.86}
          className="exp-disc absolute bottom-0 left-1/2 z-10 w-[var(--disc)] -translate-x-1/2 translate-y-1/2 border-[6px] border-card"
        />
      </div>

      <h3 className="px-6 pt-[calc(var(--disc)/2+1.75rem)] text-center text-[1.35rem] font-medium leading-snug sm:px-9">
        {item.role}
        <span className="sr-only"> at {item.company}</span>
      </h3>

      <p className="mt-2 px-6 text-center text-[0.95rem] font-medium sm:px-9">{item.period}</p>

      <p className="mt-4 px-6 text-center text-[0.98rem] text-sub sm:px-9">{item.summary}</p>

      <ul className="mx-6 mt-6 list-disc space-y-3 pl-5 text-[0.95rem] marker:text-primary sm:mx-9">
        {item.bullets.map((b) => (
          <li key={b} className="text-sub">
            {b}
          </li>
        ))}
      </ul>

      <div className="flex items-end justify-center px-6 pb-8 pt-8 sm:px-9">
        <CertificateLink href={item.certificate} label={`${item.role}, ${item.short}`} />
      </div>
    </Reveal>
  )
}
