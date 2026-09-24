import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { GitHubIcon } from '../components/Icons'
import { projects } from '../data/projects'
import { profile } from '../data/site'

export default function Projects() {
  return (
    <Section id="projects" labelledBy="projects-title">
      <SectionHeading id="projects-title" title="My Projects">
        Machine learning, signal processing and electronics work, with source on GitHub
      </SectionHeading>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}

        <Reveal
          as="article"
          variant="rise"
          delay={(projects.length % 3) * 90}
          className="card-pop spot flex flex-col items-center justify-center rounded-[10px] border border-dashed border-primary/40 bg-tint/50 p-8 text-center"
        >
          <span className="grid size-20 place-items-center rounded-full bg-card text-ink shadow-card">
            <GitHubIcon className="size-9" />
          </span>
          <h3 className="mt-5 text-[1.3rem] font-medium">More on GitHub</h3>
          <p className="mt-2 text-[0.95rem] text-sub">Every repository, with source code and documentation.</p>
          <Button href={profile.github} external size="sm" className="mt-6">
            Visit GitHub Profile
          </Button>
        </Reveal>
      </div>
    </Section>
  )
}
