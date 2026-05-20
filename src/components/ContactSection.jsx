import { motion } from 'framer-motion'

// All social contacts including phone — shown as buttons
const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rohan-girase-7102ab256',
    target: '_blank',
    color: '#0ea5e9',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/',
    target: '_blank',
    color: '#1769ff',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.202.penang 2.008 2.337 2.008 1.171 0 1.832-.641 2.097-1.26l2.322.281zm-4.708-5.005c-.149-.956-.88-1.757-2.066-1.757-1.277 0-2.049.754-2.276 1.757h4.342z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:giraserohan90@gmail.com',
    target: undefined,
    color: '#2563eb',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    href: 'tel:+917448293762',
    target: undefined,
    color: '#22c55e',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ textAlign: 'center' }}
        >
          <div className="label" style={{ marginBottom: '1.5rem' }}>Get in Touch</div>

          <h2 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 900,
            fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 0.95,
            letterSpacing: '-0.03em', color: '#fff', marginBottom: '1.5rem',
          }}>
            Let's build<br />
            <span className="gradient-text">something great</span>
          </h2>

          <p style={{
            color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.75,
            maxWidth: 540, margin: '0 auto 3rem',
          }}>
            Open for full-time opportunities, freelance projects, and collaborations.
            Let's talk design, product, and building experiences that matter.
          </p>

          {/* Primary CTA */}
          <motion.a
            href="mailto:giraserohan90@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(37,99,235,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="btn btn-primary"
            style={{ fontSize: '0.95rem', padding: '0.85rem 2.25rem', marginBottom: '2.5rem', display: 'inline-flex' }}
          >
            giraserohan90@gmail.com ↗
          </motion.a>

          {/* Social / contact buttons — all 4 as buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {socials.map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.target}
                rel={s.target === '_blank' ? 'noreferrer' : undefined}
                whileHover={{ y: -3, borderColor: `${s.color}55`, color: s.color }}
                className="btn btn-outline"
                style={{
                  fontSize: '0.82rem',
                  padding: '0.5rem 1.1rem',
                  gap: '0.4rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.25s ease',
                }}
              >
                {s.icon}
                {s.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div style={{
          marginTop: '5rem', paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: '#fff' }}>
            ROHAN GIRASE
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
            © 2026 · UI/UX &amp; Product Designer · Pune, India
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.target}
                rel={s.target === '_blank' ? 'noreferrer' : undefined}
                style={{ color: 'var(--text-muted)', fontSize: '0.78rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = s.color }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)' }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
