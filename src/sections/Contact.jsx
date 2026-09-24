import Section from '../components/Section'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import SocialLinks from '../components/SocialLinks'
import { MailIllustration } from '../components/Illustrations'
import { profile } from '../data/site'

export default function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title" alt>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <Reveal>
          <h2 id="contact-title" className="text-[clamp(2.2rem,5.4vw,4rem)] font-normal leading-[1.1] tracking-[-0.015em]">
            Let’s build something intelligent.
          </h2>
          <p className="mt-5 max-w-lg text-base uppercase leading-relaxed text-sub">
            Interested in AI/ML, computer vision, intelligent systems, or engineering technology? Let’s connect.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-7 block text-[clamp(1.25rem,3.4vw,2.1rem)] font-light text-sub transition-colors hover:text-primary [overflow-wrap:anywhere]"
          >
            {profile.email}
          </a>
          <p className="mt-2 text-sub">{profile.location}</p>
          <SocialLinks className="mt-6" />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`mailto:${profile.email}`}>Email me</Button>
            <Button href={profile.linkedin} external variant="outline">
              LinkedIn
            </Button>
            <Button href={profile.github} external variant="outline">
              GitHub
            </Button>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <MailIllustration className="mx-auto w-full max-w-[400px]" />
        </Reveal>
      </div>
    </Section>
  )
}
