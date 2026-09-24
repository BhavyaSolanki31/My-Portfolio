import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import TechIcon, { brandColor } from '../components/TechIcon'
import { techStrip } from '../data/skills'

// Shown right after the hero: the tools that connect AI with electronics, signals and hardware.
export default function Technologies() {
  return (
    <Section id="technologies" labelledBy="technologies-title" className="!pb-12 sm:!pb-16">
      <SectionHeading id="technologies-title" title="AI + Electronics + Signals + Hardware" align="center">
        The tools I use to connect intelligent software with the hardware underneath it
      </SectionHeading>

      <ul className="mx-auto grid max-w-[1100px] grid-cols-3 gap-x-4 gap-y-10 md:grid-cols-5 lg:grid-cols-9 lg:gap-x-2">
        {techStrip.map((t, i) => (
          <Reveal as="li" key={t.name} delay={i * 45}>
            <div
              className="tech-tile group flex flex-col items-center gap-3.5 text-center"
              style={{ '--brand': brandColor(t.brand) }}
            >
              <TechIcon
                brand={t.brand}
                icon={t.icon}
                className="tech-ico size-12 text-sub/70 transition-[color,transform] duration-300 group-hover:-translate-y-1 group-hover:scale-110 sm:size-14 lg:size-12 xl:size-14"
              />
              <span className="text-[0.8rem] font-medium leading-tight text-sub">{t.name}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
