import { GraduationCap, Award, BookOpen } from 'lucide-react'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="section-shell border-t border-paper-border/80 dark:border-white/[0.08]">
      <div className="flex flex-col items-start gap-2">
        <p className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-violet dark:bg-cyan-bright" />
          education & academia
        </p>
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Academic milestones & formal background
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
          Consistent academic achievement across engineering and foundational coursework with a strong foundation in computer science theory and mathematics.
        </p>
      </div>

      <div className="mt-8 space-y-5">
        {education.map((ed, idx) => (
          <div
            key={ed.degree}
            className="glass-card flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center sm:p-7 transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="rounded-md border border-violet/30 bg-violet/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase text-violet-deep dark:text-cyan-bright">
                  {idx === 0 ? 'Current Degree' : 'Schooling'}
                </span>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  {ed.dates}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                {ed.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                {ed.school}
              </p>
              {ed.note && (
                <p className="mt-0.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                  {ed.note}
                </p>
              )}

              {ed.highlights && (
                <ul className="mt-3 space-y-1">
                  {ed.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet dark:bg-cyan-bright" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Score / CGPA Indicator */}
            <div className="flex shrink-0 items-center justify-between sm:flex-col sm:items-end border-t border-paper-border/60 pt-4 sm:border-0 sm:pt-0">
              <span className="sm:hidden font-mono text-xs text-slate-500 dark:text-slate-400">Result:</span>
              <div className="text-right">
                <p className="font-display text-3xl sm:text-4xl font-bold bg-gradient-to-br from-violet to-cyan bg-clip-text text-transparent">
                  {ed.stat}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  {ed.statLabel}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
