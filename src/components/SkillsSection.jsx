import { motion } from 'framer-motion'

// Each skill group becomes one fan card
const skillGroups = [
  {
    label: 'Product & UX Design',
    r: -15,
    color: 'var(--accent)',
    skills: [
      'Product Thinking', 'Problem Framing', 'User Research',
      'Mobile Design', 'Responsive UI', 'Prototyping',
      'Information Architecture', 'User Journey Mapping', 'Wireframing',
      'High-Fidelity UI', 'Usability Testing', 'Design Systems',
      'Interaction Design', 'Accessibility Design',
    ],
  },
  {
    label: 'Design Tools',
    r: 5,
    color: 'var(--accent-warm)',
    skills: ['Figma', 'FigJam', 'Framer', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator'],
  },
  {
    label: 'Technical & Collaboration',
    r: 25,
    color: '#4f46e5',
    skills: [
      'HTML', 'CSS', 'Developer Handoff',
      'Stakeholder Collaboration', 'Agile / Scrum', 'Cross-Functional Teamwork',
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <div className="label" style={{ marginBottom: '1rem' }}>Expertise</div>
          <h2 className="heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Skills &amp; Capabilities
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
            Hover the cards to expand
          </p>
        </motion.div>

        {/* ── Uiverse fan-hover glass cards — one per skill group ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div className="skill-glass-container">
            {skillGroups.map(({ label, r, color, skills }) => (
              <div
                key={label}
                data-text={label}
                className="skill-glass"
                style={{ '--r': r, minWidth: 220, height: 300 }}
              >
                {/* Skills list — no icons, just text pills */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '1.4rem 1rem 3rem',
                  width: '100%',
                  overflowY: 'auto',
                  maxHeight: 260,
                }}>
                  <div style={{
                    fontSize: '0.62rem',
                    fontWeight: 800,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color,
                    marginBottom: '0.4rem',
                    textAlign: 'center',
                    lineHeight: 1.3,
                  }}>
                    {label}
                  </div>
                  {skills.map(skill => (
                    <span
                      key={skill}
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--text-primary)',
                        background: 'rgba(59, 130, 246, 0.04)',
                        border: '1px solid rgba(145, 187, 251, 0.25)',
                        borderRadius: 100,
                        padding: '0.22rem 0.75rem',
                        whiteSpace: 'nowrap',
                        fontWeight: 500,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
