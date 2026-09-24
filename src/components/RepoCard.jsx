import { GitHubIcon } from './Icons'
import Reveal from './Reveal'

// Language colours as used on GitHub.
const langColor = { Python: '#3572A5', MATLAB: '#e16737', HTML: '#e34c26' }

// GitHub-style repository card, like the reference's open-source cards.
export default function RepoCard({ repo, index = 0 }) {
  return (
    <Reveal delay={(index % 2) * 70}>
      <a
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col rounded-[10px] border border-line bg-card p-6 shadow-card transition-transform duration-300 hover:-translate-y-1"
      >
        <div className="flex items-start gap-3">
          <GitHubIcon className="mt-0.5 size-5 shrink-0 text-sub" />
          <h3 className="text-[1.05rem] font-semibold leading-snug text-primary [overflow-wrap:anywhere]">{repo.name}</h3>
        </div>
        <p className="mt-3 flex-1 text-[0.95rem] text-sub">{repo.description}</p>
        <div className="mt-5 flex items-center justify-between gap-3 text-sm text-sub">
          <span className="inline-flex items-center gap-2">
            {repo.language && (
              <>
                <span aria-hidden="true" className="size-3 rounded-full" style={{ backgroundColor: langColor[repo.language] ?? 'var(--sub)' }} />
                {repo.language}
              </>
            )}
          </span>
          <span className="tabular-nums">Updated {repo.pushed}</span>
        </div>
      </a>
    </Reveal>
  )
}
