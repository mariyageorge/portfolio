import { Trophy, Award, Users } from 'lucide-react'
import { achievements } from '../data/portfolioData'

export default function Achievements() {
  const icons = [Trophy, Award, Users]

  return (
    <section id="achievements" className="section-shell border-t border-paper-border/80 dark:border-white/[0.08]">
      <div className="flex flex-col items-start gap-2">
        <p className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-violet dark:bg-cyan-bright" />
          honors & recognition
        </p>
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Selected achievements & research awards
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
          Competitive state-level innovation recognitions, funded institutional research projects, and global hackathon community volunteering.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {achievements.map((a, idx) => {
          const Icon = icons[idx % icons.length]
          return (
            <div
              key={a.title}
              className="glass-card flex flex-col justify-between p-6 transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="rounded-xl bg-amber-500/10 p-2.5 text-amber-600 dark:text-amber-400">
                    <Icon size={20} />
                  </div>
                  <span className="rounded-md border border-amber/30 bg-amber/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-700 dark:text-amber-300">
                    {a.tag}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {a.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-violet-deep dark:text-cyan-bright">
                  {a.org}
                </p>
                <p className="mt-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {a.award}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {a.detail}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
