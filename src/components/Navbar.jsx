import { motion } from 'framer-motion'
import logo from '../assets/RoboVITics_Logo.png'

export default function Navbar() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Events', href: '#events' },
    { label: 'Memories', href: '#memories' },
    { label: 'Contact Us', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg"
    >
      <div className="border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          {/* Logo - Left */}
          <div>
            <img
              src={logo}
              alt="RoboVITics Logo"
              className="h-8 w-auto sm:h-9"
            />
            <span className="sr-only">RoboVITics</span>
          </div>

          {/* Navigation Links - Right */}
          <nav className="ml-auto hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="ml-auto md:hidden inline-flex items-center gap-2 text-white/80 hover:text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  )
}
