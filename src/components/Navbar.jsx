import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'

const links = ['About', 'Skills', 'Experience', 'Work', 'Certifications', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initialize state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0.85rem 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'var(--bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px rgba(15, 23, 42, 0.04)' : 'none',
        transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Logo — photo with website-theme border (no color glow) */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'none' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          overflow: 'hidden',
          border: '1px solid var(--border)',
          background: 'var(--surface)',
          flexShrink: 0,
        }}>
          <img
            src="/images/profile.jpeg"
            alt="Rohann Giirase"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'brightness(0.9)' }}
          />
        </div>
        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
          Rohann Giirase
        </span>
      </motion.div>

      {/* Nav links */}
      <ul style={{ display: 'flex', gap: '0.25rem', listStyle: 'none', alignItems: 'center' }}>
        {links.map(l => (
          <li key={l}>
            <button
              onClick={() => scrollTo(l)}
              style={{
                background: 'none', border: 'none', padding: '0.4rem 0.85rem',
                color: 'var(--text-secondary)', fontFamily: 'var(--font-body)',
                fontSize: '0.85rem', fontWeight: 500, cursor: 'none',
                borderRadius: 8, transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.target.style.color = 'var(--text-primary)'; e.target.style.background = 'rgba(59, 130, 246, 0.08)' }}
              onMouseLeave={e => { e.target.style.color = 'var(--text-secondary)'; e.target.style.background = 'none' }}
            >
              {l}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA group — Hire Me + Download Resume */}
      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
        <motion.a
          href="/rohann_giirase.pdf"
          download="Rohann_Giirase_Resume.pdf"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="btn btn-outline"
          style={{ fontSize: '0.8rem', padding: '0.5rem 1.1rem', gap: '0.35rem' }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Resume
        </motion.a>
        <motion.a
          href="mailto:giraserohan90@gmail.com"
          whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(59,130,246,0.2)' }}
          whileTap={{ scale: 0.97 }}
          className="btn btn-primary"
          style={{ fontSize: '0.8rem', padding: '0.5rem 1.1rem' }}
        >
          Hire Me ↗
        </motion.a>
      </div>
    </motion.nav>
  )
}
