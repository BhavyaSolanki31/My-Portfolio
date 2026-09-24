import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import EducationItem from '../components/EducationItem'
import { education } from '../data/education'

export default function Education() {
  return (
    <Section id="education" labelledBy="education-title">
      <SectionHeading id="education-title" title="Education" />
      <ul className="max-w-4xl border-t border-line">
        {education.map((e, i) => (
          <EducationItem key={e.degree + e.period} item={e} index={i} />
        ))}
      </ul>
    </Section>
  )
}
