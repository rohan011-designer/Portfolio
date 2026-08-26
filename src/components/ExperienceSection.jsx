import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'UI/UX Developer',
    company: 'ITvia Data Solutions',
    location: 'Pune',
    period: 'Aug 2026 – Present',
    color: '#4f46e5',
    points: [
      'Improve user satisfaction by 30% by designing and helping build the company\'s core product across mobile and desktop.',
      'Work daily with stakeholders and developers, cutting design-to-development handoff time by 25%, to turn business needs into working UI.',
      'Code frontend components in HTML/CSS alongside UI design work, reducing implementation time by 20%.',
      'Boost feature adoption by 20% through competitor and market analysis that shapes design and feature decisions.',
      'Maintain a shared design-and-code component library, improving consistency by 30%, across mobile and desktop.',
    ],
  },
  {
    role: 'UI/UX Design Intern',
    company: 'Mark & Spark Solutions',
    location: 'Pune',
    period: 'Jan 2026 – Aug 2026',
    color: '#3b82f6',
    points: [
      'Designed user flows, wireframes, and high-fidelity UI, increasing user engagement by 35%.',
      'Implemented AI-powered design workflows, reducing production time by 40%.',
      'Maintained design systems and UI components, improving design consistency and developer handoff.',
      'Designed branding assets, marketing creatives, and AI-assisted content, increasing campaign engagement by 40%.',
    ],
  },
  {
    role: 'Graphic Designer Intern',
    company: 'EmptyCup',
    location: 'Remote',
    period: 'May 2025 – Aug 2025',
    color: '#ff5c2e',
    points: [
      'Created campaign creatives and visual content layouts, improving visual hierarchy and layout consistency to increase overall engagement by 40%.',
      'Refined content structure to enable better storytelling, resulting in a 25% increase in post interactions.',
      'Iterated designs based on performance insights, reducing content rejection and rework by 30%.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '2rem' }}
        >
          <div className="label" style={{ marginBottom: '1rem' }}>Career</div>
          <h2 className="heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Experience
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 24, top: 0, bottom: 0,
            width: 1, background: 'linear-gradient(180deg, #2563eb, #ff5c2e, transparent)',
            opacity: 0.3,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start' }}
              >
                {/* Dot */}
                <div style={{ flexShrink: 0, paddingTop: '1.5rem' }}>
                  <motion.div
                    whileHover={{ scale: 1.4 }}
                    style={{
                      width: 12, height: 12, borderRadius: '50%',
                      background: exp.color, marginLeft: 18,
                      boxShadow: `0 0 20px ${exp.color}66`,
                    }}
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ borderColor: 'rgba(255,255,255,0.16)', y: -4 }}
                  className="glass"
                  style={{ flex: 1, padding: '2rem', borderRadius: 20, transition: 'all 0.3s' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                        {exp.role}
                      </h3>
                      <div style={{ color: exp.color, fontWeight: 600, fontSize: '0.9rem', marginTop: '0.2rem' }}>
                        {exp.company} · {exp.location}
                      </div>
                    </div>
                    <span style={{
                      padding: '0.3rem 0.9rem', borderRadius: 100,
                      background: `${exp.color}18`, border: `1px solid ${exp.color}33`,
                      color: exp.color, fontSize: '0.75rem', fontWeight: 600, whiteSpace: 'nowrap',
                    }}>
                      {exp.period}
                    </span>
                  </div>
                  <ul style={{ paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {exp.points.map(p => (
                      <li key={p} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
