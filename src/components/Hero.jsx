import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const kineticWords = [
  'Cinematic',
  'Futuristic',
  'Elegant',
  'Precise',
  'FlamesBlue',
]

export default function Hero() {
  return (
    <section id="home" className="relative h-[100vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/rvFZ5oikmZSIbmGQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dim/gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.85)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,8,20,0.35),rgba(0,0,0,0.6))]" />

      {/* Content layer */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6">
        {/* Kinetic typography */}
        <div className="mb-6 flex items-center gap-2">
          {kineticWords.map((w, i) => (
            <motion.span
              key={w}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.12, type: 'spring', stiffness: 120 }}
              className="text-sm uppercase tracking-[0.35em] text-cyan-300/80"
            >
              {w}
            </motion.span>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl"
        >
          Editing that feels like
          <span className="from-cyan-300 via-sky-400 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent"> cinema</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-2xl text-center text-cyan-100/80"
        >
          FlamesBlue — Professional video editing, color, motion graphics, and sound design.
        </motion.p>

        {/* Showreel player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-cyan-500/20 bg-black/40 shadow-[0_0_40px_-10px_rgba(56,189,248,0.35)]"
        >
          <video
            className="h-[54vh] w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=2070&auto=format&fit=crop"
          >
            <source src="https://cdn.coverr.co/videos/coverr-night-city-ambience-8477/1080p.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex items-center gap-4 text-cyan-200/70"
        >
          <div className="h-[1px] w-12 bg-cyan-400/40" />
          Scroll to explore
          <div className="h-[1px] w-12 bg-cyan-400/40" />
        </motion.div>
      </div>
    </section>
  )
}
