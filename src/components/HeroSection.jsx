import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

// ── Correct filenames matching actual files in public/images/ ──
const cardData = [
  { src: '/images/photo_suit.png',    alt: 'Rohan Girase', rotate: '-5deg',  top: '12%', left: '6%',  width: 200 },
  { src: '/images/photo_shadow.png',  alt: 'Rohan Girase', rotate: '7deg',   top: '18%', left: '28%', width: 170 },
  { src: '/images/photo_golden.jpeg', alt: 'Rohan Girase', rotate: '-10deg', top: '8%',  left: '47%', width: 255 },
  { src: '/images/photo_bw.png',      alt: 'Rohan Girase', rotate: '15deg',  top: '13%', left: '70%', width: 165 },
  { src: '/images/photo_outdoor.png', alt: 'Rohan Girase', rotate: '-12deg', top: '52%', left: '68%', width: 180 },
  { src: '/images/photo_casual.png',  alt: 'Rohan Girase', rotate: '9deg',   top: '54%', left: '18%', width: 190 },
]

function DragCard({ containerRef, src, alt, top, left, rotate, width }) {
  const [zIndex, setZIndex] = useState(0)

  const bringToFront = () => {
    const els = document.querySelectorAll('.drag-card')
    let max = 0
    els.forEach(el => {
      const z = parseInt(window.getComputedStyle(el).zIndex) || 0
      if (z > max) max = z
    })
    setZIndex(max + 1)
  }

  return (
    <motion.div
      className="drag-card"
      onMouseDown={bringToFront}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
      style={{
        position: 'absolute',
        top,
        left,
        rotate,
        zIndex,
        width,
        cursor: 'grab',
        // Polaroid frame
        background: '#f0ece4',
        padding: '6px 6px 28px 6px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.65), 0 2px 8px rgba(0,0,0,0.4)',
        userSelect: 'none',
        touchAction: 'none',
        flexShrink: 0,
      }}
      whileDrag={{ cursor: 'grabbing', scale: 1.04 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Image fills card naturally — no fixed height so it always shows fully */}
      <img
        src={src}
        alt={alt}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',        // natural height — image always fully visible
          objectFit: 'unset',    // no cropping
        }}
        draggable={false}
      />
    </motion.div>
  )
}

export default function HeroSection() {
  const containerRef = useRef(null)

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      display: 'grid',
      placeContent: 'center',
      overflow: 'hidden',
      background: '#080808',
    }}>

      {/* Giant watermark name */}
      <div style={{ position: 'relative', zIndex: 0, textAlign: 'center', lineHeight: 1 }}>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(100px, 20vw, 220px)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          color: '#1a1a1a',
          userSelect: 'none',
          lineHeight: 0.9,
        }}>
          ROHAN<span style={{ color: '#2563eb' }}>.</span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '2rem', alignItems: 'center' }}
        >
          {['UI/UX Designer', 'Product Designer', 'Pune, India'].map((text, i) => (
            <span key={text} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              {i > 0 && <span style={{ color: '#2563eb', fontSize: '0.5rem' }}>●</span>}
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 600,
                letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
              }}>{text}</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Draggable polaroid cards */}
      <div ref={containerRef} style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
        {cardData.map((card, i) => (
          <DragCard key={i} containerRef={containerRef} {...card} />
        ))}
      </div>

      {/* Drag hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{
          position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
          zIndex: 20, display: 'flex', alignItems: 'center', gap: '0.6rem',
          color: 'rgba(255,255,255,0.18)', fontSize: '0.7rem', fontWeight: 600,
          letterSpacing: '0.2em', textTransform: 'uppercase', pointerEvents: 'none',
        }}
      >
        <motion.span animate={{ x: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>⟵</motion.span>
        Drag the cards
        <motion.span animate={{ x: [0, -5, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>⟶</motion.span>
      </motion.div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        style={{
          position: 'absolute', bottom: '2.5rem', right: '3rem', zIndex: 20,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          color: 'rgba(255,255,255,0.12)', fontSize: '0.65rem', letterSpacing: '0.2em',
          textTransform: 'uppercase', pointerEvents: 'none',
        }}
      >
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>↓</motion.span>
        Scroll
      </motion.div>
    </section>
  )
}
