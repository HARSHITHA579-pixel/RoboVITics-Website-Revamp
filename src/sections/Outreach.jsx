import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const pillars = [
  'Collaborating with schools and educational institutions across India',
  'Sparking curiosity in young minds through hands-on STEM learning',
  'Creating inclusive sessions that bring out untapped potential',
]

export default function Outreach() {
  return (
    <section id="outreach" className="section-shell py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-sky-100">Outreach</p>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">Kartavya — giving back with purpose.</h2>
          <p className="mt-4 text-base leading-7 text-slate-200/85">
            RoboVITics believes in making technology accessible and meaningful. Through outreach, the club builds relationships with students and communities beyond campus, creating a ripple effect of curiosity and confidence.
          </p>
        </motion.div>

        <ScrollReveal className="glass-panel p-6">
          <div className="space-y-3">
            {pillars.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-sm leading-7 text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
