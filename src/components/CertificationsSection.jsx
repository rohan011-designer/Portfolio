import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Order: UI/UX → Full Stack → Digital Marketing → Graphic Design → Achievement
const cards = [
  {
    type: 'cert',
    name: 'UI/UX Design',
    sub: 'Certificate of Achievement',
    issuer: 'BeepLearn · Shark Tank India',
    date: 'Feb 2026',
    color: 'var(--accent)',          // #2563eb
    colorRaw: '#2563eb',
    image: '/images/cert_beep.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    type: 'cert',
    name: 'Full Stack Dev',
    sub: 'Java · J2EE · Angular',
    issuer: 'The Kiran Academy',
    date: 'Oct 2024',
    color: '#f59e0b',
    colorRaw: '#f59e0b',
    image: '/images/cert_kiran.png',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    type: 'cert',
    name: 'Digital Marketing',
    sub: 'Fundamentals Certification',
    issuer: 'Google Digital Unlocked',
    date: 'Aug 2022',
    color: '#22c55e',
    colorRaw: '#22c55e',
    image: '/images/cert_google.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    type: 'cert',
    name: 'Graphic Design',
    sub: 'Certificate of Excellence',
    issuer: 'NICT / Manaswin Edu-Con',
    date: 'Jul 2021',
    color: '#ec4899',
    colorRaw: '#ec4899',
    image: '/images/cert_nict.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <circle cx="13.5" cy="6.5" r="2.5"/>
        <path d="M17.44 14.62A4 4 0 0 1 14 16H6a4 4 0 0 1 0-8h1"/>
        <path d="M15 17.5a4.5 4.5 0 1 0 0 9"/>
      </svg>
    ),
  },
  {
    type: 'achievement',
    name: '1st in Batch',
    sub: 'Top Performer · 94 / 100',
    issuer: 'PRT Design Assessment',
    date: '2026',
    color: '#f59e0b',
    colorRaw: '#f59e0b',
    image: '/images/achivement.jpeg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
]

function ItemCard({ card, index }) {
  const [lightbox, setLightbox] = useState(false)
  const isAchievement = card.type === 'achievement'

  return (
    <>
      <motion.div
        className="cert-card-wrap"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.09, duration: 0.55 }}
        whileHover={{ y: -6, scale: 1.03 }}
        onClick={() => setLightbox(true)}
        style={{ cursor: 'none' }}
      >
        {/* Card shell — matches site glass style */}
        <div style={{
          width: 230,
          background: 'var(--surface)',
          border: `1px solid ${card.colorRaw}22`,
          borderRadius: 20,
          overflow: 'hidden',
          position: 'relative',
          transition: 'border-color 0.3s',
          boxShadow: `0 4px 30px rgba(0,0,0,0.4), 0 0 0 0 ${card.colorRaw}00`,
        }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = `${card.colorRaw}55`
            e.currentTarget.style.boxShadow = `0 8px 40px rgba(0,0,0,0.5), 0 0 24px ${card.colorRaw}18`
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = `${card.colorRaw}22`
            e.currentTarget.style.boxShadow = `0 4px 30px rgba(0,0,0,0.4)`
          }}
        >
          {/* Subtle top accent bar */}
          <div style={{
            height: 2,
            background: `linear-gradient(90deg, transparent, ${card.colorRaw}80, transparent)`,
          }} />

          {/* Shimmer overlay on hover — CSS only, no Tailwind animations */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(135deg, ${card.colorRaw}06 0%, transparent 60%)`,
            pointerEvents: 'none',
          }} />

          <div style={{ padding: '1.75rem 1.5rem 1.5rem', position: 'relative', zIndex: 1 }}>
            {/* Icon circle */}
            <div style={{
              width: 52, height: 52, borderRadius: '50%',
              background: `${card.colorRaw}12`,
              border: `1px solid ${card.colorRaw}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.25rem',
              color: card.colorRaw,
            }}>
              {card.icon}
            </div>

            {/* Name */}
            <div style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: '1rem', color: 'var(--text-primary)',
              lineHeight: 1.2, marginBottom: '0.35rem',
            }}>
              {card.name}
            </div>

            {/* Sub (coloured) */}
            <div style={{
              fontSize: '0.72rem', fontWeight: 600,
              color: card.colorRaw, marginBottom: '0.4rem',
            }}>
              {card.sub}
            </div>

            {/* Issuer */}
            <div style={{
              fontSize: '0.75rem', color: 'var(--text-secondary)',
              marginBottom: '0.25rem',
            }}>
              {card.issuer}
            </div>

            {/* Date */}
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              {card.date}
            </div>

            {/* Divider */}
            <div style={{
              height: 1,
              background: `linear-gradient(90deg, ${card.colorRaw}40, transparent)`,
              margin: '1rem 0 0.75rem',
            }} />

            {/* View label */}
            <div style={{
              fontSize: '0.67rem', letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem',
            }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              {isAchievement ? 'View Achievement' : 'View Certificate'}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(0,0,0,0.93)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem', cursor: 'zoom-out',
            }}
          >
            <motion.img
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              src={card.image}
              alt={card.name}
              style={{
                maxWidth: '90vw', maxHeight: '85vh',
                borderRadius: 14,
                boxShadow: `0 0 80px ${card.colorRaw}30, 0 32px 80px rgba(0,0,0,0.7)`,
                objectFit: 'contain',
                border: `1px solid ${card.colorRaw}30`,
              }}
              onClick={e => e.stopPropagation()}
            />
            <motion.button
              whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.15)' }}
              onClick={() => setLightbox(false)}
              style={{
                position: 'absolute', top: '1.5rem', right: '2rem',
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                color: 'var(--text-primary)', borderRadius: '50%', width: 42, height: 42,
                fontSize: '1rem', cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s',
              }}
            >✕</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-sm" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          <div className="label" style={{ marginBottom: '1rem' }}>Credentials</div>
          <h2 className="heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Certifications &amp; Achievements
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '0.6rem' }}>
            Click any card to view
          </p>
        </motion.div>

        {/* 5 cards in a flex row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.25rem',
          justifyContent: 'center',
        }}>
          {cards.map((card, i) => (
            <ItemCard key={card.name} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
