import { motion } from 'framer-motion'

function ProfileCard() {
  const handleConnect = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div 
        className="hover-scale"
        style={{
          width: '100%',
          maxWidth: '380px',
          background: 'var(--bg-2)',
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(59, 130, 246, 0.05), 0 1px 3px rgba(0,0,0,0.02)',
          border: '1px solid var(--border)',
          overflow: 'hidden',
          cursor: 'none',
        }}
      >
        {/* Top Image area */}
        <div className="image-container" style={{ position: 'relative' }}>
          <img 
            src="/images/about.jpeg"
            alt="Rohaan Girase" 
            className="image-scale"
            style={{
              width: '100%',
              aspectRatio: '1/1',
              objectFit: 'cover',
              objectPosition: 'top',
              display: 'block',
            }}
          />
          {/* Gradient Overlay */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.6) 0%, transparent 100%)',
            pointerEvents: 'none',
          }} />
          
          {/* Top-left text overlay */}
          <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.6rem',
              fontWeight: 800,
              color: '#ffffff',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              margin: 0,
            }}>
              Rohan Girase
            </h2>
          </div>
        </div>
        
        {/* Bottom details area */}
        <div style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-2)' }}>
          <div className="flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div 
              className="hover-scale-sm"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--border)',
                flexShrink: 0,
              }}
            >
              <img 
                src="/images/profile.jpeg"
                alt="Avatar" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <div className="hover-translate" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                @rohangirase
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                Active now
              </div>
            </div>
          </div>
          
          <button 
            onClick={handleConnect}
            className="btn btn-primary"
            style={{
              fontSize: '0.8rem',
              padding: '0.5rem 1.1rem',
              borderRadius: '10px',
              fontWeight: 700,
              background: '#0f172a',
              color: '#ffffff',
              boxShadow: '0 4px 12px rgba(15,23,42,0.1)',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#000000'}
            onMouseLeave={e => e.currentTarget.style.background = '#0f172a'}
          >
            + Connect
          </button>
        </div>
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
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        alignItems: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          <ProfileCard />
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
                whileHover={{ scale: 1.06, borderColor: 'rgba(59,130,246,0.35)' }}
                className="glass"
                style={{ padding: '1.1rem 0.5rem', textAlign: 'center', borderRadius: 14, cursor: 'default' }}
              >
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.7rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1,
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
