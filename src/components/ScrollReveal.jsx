import { motion } from 'framer-motion'

export default function ScrollReveal({ className = '', children, style, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 14, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className={className}
      style={{
        transformPerspective: 1200,
        transformOrigin: 'center bottom',
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
