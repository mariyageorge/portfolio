import { Award, BadgeCheck, ExternalLink, FileText, CheckCircle2, Shield } from 'lucide-react'
import { awsCertification, otherCertifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell border-t border-paper-border/80 dark:border-white/[0.08]">
      <div className="flex flex-col items-start gap-2">
        <p className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-violet dark:bg-cyan-bright" />
          credentials & training
        </p>
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Certifications & technical credentials
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
          Verified industry credentials and cloud readiness paths demonstrating continuous learning and hands-on competence.
        </p>
      </div>

      {/* FEATURED AWS BADGE & CERTIFICATE CARD */}
      <div className="mt-10">
        <div className="glass-panel relative overflow-hidden p-6 sm:p-8 border-2 border-aws-orange/40 bg-gradient-to-br from-paper-surface via-paper-surface to-amber-500/5 dark:from-ink-surface dark:via-ink-surface dark:to-aws-orange/10 shadow-xl transition-all duration-300 hover:shadow-[0_12px_45px_rgba(255,153,0,0.15)]">
          {/* Subtle AWS warm glow in corner */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-aws-orange/15 blur-3xl filter dark:bg-aws-orange/20" />

          <div className="grid gap-8 lg:grid-cols-[auto,1fr] lg:items-center">
            {/* AWS Knowledge Badge Visual */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-5">
              <div className="relative group flex items-center justify-center rounded-2xl bg-white p-4 shadow-lg ring-1 ring-black/5 dark:bg-slate-900 dark:ring-white/10 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={awsCertification.badgeImage}
                  alt="AWS Knowledge Cloud Essentials Trained Badge"
                  className="h-36 w-36 sm:h-44 sm:w-44 object-contain drop-shadow-md"
                  loading="lazy"
                />
              </div>
              <span className="mt-3 font-mono text-[11px] font-medium uppercase tracking-wider text-amber-700 dark:text-aws-orange flex items-center gap-1.5">
                <BadgeCheck size={14} />
                Knowledge Badge Trained
              </span>
            </div>

            {/* AWS Credential Details */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className="rounded-full bg-aws-orange/15 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-aws-orange border border-aws-orange/30">
                    {awsCertification.issuer}
                  </span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    Completed: {awsCertification.completionDate}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                  {awsCertification.title}
                </h3>

                <p className="mt-1 font-mono text-xs text-slate-600 dark:text-slate-400">
                  Awarded to: <span className="font-semibold text-slate-900 dark:text-slate-200">{awsCertification.recipient}</span>
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {awsCertification.description}
                </p>

                {/* Hands-on Labs & Topics */}
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {awsCertification.skillsLearned.map((s) => (
                    <div key={s} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={13} className="shrink-0 text-aws-orange" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Certificate Action */}
              <div className="mt-6 pt-5 border-t border-paper-border/60 dark:border-white/[0.08] flex flex-wrap items-center gap-3">
                <a
                  href={awsCertification.certificateFile}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-aws-orange to-amber-500 px-5 py-2.5 font-mono text-[13px] font-semibold text-slate-950 shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-aws-orange/30 active:scale-[0.98]"
                >
                  <FileText size={15} />
                  <span>View Completion Certificate (PDF)</span>
                  <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                  Official AWS Training & Certification Completion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER INDUSTRY CREDENTIALS */}
      <div className="mt-10">
        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-4">
          Additional Certifications & Foundations
        </h3>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherCertifications.map((c) => (
            <div
              key={c.name}
              className="glass-card flex flex-col justify-between p-5 transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="mb-3 inline-flex rounded-lg bg-black/5 p-2 text-slate-700 dark:bg-white/5 dark:text-slate-300">
                  <BadgeCheck size={18} className="text-violet dark:text-cyan-bright" />
                </div>
                <h4 className="font-display text-sm font-semibold leading-snug text-slate-900 dark:text-slate-100">
                  {c.name}
                </h4>
              </div>

              <div className="mt-4 pt-3 border-t border-paper-border/60 dark:border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-slate-500 dark:text-slate-400">
                <span className="font-medium text-slate-700 dark:text-slate-300">{c.issuer}</span>
                <span>{c.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
