import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="section-shell border-t border-paper-border dark:border-ink-border">
      <p className="eyebrow mb-3">education</p>
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">Academic milestones</h2>

      <div className="mt-8 space-y-4">
        {education.map((ed) => (
          <div key={ed.degree} className="card flex flex-wrap items-center justify-between gap-4 p-6">
            <div>
              <h3 className="font-display text-lg font-semibold">{ed.degree}</h3>
              <p className="mt-1 text-sm text-ink/70 dark:text-paper/70">{ed.school}</p>
              {ed.note && (
                <p className="mt-0.5 font-mono text-xs text-ink/45 dark:text-paper/45">{ed.note}</p>
              )}
              <p className="mt-1 font-mono text-xs text-ink/45 dark:text-paper/45">{ed.dates}</p>
            </div>
            <div className="text-right">
              <p className="font-display text-3xl font-semibold text-teal-soft dark:text-teal">{ed.stat}</p>
              <p className="font-mono text-[11px] uppercase tracking-wide text-ink/45 dark:text-paper/45">
                {ed.statLabel}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
