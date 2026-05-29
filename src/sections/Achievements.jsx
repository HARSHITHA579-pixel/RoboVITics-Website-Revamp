import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const achievements = [
  { title: 'Winner', meta: 'PU Projections 21', detail: 'VULCAN — Hell in the Cell (15Kg)' },
  { title: 'Best Engineering Design', meta: 'RoboWars 2018', detail: 'RAVEN stood out for design precision and performance' },
  { title: 'Ranked 3rd', meta: 'RoboWars 2019', detail: 'Featuring RAVEN at Anna University' },
  { title: 'Runner Up', meta: 'RoboWars 2020', detail: 'A strong finish at BITS Goa' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.35em] text-sky-100">Achievements</p>
        <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">A proud record of competition and craftsmanship.</h2>
      </motion.div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {achievements.map((item, index) => (
          <ScrollReveal
            key={item.title + item.meta}
            className="glass-panel p-5"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-sky-100">{item.meta}</p>
            <h3 className="mt-3 font-display text-2xl text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-200/85">{item.detail}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
