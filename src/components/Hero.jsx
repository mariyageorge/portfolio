import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { profile, heroDescription } from '../data/portfolioData'
import PipelineAnimation from './PipelineAnimation'

export default function Hero() {
  return (
    <section id="top" className="section-shell pt-12 pb-16 sm:pt-20 sm:pb-24">
      <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
        {/* Left Column: Headline and Actions */}
        <div className="animate-reveal">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-3.5 py-1 text-xs font-mono text-violet-deep dark:border-cyan/30 dark:bg-cyan/10 dark:text-cyan-bright mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-bright opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-bright"></span>
            </span>
            <span>{profile.availability}</span>
          </div>

          {/* Name & Headline */}
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-[1.08]">
            Hi, I'm <span className="gradient-text-violet">{profile.name}</span>
          </h1>

          <p className="mt-4 font-display text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
            Integrated MCA Student & Aspiring Software Developer
          </p>

          <p className="mt-2 font-mono text-sm text-violet-deep dark:text-cyan-bright">
            Full-Stack Development · AI-Powered Applications · Cloud Technologies
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300/85">
            {heroDescription}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* Primary CTA: Explore Projects */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-cyan px-6 py-3 font-mono text-[13px] font-semibold text-white shadow-lg shadow-violet/25 transition-all duration-200 hover:shadow-cyan/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Projects
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA: Contact */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-paper-border bg-paper-surface/80 px-5 py-3 font-mono text-[13px] font-medium text-slate-700 backdrop-blur-md transition-all duration-200 hover:border-violet hover:text-violet dark:border-white/10 dark:bg-ink-surface/80 dark:text-slate-200 dark:hover:border-cyan-bright dark:hover:text-cyan-bright"
            >
              <Mail size={15} />
              Get in Touch
            </a>

            {/* Resume Button */}
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-paper-border bg-paper-surface/80 px-4 py-3 font-mono text-[13px] font-medium text-slate-700 backdrop-blur-md transition-all duration-200 hover:border-violet hover:text-violet dark:border-white/10 dark:bg-ink-surface/80 dark:text-slate-200 dark:hover:border-cyan-bright dark:hover:text-cyan-bright"
            >
              <Download size={15} />
              Resume
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-2 ml-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-paper-border bg-paper-surface/80 text-slate-700 backdrop-blur-md transition-all duration-200 hover:border-violet hover:text-violet hover:scale-105 dark:border-white/10 dark:bg-ink-surface/80 dark:text-slate-300 dark:hover:border-cyan-bright dark:hover:text-cyan-bright"
              >
                <Github size={17} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-paper-border bg-paper-surface/80 text-slate-700 backdrop-blur-md transition-all duration-200 hover:border-violet hover:text-violet hover:scale-105 dark:border-white/10 dark:bg-ink-surface/80 dark:text-slate-300 dark:hover:border-cyan-bright dark:hover:text-cyan-bright"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Visual */}
        <div className="animate-reveal [animation-delay:150ms]">
          <PipelineAnimation />
          <p className="mt-3 text-center font-mono text-[11px] text-slate-500 dark:text-slate-400">
            End-to-end full-stack development & cloud deployment pipeline
          </p>
        </div>
      </div>
    </section>
  )
}
