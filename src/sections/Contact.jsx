import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="section-shell py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="glass-panel p-8"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-sky-100">Contact</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <h2 className="font-display text-3xl text-white sm:text-4xl">Want to collaborate, sponsor, or join?</h2>
            <p className="mt-4 text-sm leading-7 text-slate-200/85">
              Reach out to the club for events, workshops, partnerships, or a conversation about building the next generation of robotics with us.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-100">
            <a href="mailto:robovitics@vit.ac.in" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-sky-200">
              Email: robovitics@vit.ac.in
            </a>
            <a href="tel:7875115111" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-sky-200">
              Phone: 7875115111
            </a>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              Social: Instagram • LinkedIn • YouTube
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
