import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const sponsors = [
  'DigitalOcean',
  'Syolo',
  'SagTaur',
  'L&T',
  'Siemens',
  'Analog Devices',
  'Schneider Electric',
  'Autodesk',
  'Persistence Systems',
  'Texas Instruments',
]

export default function Sponsors() {
  return (
    <section id="sponsors" className="section-shell py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.35em] text-sky-100">Sponsors</p>
        <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">Collaborations that elevate the ecosystem.</h2>
      </motion.div>

      <div className="mt-8 flex flex-wrap gap-3">
        {sponsors.map((sponsor) => (
          <ScrollReveal
            key={sponsor}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100"
          >
            {sponsor}
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
