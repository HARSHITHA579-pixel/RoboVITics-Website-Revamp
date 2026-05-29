export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="section-shell flex flex-col gap-3 px-6 py-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} RoboVITics. Built for the next generation of builders.</p>
        <p className="text-slate-400">VIT Vellore • Robotics • Innovation • Community</p>
      </div>
    </footer>
  )
}
