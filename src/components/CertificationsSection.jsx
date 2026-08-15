import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Order: 1st in Batch → UI/UX → Full Stack → Graphic Design → Digital Marketing
const cards = [
  {
    type: 'achievement',
    name: '1st in Batch',
    sub: 'Top Performer · 94 / 100',
    issuer: 'PRT Design Assessment',
    date: '2026',
    color: '#d97706',
    colorRaw: '#d97706',
    image: '/images/achivement.jpeg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    type: 'cert',
    name: 'UI/UX Design',
    sub: 'Certificate of Achievement',
    issuer: 'BeepLearn · Shark Tank India',
    date: 'Feb 2026',
    color: '#2563eb',
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
    color: '#4f46e5',
    colorRaw: '#4f46e5',
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
    name: 'Graphic Design',
    sub: 'Certificate of Excellence',
    issuer: 'NICT / Manaswin Edu-Con',
    date: 'Jul 2021',
    color: '#db2777',
    colorRaw: '#db2777',
    image: '/images/cert_nict.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="m12 18-6 6-4-4 6-6h8v8z" />
        <path d="m21.1 3.9-9.1 9.1" />
        <circle cx="17.5" cy="6.5" r="2.5" />
      </svg>
    ),
  },
  {
    type: 'cert',
    name: 'Digital Marketing',
    sub: 'Fundamentals Certification',
    issuer: 'Google Digital Unlocked',
    date: 'Aug 2022',
    color: '#0d9488',
    colorRaw: '#0d9488',
    image: '/images/cert_google.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
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
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.09, duration: 0.55 }}
        whileHover={{ y: -6 }}
        onClick={() => setLightbox(true)}
        className="book-card-container"
        style={{ cursor: 'none' }}
      >
        {/* Cover Page */}
        <div className="book-cover" style={{ borderLeft: `5px solid ${card.colorRaw}` }}>
          <div>
            {/* Icon circle */}
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
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
              fontFamily: 'var(--font-heading)', fontWeight: 800,
              fontSize: '1.05rem', color: 'var(--text-primary)',
              lineHeight: 1.25, marginBottom: '0.35rem',
            }}>
              {card.name}
            </div>

            {/* Sub */}
            <div style={{
              fontSize: '0.72rem', fontWeight: 600,
              color: card.colorRaw, marginBottom: '0.4rem',
            }}>
              {card.sub}
            </div>
          </div>

          <div style={{ width: '100%' }}>
            {/* Issuer */}
            <div style={{
              fontSize: '0.78rem', color: 'var(--text-secondary)',
              fontWeight: 500,
              marginBottom: '0.2rem',
            }}>
              {card.issuer}
            </div>
            {/* Date */}
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              {card.date}
            </div>
            {/* Hover to open info */}
            <div style={{
              fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem',
              marginTop: '0.85rem', borderTop: '1px solid var(--border)', paddingTop: '0.5rem'
            }}>
              <span>Open book</span>
              <span>→</span>
            </div>
          </div>
        </div>

        {/* Inside Page */}
        <div className="book-inside">
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', width: '100%' }}>
            {/* Miniature Certificate Image */}
            <div style={{
              width: '100%', height: 110,
              borderRadius: 8,
              overflow: 'hidden',
              background: 'var(--border)',
              border: `1px solid ${card.colorRaw}22`,
            }}>
              <img
                src={card.image}
                alt={card.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--text-secondary)',
              lineHeight: 1.3,
            }}>
              {isAchievement ? 'View Achievement' : 'View Certificate'}
            </span>
          </div>

          <button
            className="btn btn-primary"
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              background: 'var(--accent)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '0.5rem 1rem',
              cursor: 'none',
              boxShadow: '0 8px 24px rgba(59, 130, 246, 0.2)',
              transition: 'all 0.2s',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <span>Expand Image</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
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
          style={{ marginBottom: '2rem', textAlign: 'center' }}
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
