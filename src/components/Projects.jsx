import { ExternalLink, Github, Sparkles, CheckCircle2, Clock, Layers, ArrowUpRight } from 'lucide-react'
import { featuredProject, projects } from '../data/portfolioData'

const statusStyles = {
  Completed: 'border-emerald/30 bg-emerald/10 text-emerald-soft dark:text-emerald',
  'Live in Production': 'border-cyan/30 bg-cyan/10 text-cyan-deep dark:text-cyan-bright',
  'Final-Year Project · Active Development':
    'border-violet/40 bg-violet/10 text-violet-deep dark:text-violet-bright',
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell border-t border-paper-border/80 dark:border-white/[0.08]">
      <div className="flex flex-col items-start gap-2">
        <p className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-violet dark:bg-cyan-bright" />
          portfolio & engineering
        </p>
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Featured projects & full-stack systems
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
          Real-world applications spanning centralized academic workflows, e-commerce cloud deployments, production community systems, and collaborative web platforms.
        </p>
      </div>

      {/* FEATURED PROJECT: ScholarNexus AI */}
      <div className="mt-10">
        <div className="glass-panel relative overflow-hidden p-6 sm:p-8 border-2 border-violet/30 dark:border-violet/40 shadow-xl transition-all duration-300 hover:shadow-[0_12px_45px_rgba(139,92,246,0.18)]">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet/20 blur-3xl filter dark:bg-violet/25" />

          {/* Top header row */}
          <div className="relative flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-paper-border/70 dark:border-white/[0.08]">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet to-cyan px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm">
                <Sparkles size={12} />
                {featuredProject.badge}
              </span>
              <span className="rounded-full border border-violet/30 bg-violet/10 px-3 py-1 font-mono text-[11px] text-violet-deep dark:text-violet-bright">
                {featuredProject.status}
              </span>
            </div>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
              {featuredProject.dates}
            </span>
          </div>

          {/* Main content grid: Split layout */}
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
            {/* Left Column: Project Details & Implemented vs Planned Breakdown */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                  {featuredProject.name}
                </h3>

                <p className="mt-3 text-base font-medium leading-relaxed text-slate-800 dark:text-slate-200">
                  {featuredProject.overview}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {featuredProject.deepDive}
                </p>

                {/* Scope & Implemented vs Planned Split */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {/* Implemented Section */}
                  <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-4 dark:border-emerald/30 dark:bg-emerald/10">
                    <div className="flex items-center gap-2 mb-2 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
                      <CheckCircle2 size={14} />
                      <span>Implemented Core</span>
                    </div>
                    <ul className="space-y-1.5">
                      {featuredProject.implementedFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Planned AI Capabilities Section */}
                  <div className="rounded-xl border border-violet/20 bg-violet/5 p-4 dark:border-violet/30 dark:bg-violet/10">
                    <div className="flex items-center gap-2 mb-2 text-violet-deep dark:text-violet-bright font-mono text-xs font-semibold uppercase tracking-wider">
                      <Clock size={14} />
                      <span>Planned AI Enhancements</span>
                    </div>
                    <ul className="space-y-1.5">
                      {featuredProject.plannedFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-6">
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400 mb-2">
                    Integrated Stack:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.integratedTech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-paper-border bg-paper-surface px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700 dark:border-white/10 dark:bg-ink dark:text-cyan-bright"
                      >
                        {t}
                      </span>
                    ))}
                    {featuredProject.plannedTech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-dashed border-violet/40 bg-violet/5 px-2.5 py-1 font-mono text-[11px] text-violet-deep dark:border-violet/40 dark:text-violet-bright"
                        title="Planned capability"
                      >
                        {t} (Planned)
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {featuredProject.demo && (
                  <a
                    href={featuredProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-cyan px-5 py-2.5 font-mono text-[13px] font-semibold text-white shadow-md transition-all duration-200 hover:shadow-cyan/30 hover:scale-[1.02]"
                  >
                    <span>View Live Deployment</span>
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400 italic">
                  Institutional Academic Project
                </span>
              </div>
            </div>

            {/* Right Column: High Quality Interactive Dashboard Preview */}
            <div className="group relative overflow-hidden rounded-2xl border border-paper-border bg-slate-950 shadow-2xl dark:border-white/10">
              {featuredProject.demo && (
                <a
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open ScholarNexus live demo"
                  className="block relative overflow-hidden"
                >
                  <img
                    src={featuredProject.image}
                    alt="ScholarNexus AI Academic Research Hub Dashboard Preview"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 font-mono text-xs font-semibold text-slate-900 backdrop-blur-md shadow-lg">
                      <ExternalLink size={13} />
                      Open Live Dashboard
                    </span>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* OTHER EXISTING PROJECTS GRID */}
      <div className="mt-12">
        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-6">
          Additional Engineering Projects
        </h3>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.name}
              className="glass-card flex flex-col justify-between p-6 transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                    {p.name}
                  </h4>
                  <span
                    className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium ${
                      statusStyles[p.status] || 'border-slate-400 bg-slate-100 text-slate-700'
                    }`}
                  >
                    {p.status}
                  </span>
                </div>

                <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">{p.dates}</p>

                {p.image && (
                  <div className="mt-4 overflow-hidden rounded-xl border border-paper-border bg-slate-900 dark:border-white/10">
                    <img
                      src={p.image}
                      alt={`${p.name} screenshot preview`}
                      className="h-36 w-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}

                <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {p.description}
                </p>

                <ul className="mt-3.5 space-y-1">
                  {p.features.slice(0, 3).map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-bright" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-paper-border bg-black/[0.02] px-2 py-0.5 font-mono text-[10px] text-slate-600 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {p.github && (
                <div className="mt-5 pt-4 border-t border-paper-border/60 dark:border-white/[0.06]">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-slate-700 transition-colors hover:text-violet dark:text-slate-300 dark:hover:text-cyan-bright"
                  >
                    <Github size={13} />
                    View Repository
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
