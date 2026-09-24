import { useSpotlight } from './hooks/useSpotlight'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Technologies from './sections/Technologies'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Certifications from './sections/Certifications'
import Exploring from './sections/Exploring'
import OpenSource from './sections/OpenSource'
import Contact from './sections/Contact'

export default function App() {
  useSpotlight()
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Technologies />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Exploring />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
