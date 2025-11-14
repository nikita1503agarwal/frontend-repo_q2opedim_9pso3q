import { motion } from 'framer-motion'
import { Film, Sparkles, Layers, Zap } from 'lucide-react'

const milestones = [
  { year: '2017', text: 'First edits and narrative experiments' },
  { year: '2019', text: 'Agency collaborations, short films' },
  { year: '2021', text: 'Brand campaigns and color pipelines' },
  { year: '2024', text: 'Full-stack post-production for global clients' },
]

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-3xl font-semibold text-white/90"
      >
        The Journey
      </motion.h2>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-cyan-500/20 bg-white/5 p-5"
            >
              <div className="mb-1 text-cyan-300/90">{m.year}</div>
              <div className="text-white/90">{m.text}</div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-cyan-500/10" />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-transparent p-6"
        >
          <div className="mb-4 flex items-center gap-3 text-cyan-200/80">
            <Film className="h-5 w-5" />
            <Layers className="h-5 w-5" />
            <Sparkles className="h-5 w-5" />
            <Zap className="h-5 w-5" />
          </div>
          <div className="text-2xl font-medium text-white/90">
            Precision editing, immersive sound, expressive color, and cinematic motion.
          </div>
          <p className="mt-3 text-cyan-100/80">
            Tools: Premiere Pro, DaVinci Resolve, After Effects, Audition, Blender.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
