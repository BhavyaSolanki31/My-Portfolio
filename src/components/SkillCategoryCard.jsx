import { NamedIcon } from './Icons'
import TechIcon, { brandColor } from './TechIcon'
import Reveal from './Reveal'

// One card per capability, in three tiers so it never reads as a skill dump:
//   1. what it lets Bhavya build (title + one line)
//   2. the tools behind it, as logo tiles
//   3. the supporting skills, as a quiet text list
// A category with `display: 'tools'` (Tools & Platforms) shows every item as a tile.
// The card is a 4-row subgrid (icon / title / description / body), so titles, descriptions and
// dividers line up across the cards in a row even when a title wraps.
export default function SkillCategoryCard({ category, index = 0 }) {
  const allTools = category.display === 'tools'
  const tools = category.items.filter((s) => allTools || s.brand)
  const skills = category.items.filter((s) => !(allTools || s.brand))

  return (
    <Reveal
      as="article"
      variant="rise"
      delay={(index % 3) * 100}
      className="skill-card card-pop spot group row-span-4 mb-6 grid grid-rows-subgrid rounded-[14px] border border-line bg-card p-6 shadow-card sm:p-7"
    >
      <span className="skill-ico grid size-12 shrink-0 place-items-center rounded-full bg-tint text-primary transition-[background-color,color,transform] duration-500 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
        <NamedIcon name={category.icon} className="size-6" strokeWidth={1.6} />
      </span>

      <h3 className="mt-5 text-[1.2rem] font-medium leading-snug">{category.title}</h3>
      <p className="mt-2 text-[0.92rem] leading-relaxed text-sub">{category.build}</p>

      <div className="skill-rule mt-6 space-y-6 pt-6">
        {tools.length > 0 && (
          <ul
            className={allTools ? 'grid grid-cols-3 gap-x-2 gap-y-4' : 'flex flex-wrap gap-x-2 gap-y-4'}
            aria-label={`${category.title}: tools`}
          >
            {tools.map((s, i) => (
              <li key={s.name} style={{ '--i': i, '--brand': brandColor(s.brand) }}>
                <div
                  className={`tech-tile flex flex-col items-center gap-2 text-center ${allTools ? 'w-full' : 'w-[4.5rem]'}`}
                  title={s.name}
                >
                  <span className="tool-box grid size-12 place-items-center rounded-xl border border-line bg-page-alt">
                    <TechIcon
                      brand={s.brand}
                      icon={s.icon}
                      className="tech-ico size-6 text-sub transition-colors duration-300"
                    />
                  </span>
                  <span className="tool-name text-[0.68rem] font-medium leading-tight text-sub transition-colors duration-300">
                    {s.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}

        {skills.length > 0 && (
          <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label={`${category.title}: skills`}>
            {skills.map((s) => (
              <li key={s.name} className="skill-item flex items-center gap-2 text-[0.84rem] leading-snug text-sub">
                <span aria-hidden="true" className="skill-dot size-1 shrink-0 rounded-full bg-primary/50" />
                {s.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  )
}
