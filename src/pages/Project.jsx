import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const demo = {
  before: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
  after: 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?q=80&w=2070&auto=format&fit=crop',
}

export default function Project() {
  const { id } = useParams()
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className="text-cyan-300/90">← Back</Link>
          <div className="text-lg font-semibold text-white/90">Project: {id}</div>
        </div>

        {/* Before/after slider */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 p-4">
          <div className="relative h-[50vh] w-full overflow-hidden rounded-xl">
            <div className="absolute inset-0">
              <img src={demo.before} alt="before" className="h-full w-full object-cover" />
            </div>
            <input type="range" min="0" max="100" defaultValue="50" className="absolute inset-x-4 bottom-4 z-10" onInput={(e) => {
              const after = e.currentTarget.parentElement.querySelector('[data-after]')
              after.style.width = `${e.currentTarget.value}%`
            }} />
            <div data-after className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
              <img src={demo.after} alt="after" className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 border-r-2 border-cyan-300/60" />
            </div>
          </div>
        </motion.div>

        {/* Timeline style layout */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-4">
            <div className="mb-2 text-cyan-300/80">Color Grading</div>
            <div className="h-2 w-full rounded-full bg-white/10">
              <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            </div>
            <p className="mt-2 text-sm text-cyan-100/80">Primary balance, film curve, selective hues, grain, halation.</p>
          </div>
          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-4">
            <div className="mb-2 text-cyan-300/80">Edit Timeline</div>
            <div className="grid grid-cols-12 gap-1">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="h-3 rounded-sm" style={{ background: `hsla(${190 + (i%6)*10},90%,55%,${0.6 + (i%3)*0.1})` }} />
              ))}
            </div>
            <p className="mt-2 text-sm text-cyan-100/80">Structure, pacing, transitions, rhythm.</p>
          </div>
          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-4">
            <div className="mb-2 text-cyan-300/80">MGFX / VFX Layers</div>
            <div className="flex flex-wrap gap-2">
              {['Titles','Particles','Flares','Tracking','SFX'].map((t)=> (
                <span key={t} className="rounded-full border border-cyan-500/30 bg-black/40 px-2 py-0.5 text-xs text-cyan-200/80">{t}</span>
              ))}
            </div>
            <p className="mt-2 text-sm text-cyan-100/80">Composites, type, overlays, motion passes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
