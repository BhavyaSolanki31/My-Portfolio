import { Zap } from 'lucide-react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Chip from '../components/Chip'
import SkillCategoryCard from '../components/SkillCategoryCard'
import { SkillsIllustration } from '../components/Illustrations'
import { aboutCards, toolPills, profile } from '../data/site'
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <>
      <Section id="skills" labelledBy="skills-title">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left" className="order-2 lg:order-1">
            <SkillsIllustration className="mx-auto w-full max-w-[540px]" />
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <h2 id="skills-title" className="text-[clamp(2.1rem,5vw,3.5rem)] font-normal tracking-[-0.01em]">
                Where AI meets electronics
              </h2>
              <p className="mt-4 text-[0.95rem] uppercase leading-relaxed text-sub sm:text-base">
                I build intelligent systems across ML, vision, signals and hardware.
              </p>
              <p className="mt-6 text-sub">{profile.about}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Key tools">
                {toolPills.map((t) => (
                  <li key={t}>
                    <Chip tone="outline">{t}</Chip>
                  </li>
                ))}
              </ul>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {aboutCards.map((c, i) => (
                <Reveal as="li" key={c.title} delay={i * 60} className="flex gap-3 text-[0.98rem]">
                  <Zap className="mt-1 size-5 shrink-0 fill-sun text-sun" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">{c.title}. </strong>
                    <span className="text-sub">{c.text}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="tools" labelledBy="tools-title" className="!pt-0">
        <SectionHeading id="tools-title" title="What I Build">
          Five areas of engineering work, and the tools behind them
        </SectionHeading>
        <div className="-mb-6 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((c, i) => (
            <SkillCategoryCard key={c.title} category={c} index={i} />
          ))}
        </div>
      </Section>
    </>
  )
}
