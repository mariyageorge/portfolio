import { useState } from 'react'
import { Mail, Github, Linkedin, Copy, Check, Send, MapPin, Sparkles } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="section-shell border-t border-paper-border/80 dark:border-white/[0.08]">
      <div className="glass-panel relative overflow-hidden p-8 sm:p-12 text-center border-2 border-violet/20 dark:border-white/[0.08] shadow-2xl">
        {/* Ambient subtle glow */}
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-cyan/15 blur-3xl filter dark:bg-cyan/20" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-violet/15 blur-3xl filter dark:bg-violet/20" />

        <div className="relative mx-auto max-w-2xl">
          <p className="eyebrow justify-center mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-violet dark:bg-cyan-bright" />
            get in touch
          </p>

          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Let's build something exceptional together
          </h2>

          <p className="mx-auto mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
            I am currently completing my Integrated MCA and actively seeking software engineering internships and junior developer opportunities. Whether you have a project idea, an open role, or just want to discuss full-stack & AI technologies, feel free to reach out.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
            <MapPin size={13} className="text-violet dark:text-cyan-bright" />
            <span>{profile.location} · Open to Remote & Onsite Roles</span>
          </div>

          {/* Contact Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
            {/* Primary Email CTA */}
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-cyan px-6 py-3 font-mono text-[13px] font-semibold text-white shadow-lg shadow-violet/25 transition-all duration-200 hover:shadow-cyan/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
              <span>Email Me directly</span>
            </a>

            {/* Quick Copy Email Button */}
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-paper-border bg-paper-surface px-5 py-3 font-mono text-[13px] font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-violet hover:text-violet dark:border-white/10 dark:bg-ink-surface dark:text-slate-200 dark:hover:border-cyan-bright dark:hover:text-cyan-bright"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>{profile.email}</span>
                </>
              )}
            </button>

            {/* Social Buttons */}
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper-border bg-paper-surface px-4 py-3 font-mono text-[13px] font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-violet hover:text-violet dark:border-white/10 dark:bg-ink-surface dark:text-slate-200 dark:hover:border-cyan-bright dark:hover:text-cyan-bright"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper-border bg-paper-surface px-4 py-3 font-mono text-[13px] font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-violet hover:text-violet dark:border-white/10 dark:bg-ink-surface dark:text-slate-200 dark:hover:border-cyan-bright dark:hover:text-cyan-bright"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
