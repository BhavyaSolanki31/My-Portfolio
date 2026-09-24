import { NamedIcon } from './Icons'
import Reveal from './Reveal'

// Circular institution logo with a soft shadow, then name, degree, dates and a muted detail line.
export default function EducationItem({ item, index = 0 }) {
  return (
    <Reveal as="li" variant="fade" delay={index * 110} className="edu-item group flex gap-5 py-9 sm:gap-8">
      <span className="edu-disc grid size-[4.75rem] shrink-0 place-items-center overflow-hidden rounded-full bg-white p-2.5 shadow-[0_8px_24px_-6px_rgb(0_0_0/0.28)] ring-1 ring-black/5 sm:size-[5.75rem] sm:p-3">
        {item.logo ? (
          <img
            src={item.logo}
            alt={`${item.name} logo`}
            width="120"
            height="120"
            decoding="async"
            className="size-full object-contain"
          />
        ) : (
          <NamedIcon name={item.icon} className="size-8 text-primary" strokeWidth={1.5} />
        )}
      </span>
      <div className="edu-body min-w-0 self-center">
        <h3 className="edu-name text-[clamp(1.25rem,2.4vw,1.75rem)] font-medium leading-snug">{item.name}</h3>
        <p className="mt-1.5 font-semibold">{item.degree}</p>
        <p className="mt-0.5 text-[0.95rem]">{item.period}</p>
        <ul className="mt-2.5 list-disc pl-5 text-[0.92rem] text-sub marker:text-sub/60">
          {item.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
