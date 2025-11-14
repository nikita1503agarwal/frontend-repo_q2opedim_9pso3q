import { motion } from 'framer-motion'
import { Clapperboard, Waves, PaintBucket, AudioLines, Sparkle } from 'lucide-react'

const services = [
  { icon: Clapperboard, title: 'Video Editing', desc: 'Narrative pacing, seamless cuts, story-first structure.' },
  { icon: Sparkle, title: 'Motion Graphics', desc: 'Polished titles, lower-thirds, logo reveals, VFX assists.' },
  { icon: PaintBucket, title: 'Color Correction', desc: 'Cinematic looks, skin tones, film emulations, finishing.' },
  { icon: AudioLines, title: 'Sound Design', desc: 'Mixing, SFX, atmos, dialogue cleanup, mastering.' },
  { icon: Waves, title: 'Short-form Editing', desc: 'Fast, hook-driven cuts for social and ads.' },
]

export default function Services() {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-3xl font-semibold text-white/90"
      >
        Services
      </motion.h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 p-6"
          >
            <div className="flex items-center gap-3">
              <s.icon className="h-5 w-5 text-cyan-300" />
              <div className="text-lg font-medium text-white">{s.title}</div>
            </div>
            <p className="mt-2 text-cyan-100/80">{s.desc}</p>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(34,211,238,0.12),transparent_45%),radial-gradient(circle_at_90%_100%,rgba(59,130,246,0.12),transparent_50%)]" />
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-cyan-500/10" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
