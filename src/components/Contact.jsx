import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-3xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-3xl font-semibold text-white/90"
      >
        Let’s collaborate
      </motion.h2>
      <motion.form
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative space-y-4 rounded-2xl border border-cyan-500/20 bg-white/5 p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input className="rounded-lg border border-white/10 bg-black/40 p-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Name" />
          <input type="email" className="rounded-lg border border-white/10 bg-black/40 p-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Email" />
        </div>
        <input className="w-full rounded-lg border border-white/10 bg-black/40 p-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Subject" />
        <textarea rows={5} className="w-full rounded-lg border border-white/10 bg-black/40 p-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Tell me about your project..." />
        <div className="flex items-center justify-between">
          <p className="text-sm text-cyan-200/70">Avg. response time: <span className="text-cyan-300">24h</span></p>
          <button className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 font-medium text-black shadow-[0_0_30px_-6px_rgba(56,189,248,0.6)] transition-transform hover:scale-[1.02] active:scale-[0.98]">
            Send
          </button>
        </div>
        <div className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-inset ring-cyan-500/10" />
      </motion.form>
    </section>
  )
}
