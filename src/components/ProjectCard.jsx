import { GitHubIcon } from './Icons'
import Button from './Button'
import Chip from './Chip'
import Reveal from './Reveal'
import { projectVisuals } from './ProjectVisuals'

// Concept illustration on top (what the project does, not a screenshot),
// centred title and text, small purple button.
export default function ProjectCard({ project, index }) {
  const Visual = projectVisuals[project.visual]
  return (
    <Reveal
      as="article"
      variant="rise"
      delay={(index % 3) * 90}
      className="card-pop spot group flex flex-col overflow-hidden rounded-[10px] border border-line bg-card shadow-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-tint">
        {Visual && (
          <Visual className="transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
        )}
        <span
          aria-hidden="true"
          className="absolute bottom-3 left-3 rounded-full bg-card/90 px-2.5 py-0.5 text-xs font-semibold text-primary tabular-nums shadow-sm backdrop-blur-sm"
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-7 pt-6 text-center">
        <h3 className="text-[1.3rem] font-medium leading-snug">{project.title}</h3>
        <p className="mt-1.5 text-sm font-medium text-primary">{project.kind}</p>
        {project.period && <p className="text-xs text-sub">{project.period}</p>}
        <p className="mt-4 text-[0.95rem] text-sub">{project.solution}</p>

        {project.metrics && (
          <ul className="mt-5 grid grid-cols-3 divide-x divide-line rounded-lg border border-line bg-page-alt">
            {project.metrics.map((m) => (
              <li key={m.label} className="px-2 py-3">
                <p className="text-lg font-semibold text-primary tabular-nums">{m.value}</p>
                <p className="mt-0.5 text-[0.7rem] leading-tight text-sub">{m.label}</p>
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-5 flex flex-wrap justify-center gap-1.5" aria-label="Technologies">
          {project.tech.map((t) => (
            <li key={t}>
              <Chip>{t}</Chip>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <Button href={project.repo} external size="sm" aria-label={`${project.title}: visit GitHub repo`}>
            <GitHubIcon className="size-3.5" />
            Visit GitHub Repo
          </Button>
        </div>
      </div>
    </Reveal>
  )
}
