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
        <path d="M22.5 7.64h-7.23v1.86h7.23V7.64zM16.5 16.5h6v-1.86h-6V16.5zm-5.06-8.99c-2.31 0-3.69 1.48-3.69 3.86 0 2.37 1.34 3.87 3.73 3.87.97 0 1.79-.16 2.47-.48v-2.03c-.64.33-1.39.5-2.22.5-1.12 0-1.83-.56-1.83-1.86h4.37c.02-.13.03-.26.03-.39 0-2.3-1.14-3.57-3.38-3.57zM8.34 12.3c0-1.22-.59-1.81-1.74-1.81s-1.73.59-1.73 1.81h3.47zM0 7.64v8.72h4.52c3.27 0 4.88-1.57 4.88-4.36 0-2.76-1.63-4.36-4.88-4.36H0z"/>
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
            letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: '1.5rem',
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
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(59,130,246,0.25)' }}
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
          display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', textAlign: 'center' }}>
            © 2026 · UI/UX &amp; Product Designer · Pune, India
          </div>
        </div>
      </div>
    </section>
  )
}
