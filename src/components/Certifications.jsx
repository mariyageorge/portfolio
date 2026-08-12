import { BadgeCheck } from 'lucide-react'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell border-t border-paper-border dark:border-ink-border">
      <p className="eyebrow mb-3">certifications</p>
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">Professional certifications</h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {certifications.map((c) => (
          <div key={c.name} className="card flex items-start gap-3 p-5">
            <BadgeCheck size={18} className="mt-0.5 shrink-0 text-teal-soft dark:text-teal" />
            <div>
              <p className="text-[15px] font-medium leading-snug">{c.name}</p>
              <p className="mt-1 font-mono text-xs text-ink/50 dark:text-paper/50">{c.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
