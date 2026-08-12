import { Github, Linkedin, Download, ArrowRight } from 'lucide-react'
import { profile, heroDescription } from '../data/portfolioData'
import PipelineAnimation from './PipelineAnimation'

export default function Hero() {
  return (
    <section id="top" className="section-shell pb-16 pt-16 sm:pt-24">
      <div className="grid gap-14 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <div className="animate-reveal">
          <p className="eyebrow mb-4">design + code</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-base text-teal-soft dark:text-teal">
            Integrated MCA student and full-stack developer building polished web experiences.
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/75 dark:text-paper/75">
            {heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-[13px] text-paper transition-colors hover:bg-ink/85 dark:bg-teal dark:text-ink dark:hover:bg-teal/85"
            >
              View Projects
              <ArrowRight size={14} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-paper-border px-5 py-2.5 font-mono text-[13px] transition-colors hover:border-teal hover:text-teal-soft dark:border-ink-border dark:hover:text-teal"
            >
              <Github size={14} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-paper-border px-5 py-2.5 font-mono text-[13px] transition-colors hover:border-teal hover:text-teal-soft dark:border-ink-border dark:hover:text-teal"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a
              href={profile.resumePath}
              download
              className="flex items-center gap-2 rounded-full border border-paper-border px-5 py-2.5 font-mono text-[13px] transition-colors hover:border-teal hover:text-teal-soft dark:border-ink-border dark:hover:text-teal"
            >
              <Download size={14} />
              Resume
            </a>
          </div>
        </div>

        <div className="animate-reveal [animation-delay:120ms]">
          <PipelineAnimation />
          <p className="mt-3 font-mono text-[11px] text-ink/45 dark:text-paper/45">
            a request, end to end — the shape of the work
          </p>
        </div>
      </div>
    </section>
  )
}
