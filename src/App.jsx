import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Hero from './components/Hero'
import PortfolioGrid from './components/PortfolioGrid'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Particles from './components/Particles'

function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <a href="#home" className="text-lg font-semibold tracking-wider text-cyan-200">FlamesBlue</a>
      <div className="hidden gap-6 text-cyan-100/80 sm:flex">
        <a href="#portfolio" className="hover:text-white/90">Portfolio</a>
        <a href="#about" className="hover:text-white/90">About</a>
        <a href="#services" className="hover:text-white/90">Services</a>
        <a href="#contact" className="hover:text-white/90">Contact</a>
      </div>
    </div>
  )
}

function ParallaxWrapper({ children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])
  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/60 py-10 text-center text-cyan-200/60">
      © {new Date().getFullYear()} FlamesBlue — Precision • Motion • Color
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen w-full bg-black selection:bg-cyan-400/30 selection:text-white">
      <Navbar />
      <div className="pointer-events-none fixed inset-0">
        <Particles hue={195} />
      </div>
      <Hero />
      <ParallaxWrapper>
        <PortfolioGrid />
      </ParallaxWrapper>
      <ParallaxWrapper>
        <About />
      </ParallaxWrapper>
      <ParallaxWrapper>
        <Services />
      </ParallaxWrapper>
      <ParallaxWrapper>
        <Contact />
      </ParallaxWrapper>
      <Footer />
    </div>
  )
}

export default App
