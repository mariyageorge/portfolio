import { Code, Layout, Database, Cloud, Wrench, ShieldCheck } from 'lucide-react'
import { skillCategories } from '../data/portfolioData'

const categoryIcons = {
  Languages: Code,
  'Frameworks & Web Technologies': Layout,
  'Databases & Storage': Database,
  'Cloud & Infrastructure': Cloud,
  'Developer Tools & Platforms': Wrench,
  'Software Engineering Practices': ShieldCheck,
}

const tintBadgeStyles = {
  violet:
    'border-violet/25 bg-violet/10 text-violet-deep dark:border-violet/30 dark:bg-violet/15 dark:text-violet-bright',
  cyan:
    'border-cyan/25 bg-cyan/10 text-cyan-deep dark:border-cyan/30 dark:bg-cyan/15 dark:text-cyan-bright',
  amber:
    'border-amber/25 bg-amber/10 text-amber-soft dark:border-amber/30 dark:bg-amber/15 dark:text-amber',
  aws:
    'border-aws-orange/30 bg-aws-orange/10 text-amber-700 dark:border-aws-orange/30 dark:bg-aws-orange/15 dark:text-aws-orange',
  teal:
    'border-teal/25 bg-teal/10 text-teal-soft dark:border-teal/30 dark:bg-teal/15 dark:text-teal',
  indigo:
    'border-indigo/25 bg-indigo/10 text-indigo-soft dark:border-indigo/30 dark:bg-indigo/15 dark:text-indigo',
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell border-t border-paper-border/80 dark:border-white/[0.08]">
      <div className="flex flex-col items-start gap-2">
        <p className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-violet dark:bg-cyan-bright" />
          skills & tech stack
        </p>
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Technologies and tools I use to build production systems
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
          Organized by domain, reflecting practical development experience across modern full-stack web architectures, distributed data stores, and cloud infrastructure.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat) => {
          const Icon = categoryIcons[cat.label] || Code
          const badgeClass = tintBadgeStyles[cat.tint] || tintBadgeStyles.violet

          return (
            <div
              key={cat.label}
              className="glass-card flex flex-col justify-between p-5 transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="rounded-lg bg-black/5 p-2 text-slate-700 dark:bg-white/5 dark:text-slate-300">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-display text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-100">
                    {cat.label}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg border px-2.5 py-1 font-mono text-[11px] font-medium transition-colors ${badgeClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
