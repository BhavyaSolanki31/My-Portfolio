import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { NamedIcon } from '../components/Icons'
import { exploring } from '../data/education'

export default function Exploring() {
  return (
    <Section id="exploring" labelledBy="exploring-title" alt>
      <SectionHeading id="exploring-title" title="Currently exploring">
        The direction I’m building toward, tied to work I have already done
      </SectionHeading>
      <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {exploring.map((e, i) => (
          <Reveal
            as="li"
            key={e.title}
            delay={i * 70}
            className="relative rounded-[10px] border border-line bg-card p-6 shadow-card"
          >
            <span className="grid size-12 place-items-center rounded-full bg-tint text-primary">
              <NamedIcon name={e.icon} className="size-6" />
            </span>
            <h3 className="mt-4 text-[1.1rem] font-medium leading-snug">{e.title}</h3>
            <p className="mt-2 text-sm text-sub">{e.text}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
