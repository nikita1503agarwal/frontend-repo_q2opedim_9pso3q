import { motion } from 'framer-motion'

const projects = [
  {
    id: 'neon-city',
    title: 'Neon City Trailer',
    thumb: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070&auto=format&fit=crop',
    tags: ['Edit', 'Color', 'VFX'],
  },
  {
    id: 'adrenaline',
    title: 'Adrenaline Sports Cut',
    thumb: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2070&auto=format&fit=crop',
    tags: ['Edit', 'MGFX'],
  },
  {
    id: 'fashion',
    title: 'Fashion Brand Film',
    thumb: 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?q=80&w=2070&auto=format&fit=crop',
    tags: ['Edit', 'Color'],
  },
  {
    id: 'product',
    title: 'Product Launch',
    thumb: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    tags: ['Edit', 'MGFX'],
  },
]

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-3xl font-semibold text-white/90"
      >
        Featured Work
      </motion.h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, idx) => (
          <motion.a
            key={p.id}
            href={`/project/${p.id}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5"
          >
            <img src={p.thumb} alt={p.title} className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="flex items-center gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-cyan-500/30 bg-black/40 px-2 py-0.5 text-xs text-cyan-200/80 backdrop-blur">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-2 text-lg font-medium text-white">{p.title}</div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_45%)]" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
