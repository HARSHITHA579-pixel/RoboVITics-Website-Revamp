import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import cardImage from '../assets/RoboVITics_image.jpg'

const cards = [
  {
    title: 'About VIT',
    subtitle: 'A world-class innovation ecosystem',
    description:
      'Vellore Institute of Technology is a launchpad for students who build products, compete internationally, and solve real engineering challenges every day.',
    imageAlt: 'VIT campus students collaborating on robotics.',
  },
  {
    title: 'About Us',
    subtitle: 'The RoboVITics community',
    description:
      'We are a student club that blends robotics, AI, and hands-on making. Our members learn together, mentor one another, and turn ideas into competitive projects.',
    imageAlt: 'RoboVITics team members brainstorming together.',
  },
]

function AnimatedCard({ title, subtitle, description, imageAlt }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [120, 0, 0, -120])
  const rotateX = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [24, 0, 0, -16])
  const rotateZ = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [10, 0, 0, -10])
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.18, 0.82, 0.92, 1], [0, 1, 1, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.94, 1, 1, 0.94])

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        rotateX,
        rotateZ,
        opacity,
        scale,
        transformPerspective: 1200,
        transformOrigin: 'center bottom',
      }}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_28px_120px_rgba(15,23,42,0.35)] backdrop-blur-xl"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-sky-200/80">{title}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{subtitle}</h3>
        </div>
        <div className="rounded-3xl bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-200">
          {title === 'About VIT' ? 'VIT' : 'Us'}
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-200/85">{description}</p>

      <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/80">
        <img src={cardImage} alt={imageAlt} className="h-56 w-full object-cover object-center" />
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-shell py-12 sm:py-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="max-w-2xl"></div>

        <div className="grid gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <AnimatedCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
