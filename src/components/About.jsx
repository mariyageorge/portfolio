import { Code2, Cpu, Cloud, Award, CheckCircle } from 'lucide-react'
import { about } from '../data/portfolioData'

export default function About() {
  const highlightIcons = [Code2, Cpu, Cloud, Award]

  return (
    <section id="about" className="section-shell border-t border-paper-border/80 dark:border-white/[0.08]">
      <div className="flex flex-col items-start gap-2">
        <p className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-violet dark:bg-cyan-bright" />
          about me
        </p>
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Engineering reliable full-stack applications with an eye for detail
        </h2>
      </div>

      {/* Main Narrative Paragraphs */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {about.paragraphs.map((p, i) => (
          <div
            key={i}
            className="glass-card p-6 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300"
          >
            <p>{p}</p>
          </div>
        ))}
      </div>

      {/* Core Engineering Pillars */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {about.highlights.map((item, idx) => {
          const Icon = highlightIcons[idx % highlightIcons.length]
          return (
            <div
              key={item.title}
              className="glass-card p-5 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mb-3 inline-flex rounded-xl bg-violet/10 p-2.5 text-violet-deep dark:bg-cyan/10 dark:text-cyan-bright">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {item.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
