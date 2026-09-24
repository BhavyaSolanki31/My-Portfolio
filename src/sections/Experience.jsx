import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import ExperienceCard from '../components/ExperienceCard'
import { experience } from '../data/experience'

export default function Experience() {
  const [barco, codec] = experience
  return (
    <Section id="experience" labelledBy="experience-title" alt>
      <SectionHeading id="experience-title" title="Experience">
        R&amp;D in computer vision and test automation, and digital electronics and VLSI design
      </SectionHeading>
      <div className="grid lg:grid-cols-2 lg:gap-x-8">
        <ExperienceCard item={barco} index={0} />
        <ExperienceCard item={codec} index={1} />
      </div>
    </Section>
  )
}
