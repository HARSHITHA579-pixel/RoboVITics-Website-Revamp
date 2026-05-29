import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const teamCards = [
  {
    title: 'Team Orcus',
    description: 'Combat robotics division focused on original, battle-ready machines and high-performance engineering.',
    meta: 'Founded 2016 • Ranked 6th worldwide',
  },
  {
    title: 'Core Board',
    description: 'Leadership, operations, and community coordination across events, design, R&D, and projects.',
    meta: 'Chairperson, Tech Head, PR Head, and more',
  },
]

export default function Teams() {
  return (
    <section id="teams" className="section-shell py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.35em] text-sky-100">Teams</p>
        <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">A culture of dedicated builders and bold strategists.</h2>
      </motion.div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {teamCards.map((team, index) => (
          <ScrollReveal
            key={team.title}
            className="glass-panel p-6"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-sky-100">{team.meta}</p>
            <h3 className="mt-3 font-display text-2xl text-white">{team.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-200/85">{team.description}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
