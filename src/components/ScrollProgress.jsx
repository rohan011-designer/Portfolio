import { useScroll, motion, useTransform } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div style={{
      position: 'fixed', left: 0, top: 0, width: 3, height: '100vh',
      zIndex: 9999, background: 'rgba(255,255,255,0.04)', pointerEvents: 'none',
    }}>
      <motion.div style={{
        width: '100%', height: '100%', originY: 0, scaleY,
        background: 'linear-gradient(180deg, var(--accent), var(--accent-warm))',
      }} />
    </div>
  )
}
