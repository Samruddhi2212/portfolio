import { useScroll, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Contact from './components/Contact'
import ScrollBot from './components/ScrollBot'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(to right, #ea3a54, #d4af37, #ff2d78)',
        transformOrigin: '0%',
        scaleX: scrollYProgress,
        zIndex: 9999,
      }}
    />
  )
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <ScrollBot />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Contact />
      </main>
    </>
  )
}
