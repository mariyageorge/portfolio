import { Trophy } from 'lucide-react'
import { achievements } from '../data/portfolioData'

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell border-t border-paper-border dark:border-ink-border">
      <p className="eyebrow mb-3">achievements</p>
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">Selected achievements</h2>

      <div className="mt-8 space-y-4">
        {achievements.map((a) => (
          <div key={a.title} className="card flex items-start gap-4 p-5">
            <Trophy size={18} className="mt-0.5 shrink-0 text-amber" />
            <div>
              <p className="text-[15px] font-medium leading-snug">{a.title}</p>
              <p className="mt-1 text-sm text-ink/60 dark:text-paper/60">{a.org}</p>
              <p className="mt-1 font-mono text-xs text-ink/45 dark:text-paper/45">{a.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
