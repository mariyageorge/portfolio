import { skillCategories } from '../data/portfolioData'

const tintStyles = {
  indigo: 'border-indigo/30 bg-indigo/10 text-indigo-soft dark:text-indigo',
  teal: 'border-teal/30 bg-teal/10 text-teal-soft dark:text-teal',
  amber: 'border-amber/30 bg-amber/10 text-amber',
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell border-t border-paper-border dark:border-ink-border">
      <p className="eyebrow mb-3">skills</p>
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">Tools I use to build modern apps</h2>

      <div className="mt-8 space-y-6">
        {skillCategories.map((cat) => (
          <div key={cat.label} className="card p-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-ink/50 dark:text-paper/50">
              {cat.label}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className={`rounded-md border px-3 py-1 font-mono text-[13px] ${tintStyles[cat.tint]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
