import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

// Correct filenames matching actual files in public/images/
const photoFaces = [
  { src: '/images/photo_suit.png',    className: 'cube-face--front'  },
  { src: '/images/photo_shadow.png',  className: 'cube-face--back'   },
  { src: '/images/photo_golden.jpeg', className: 'cube-face--left'   },
  { src: '/images/photo_bw.png',      className: 'cube-face--right'  },
  { src: '/images/photo_outdoor.png', className: 'cube-face--top'    },
  { src: '/images/photo_casual.png',  className: 'cube-face--bottom' },
]

function PhotoCube() {
  const containerRef = useRef(null)
  const cubeRef = useRef(null)
  const lastMouse = useRef(null)
  const targetRot = useRef({ x: -18, y: 32 })
  const currentRot = useRef({ x: -18, y: 32 })
  const rafRef = useRef(null)

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t
    const tick = () => {
      currentRot.current.x = lerp(currentRot.current.x, targetRot.current.x, 0.07)
      currentRot.current.y = lerp(currentRot.current.y, targetRot.current.y, 0.07)
      if (cubeRef.current) {
        cubeRef.current.style.transform =
          `translateZ(-11rem) rotateX(${currentRot.current.x}deg) rotateY(${currentRot.current.y}deg)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const handleMouseMove = (e) => {
    if (lastMouse.current) {
      const dx = e.clientX - lastMouse.current.x
      const dy = e.clientY - lastMouse.current.y
      targetRot.current.y += dx * 0.45
      targetRot.current.x -= dy * 0.45
    }
    lastMouse.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseLeave = () => {
    lastMouse.current = null
    targetRot.current = { x: -18, y: 32 }
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 500, cursor: 'none' }}
    >
      <div style={{
        position: 'absolute', width: 360, height: 360, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="cube-wrap">
        <div
          ref={cubeRef}
          className="cube-container"
          style={{ animation: 'none', transform: 'translateZ(-11rem) rotateX(-18deg) rotateY(32deg)' }}
        >
          {photoFaces.map(({ src, className }) => (
            <div key={className} className={`cube-face ${className}`}>
              <img
                src={src}
                alt="Rohan Girase"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div style={{
        position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
        fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.13)', pointerEvents: 'none', whiteSpace: 'nowrap',
      }}>
        Move cursor to rotate
      </div>
    </div>
  )
}

const stats = [
  { value: '9mo', label: 'Experience' },
  { value: '1',   label: 'Research Paper' },
  { value: '4',   label: 'Certifications' },
]

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '4rem', alignItems: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          <PhotoCube />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="label" style={{ marginBottom: '1rem' }}>About Me</div>
          <h2 className="heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '1.5rem' }}>
            Results-driven designer<br />
            <span className="gradient-text">with a research-first mindset</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.97rem', marginBottom: '1.25rem' }}>
            I'm a UI/UX and Product Designer with hands-on experience in end-to-end product design,
            user research, and design systems. I translate complex business requirements into intuitive,
            scalable digital experiences through data-informed decisions.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.97rem', marginBottom: '2.5rem' }}>
            Skilled in cross-functional collaboration, stakeholder communication, and agile design
            workflows — consistently delivering measurable improvements in usability, engagement,
            and development efficiency.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
            {stats.map(s => (
              <motion.div
                key={s.label}
                whileHover={{ scale: 1.06, borderColor: 'rgba(37,99,235,0.35)' }}
                className="glass"
                style={{ padding: '1.1rem 0.5rem', textAlign: 'center', borderRadius: 14, cursor: 'default' }}
              >
                <div style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 800,
                  fontSize: '1.7rem', color: '#fff', lineHeight: 1,
                }}>{s.value}</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.35rem', lineHeight: 1.3 }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
