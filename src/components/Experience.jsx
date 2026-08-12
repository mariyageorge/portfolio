import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="section-shell border-t border-paper-border dark:border-ink-border">
      <p className="eyebrow mb-3">experience</p>
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">Experience highlights</h2>

      <div className="mt-8 space-y-5">
        {experience.map((job) => (
          <div key={job.role + job.org} className="card p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-lg font-semibold">{job.role}</h3>
              <span className="font-mono text-xs text-ink/50 dark:text-paper/50">{job.dates}</span>
            </div>
            <p className="mt-1 font-mono text-sm text-teal-soft dark:text-teal">
              {job.org}
              {job.location ? ` · ${job.location}` : ''}
            </p>
            <ul className="mt-4 space-y-2">
              {job.points.map((point, i) => (
                <li key={i} className="flex gap-2 text-[15px] leading-relaxed text-ink/80 dark:text-paper/80">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
