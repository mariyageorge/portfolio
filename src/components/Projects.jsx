import { Github } from 'lucide-react'
import { projects } from '../data/portfolioData'

const statusStyles = {
  Ongoing: 'border-amber/30 bg-amber/10 text-amber',
  Completed: 'border-indigo/30 bg-indigo/10 text-indigo-soft dark:text-indigo',
  'Live in Production': 'border-teal/30 bg-teal/10 text-teal-soft dark:text-teal',
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell border-t border-paper-border dark:border-ink-border">
      <p className="eyebrow mb-3">projects</p>
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">Featured work</h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <div key={p.name} className="card flex flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-semibold">{p.name}</h3>
              <span
                className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[11px] ${statusStyles[p.status]}`}
              >
                {p.status}
              </span>
            </div>
            <p className="mt-1 font-mono text-xs text-ink/45 dark:text-paper/45">{p.dates}</p>

            {p.image && (
              <div className="mt-5 overflow-hidden rounded-[1.15rem] bg-slate-100 dark:bg-slate-900">
                <img
                  src={p.image}
                  alt={`${p.name} screenshot`}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            <p className="mt-4 text-[15px] leading-relaxed text-ink/80 dark:text-paper/80">
              {p.description}
            </p>

            <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2 text-[13px] text-ink/70 dark:text-paper/70">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-paper-border px-2 py-0.5 font-mono text-[11px] text-ink/60 dark:border-ink-border dark:text-paper/60"
                >
                  {t}
                </span>
              ))}
            </div>

            {(p.github || p.demo) && (
              <div className="mt-5 flex gap-3">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-full border border-paper-border px-3.5 py-1.5 font-mono text-[12px] transition-colors hover:border-teal hover:text-teal-soft dark:border-ink-border dark:hover:text-teal"
                  >
                    <Github size={13} />
                    GitHub
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 font-mono text-[12px] text-paper dark:bg-teal dark:text-ink"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
