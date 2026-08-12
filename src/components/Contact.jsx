import { Mail, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" className="section-shell border-t border-paper-border text-center dark:border-ink-border">
      <p className="eyebrow mb-3 justify-center flex">contact</p>
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">
        Ready to build your next digital experience?
      </h2>
      <p className="mx-auto mt-4 max-w-md text-ink/70 dark:text-paper/70">
        I enjoy solving complex problems with clean, production-ready code. Reach out and let's create something impactful together.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-[13px] text-paper transition-colors hover:bg-ink/85 dark:bg-teal dark:text-ink dark:hover:bg-teal/85"
        >
          <Mail size={14} />
          {profile.email}
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
      </div>
    </section>
  )
}
