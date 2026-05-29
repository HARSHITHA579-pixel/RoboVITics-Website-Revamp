import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const events = [
  {
    title: 'Equinox',
    meta: '36-hour tech sprint',
    desc: 'A high-energy event for ideation, collaboration, mentorship, and rapid prototyping.',
  },
  {
    title: 'Vortex 360',
    meta: 'CAD modelling hackathon',
    desc: 'A design-forward challenge driven by creativity, usability, and engineering thinking.',
  },
  {
    title: 'Hands on Robotics',
    meta: 'Annual beginner workshop',
    desc: 'A practical workshop for building line followers, obstacle avoiders, and core robotics skills.',
  },
  {
    title: 'Robowars',
    meta: 'Flagship combat event',
    desc: 'The club’s iconic robot combat arena, blending competitive energy with spectacular design.',
  },
]

export default function Events() {
  return (
    <section id="events" className="section-shell py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.35em] text-sky-100">Events</p>
        <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">Signature experiences that put students in the spotlight.</h2>
      </motion.div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {events.map((event, index) => (
          <ScrollReveal
            key={event.title}
            className="glass-panel p-6"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-sky-100">{event.meta}</p>
            <h3 className="mt-3 font-display text-2xl text-white">{event.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-200/85">{event.desc}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
