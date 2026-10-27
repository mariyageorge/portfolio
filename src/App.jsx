import { useTheme } from './hooks/useTheme'
import BackgroundEffects from './components/BackgroundEffects'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="relative min-h-screen overflow-hidden bg-paper text-slate-900 transition-colors duration-300 dark:bg-ink dark:text-slate-100">
      {/* Ambient glowing orbs & morphing background */}
      <BackgroundEffects />

      {/* Main layout */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
