import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Domains from '../sections/Domains'
import Teams from '../sections/Teams'
import Events from '../sections/Events'
import Outreach from '../sections/Outreach'
import Achievements from '../sections/Achievements'
import Sponsors from '../sections/Sponsors'
import Memories from '../sections/Memories'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <div className="relative overflow-hidden text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[45vh] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_35%)]" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Domains />
        <Teams />
        <Events />
        <Outreach />
        <Achievements />
        <Sponsors />
        <Memories />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
