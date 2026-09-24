import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import RepoCard from '../components/RepoCard'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { repos } from '../data/repos'
import { profile } from '../data/site'

export default function OpenSource() {
  return (
    <Section id="opensource" labelledBy="opensource-title">
      <SectionHeading id="opensource-title" title="Building on GitHub">
        Public repositories with source code and documentation
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-2">
        {repos.map((r, i) => (
          <RepoCard key={r.name} repo={r} index={i} />
        ))}
      </div>
      <Reveal className="mt-10 flex justify-center">
        <Button href={profile.github} external variant="outline">
          More repos on GitHub
        </Button>
      </Reveal>
    </Section>
  )
}
