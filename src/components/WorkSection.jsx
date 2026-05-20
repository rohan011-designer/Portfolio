import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── All items: projects + publication ────────────────────────────────────────
const items = [
  {
    id: 'packpal',
    type: 'Project',
    label: 'End-to-End UI/UX Case Study',
    color: '#2563eb',
    image: '/images/packpal.png',
    title: 'PackPal',
    subtitle: 'Smart Travel Packing App',
    tags: ['UI/UX Design', 'User Research', 'Prototyping', 'Figma'],
    highlights: [
      '100% planned milestones met in 6 weeks',
      '10+ users tested · 4/5 avg satisfaction',
      '35% reduction in task completion errors',
    ],
    link: '#',
    linkLabel: 'View on Behance ↗',
    confidential: false,
  },
  {
    id: 'cricket',
    type: 'Project',
    label: 'Ongoing Client Project',
    color: '#22c55e',
    image: '/images/cricket.png',
    title: 'Cricket Analytics',
    subtitle: 'Confidential Sports Analytics Product',
    tags: ['Product Design', 'Live Data UX', 'Client Work', 'Figma'],
    highlights: [
      'Real-world product for cricket coaches',
      'Ball-by-ball performance data capture',
      'Live training environment UX design',
    ],
    link: null,
    linkLabel: 'Confidential — Details on Request',
    confidential: true,
  },
  {
    id: 'research',
    type: 'Publication',
    label: 'IJIRT · April 2026',
    color: '#93b4f8',
    image: '/images/research_cert.png',
    title: 'Cognitive Load in AI-Augmented SaaS Dashboards',
    subtitle: 'Design Patterns for Decision Fatigue Reduction',
    tags: ['Research', 'Impact Factor 8.412', 'ISSN 2349-6002', 'Vol. 12, Issue 11'],
    highlights: [
      'Proposed the PACE Framework to reduce cognitive load in AI-driven dashboards.',
      'Examined AI-generated information overload on decision fatigue in enterprise SaaS.',
    ],
    link: 'https://ijirt.org/article?manuscript=199496',
    linkLabel: 'Read Paper ↗',
    confidential: false,
  },
]

// Card position classes mapped from offset
function getPosition(offset, total) {
  // offset = (i - current + total) % total
  if (offset === 0) return 'center'
  if (offset === 1) return 'down-1'
  if (offset === 2) return 'down-2'
  if (offset === total - 1) return 'up-1'
  if (offset === total - 2) return 'up-2'
  return 'hidden'
}

const CARD_STYLES = {
  center:  { y: 0,    scale: 1.08,  opacity: 1,    zIndex: 10, filter: 'none' },
  'up-1':  { y: -130, scale: 0.9,   opacity: 0.75, zIndex: 5,  filter: 'grayscale(80%)' },
  'up-2':  { y: -240, scale: 0.78,  opacity: 0.45, zIndex: 1,  filter: 'grayscale(100%)' },
  'down-1':{ y:  130, scale: 0.9,   opacity: 0.75, zIndex: 5,  filter: 'grayscale(80%)' },
  'down-2':{ y:  240, scale: 0.78,  opacity: 0.45, zIndex: 1,  filter: 'grayscale(100%)' },
  hidden:  { y: 0,    scale: 0.5,   opacity: 0,    zIndex: 0,  filter: 'grayscale(100%)' },
}

export default function WorkSection() {
  const [current, setCurrent] = useState(0)
  const total = items.length

  const go = useCallback((dir) => {
    setCurrent(c => (c + dir + total) % total)
  }, [total])

  const active = items[current]

  return (
    <section id="work" className="section">
      <div className="container">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="label" style={{ marginBottom: '1rem' }}>Selected Work & Research</div>
          <h2 className="heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Projects &amp; Publications
          </h2>
        </motion.div>

        {/* ── Main layout: carousel left · info right ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '420px 1fr',
          gap: '5rem',
          alignItems: 'center',
          minHeight: 480,
        }}>

          {/* ─── Left: Vertical image carousel ─── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>

            {/* Nav arrows column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button
                onClick={() => go(-1)}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  width: 44, height: 44,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(37,99,235,0.2)'
                  e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                }}
              >↑</button>
              <button
                onClick={() => go(1)}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  width: 44, height: 44,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(37,99,235,0.2)'
                  e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                }}
              >↓</button>
            </div>

            {/* Card stack */}
            <div style={{
              position: 'relative',
              height: 480,
              flex: 1,
              perspective: '1000px',
            }}>
              {items.map((item, i) => {
                const offset = (i - current + total) % total
                const pos = getPosition(offset, total)
                const s = CARD_STYLES[pos]
                return (
                  <div
                    key={item.id}
                    onClick={() => setCurrent(i)}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      right: 0,
                      transform: `translateY(calc(-50% + ${s.y}px)) scale(${s.scale})`,
                      cursor: pos === 'center' ? 'default' : 'pointer',
                      borderRadius: 16,
                      overflow: 'hidden',
                      transformOrigin: 'center center',
                      boxShadow: pos === 'center'
                        ? '0 24px 60px rgba(0,0,0,0.7), 0 4px 16px rgba(0,0,0,0.5)'
                        : '0 8px 24px rgba(0,0,0,0.4)',
                      border: pos === 'center'
                        ? `1px solid ${active.color}30`
                        : '1px solid rgba(255,255,255,0.06)',
                      opacity: s.opacity,
                      zIndex: s.zIndex,
                      transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                    }}
                  >
                    {/* Image — flexible height, always fully visible */}
                    <div style={{ width: '100%', position: 'relative' }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: '100%',
                          height: 'auto',          // expands naturally with image
                          minHeight: 140,           // prevents collapse on load
                          display: 'block',
                          filter: s.filter,
                          transition: 'filter 0.5s ease',
                        }}
                      />
                      {pos !== 'center' && (
                        <div style={{
                          position: 'absolute', inset: 0,
                          background: 'rgba(8,8,8,0.3)',
                        }} />
                      )}
                    </div>
                  </div>
                 )
              })}
            </div>

            {/* Dot indicators */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: 8,
                    height: i === current ? 24 : 8,
                    borderRadius: 4,
                    background: i === current ? active.color : 'rgba(255,255,255,0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>

          {/* ─── Right: Info panel ─── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Type badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <span style={{
                  padding: '0.28rem 0.85rem', borderRadius: 100,
                  background: `${active.color}18`,
                  border: `1px solid ${active.color}35`,
                  color: active.color,
                  fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                }}>
                  {active.type}
                </span>
                <span style={{
                  padding: '0.28rem 0.85rem', borderRadius: 100,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'var(--text-muted)',
                  fontSize: '0.68rem', fontWeight: 600,
                }}>
                  {active.label}
                </span>
                {active.confidential && (
                  <span style={{
                    padding: '0.28rem 0.85rem', borderRadius: 100,
                    background: 'rgba(34,197,94,0.12)',
                    border: '1px solid rgba(34,197,94,0.28)',
                    color: '#22c55e',
                    fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em',
                  }}>ONGOING</span>
                )}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontWeight: 800,
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                color: '#fff', lineHeight: 1.2, marginBottom: '0.5rem',
              }}>
                {active.title}
              </h3>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
                {active.subtitle}
              </div>

              {/* Highlights */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.75rem', listStyle: 'none' }}>
                {active.highlights.map(h => (
                  <li key={h} style={{ display: 'flex', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                    <span style={{ color: active.color, flexShrink: 0, marginTop: 2 }}>→</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
                {active.tags.map(t => (
                  <span key={t} style={{
                    padding: '0.25rem 0.7rem', borderRadius: 100,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.72rem', fontWeight: 500,
                  }}>{t}</span>
                ))}
              </div>

              {/* CTA */}
              {active.link ? (
                <motion.a
                  href={active.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4, boxShadow: `0 12px 40px ${active.color}40` }}
                  className="btn btn-primary"
                  style={{ background: active.color, fontSize: '0.875rem' }}
                >
                  {active.linkLabel}
                </motion.a>
              ) : (
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontStyle: 'italic' }}>
                  {active.linkLabel}
                </span>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
