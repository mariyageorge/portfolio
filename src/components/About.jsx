import { about } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="section-shell border-t border-paper-border dark:border-ink-border">
      <p className="eyebrow mb-3">about</p>
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">Creating strong full-stack solutions</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {about.paragraphs.map((p, i) => (
          <p
            key={i}
            className="card p-5 text-[15px] leading-relaxed text-ink/80 dark:text-paper/80"
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  )
}
