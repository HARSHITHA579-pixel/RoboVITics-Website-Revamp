import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const memories = [
  { title: 'RoboWars', caption: 'High-octane competition, unforgettable energy.' },
  { title: 'Holi Celebrations', caption: 'Color, community, and shared joy.' },
  { title: 'Friendship Day', caption: 'Moments of connection beyond the lab.' },
  { title: 'Junior Members Meet', caption: 'A welcoming space for new ideas and new faces.' },
]

export default function Memories() {
  return (
    <section id="memories" className="section-shell py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.35em] text-sky-100">Memories</p>
        <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">Moments that define the spirit of the club.</h2>
      </motion.div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {memories.map((memory) => (
          <ScrollReveal
            key={memory.title}
            className="glass-panel p-5"
          >
            <div className="rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,rgba(56,189,248,0.16),rgba(59,130,246,0.08))] px-4 py-10">
              <p className="font-display text-2xl text-white">{memory.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-200/85">{memory.caption}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
