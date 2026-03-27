import { useScrollReveal } from "./lib/hooks/useScrollReveal"
import { Navbar } from "./components/Navbar"
import { LoadingOverlay } from "./components/LoadingOverlay"
import { Hero } from "./sections/Hero"
import { About } from "./sections/About"
import { Education } from "./sections/Education"
import { Skills } from "./sections/Skills"
import { Projects } from "./sections/Projects"
import { Contact } from "./sections/Contact"
import { Footer } from "./sections/Footer"

export default function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-portfolioBg text-portfolioText">
      <LoadingOverlay enabled />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
