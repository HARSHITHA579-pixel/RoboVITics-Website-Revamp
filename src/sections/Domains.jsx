import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import Typewriter from '../components/Typewriter'

const domains = [
  { title: 'Electrical', desc: 'Power systems, embedded electronics, and robotics control.', accent: 'from-cyan-400/30 to-cyan-300/5' },
  { title: 'Mechanical', desc: 'CAD, fabrication, and durable robot mechanisms.', accent: 'from-sky-400/30 to-blue-300/5' },
  { title: 'ML & AI', desc: 'Vision, perception, and intelligent autonomy pipelines.', accent: 'from-indigo-400/30 to-sky-300/5' },
  { title: 'Cybersecurity', desc: 'Secure systems, connected devices, and threat awareness.', accent: 'from-fuchsia-400/30 to-pink-300/5' },
  { title: 'Web Development', desc: 'Frontend and backend products for club and community tools.', accent: 'from-emerald-400/30 to-cyan-300/5' },
  { title: 'App Development', desc: 'Mobile-first experiences that extend robotics workflows.', accent: 'from-violet-400/30 to-indigo-300/5' },
]

export default function Domains() {
  return (
    <section id="domains" className="section-shell py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.35em] text-sky-100">Domains</p>
        <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
          <Typewriter words={["Built across the full robotics stack."]} speed={100} delayBetweenWords={2000} cursorChar="|" />
        </h2>
      </motion.div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {domains.map((domain, index) => (
          <ScrollReveal
            key={domain.title}
            className={`rounded-[24px] border border-white/10 bg-gradient-to-br ${domain.accent} p-[1px]`}
          >
            <div className="rounded-[23px] bg-slate-950/80 px-5 py-5">
              <p className="font-display text-2xl text-white">{domain.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-200/85">{domain.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
