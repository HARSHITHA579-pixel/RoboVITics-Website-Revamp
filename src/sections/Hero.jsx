import { motion } from 'framer-motion'
import roboticsVideo from '../assets/RoboVITcs_video.mp4'
import mobileBg from '../assets/RoboVITics_image.jpg'
import logo from '../assets/RoboVITics_Logo.png'

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden">
      <style>{`
        .hero-desktop-video {
          display: block;
        }

        .hero-mobile-image {
          display: none;
        }

        @media (max-width: 767px) {
          .hero-desktop-video {
            display: none;
          }

          .hero-mobile-image {
            display: block;
          }
        }
      `}</style>

      <video
        className="hero-desktop-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={mobileBg}
      >
        <source src={roboticsVideo} type="video/mp4" />
      </video>

      <img
        src={mobileBg}
        alt="RoboVITics mobile background"
        className="hero-mobile-image absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.55),rgba(3,7,18,0.28),rgba(3,7,18,0.78))]" />

      <div className="absolute inset-0 hidden md:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_15%,rgba(56,189,248,0.18),transparent_18%),radial-gradient(circle_at_80%_28%,rgba(59,130,246,0.18),transparent_20%)]" />
      </div>

      <div className="absolute inset-0 md:hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.62),rgba(3,7,18,0.78))]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 flex min-h-screen items-start justify-start px-6 pb-10 pt-[75vh] sm:px-8 lg:px-10"
      >
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={logo}
            alt="RoboVITics Logo"
            className="h-10 w-auto sm:h-12 md:h-16 lg:h-20"
          />
        </div>
      </motion.div>
    </section>
  )
}
