import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import CertificationCard from '../components/CertificationCard'
import { certifications } from '../data/education'

export default function Certifications() {
  return (
    <Section id="certifications" labelledBy="certifications-title">
      <SectionHeading id="certifications-title" title="Certifications">
        Training in analog ICs, VLSI and applied AI
      </SectionHeading>
      {/* Centred wrapping rows: 7 certificates sit as 4 + 3 on desktop rather than leaving a gap. */}
      <div className="flex flex-wrap justify-center gap-6">
        {certifications.map((c, i) => (
          <CertificationCard
            key={c.title}
            cert={c}
            index={i}
            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
          />
        ))}
      </div>
    </Section>
  )
}
