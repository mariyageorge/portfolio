import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="section-shell border-t border-paper-border/80 dark:border-white/[0.08]">
      <div className="flex flex-col items-start gap-2">
        <p className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-violet dark:bg-cyan-bright" />
          work experience
        </p>
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Internships and engineering contributions
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
          Practical industry internships delivering full-stack features with .NET Core and React, as well as smart contracts and dApp interfaces.
        </p>
      </div>

      <div className="relative mt-10 space-y-8 pl-4 sm:pl-8 before:absolute before:bottom-2 before:left-[11px] before:top-2 before:w-[2px] before:bg-gradient-to-b before:from-violet before:via-cyan before:to-transparent sm:before:left-[19px]">
        {experience.map((job) => (
          <div key={job.role + job.org} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[21px] sm:-left-[27px] top-5 flex h-4 w-4 items-center justify-center rounded-full bg-ink ring-4 ring-paper-surface dark:bg-ink dark:ring-ink">
              <span className="h-2 w-2 rounded-full bg-cyan-bright group-hover:scale-125 transition-transform" />
            </div>

            <div className="glass-card p-6 sm:p-7 transition-all duration-200 group-hover:-translate-y-0.5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md border border-violet/30 bg-violet/10 px-2.5 py-0.5 font-mono text-[10px] uppercase font-semibold tracking-wider text-violet-deep dark:text-violet-bright">
                      {job.type}
                    </span>
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                      {job.role}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm font-medium text-violet-deep dark:text-cyan-bright">
                    {job.org}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-violet dark:text-cyan-bright" />
                    <span>{job.dates}</span>
                  </div>
                  {job.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-slate-400" />
                      <span>{job.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bullet points */}
              <ul className="mt-4 space-y-2.5">
                {job.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2
                      size={15}
                      className="mt-1 shrink-0 text-cyan-deep dark:text-cyan-bright opacity-90"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies used */}
              <div className="mt-5 flex flex-wrap items-center gap-1.5 pt-4 border-t border-paper-border/60 dark:border-white/[0.06]">
                <span className="mr-1 font-mono text-[11px] text-slate-400">Technologies:</span>
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-black/[0.04] px-2 py-0.5 font-mono text-[11px] font-medium text-slate-700 dark:bg-white/[0.05] dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
