import { motion } from 'framer-motion'

// Helper component to render inline SVG logos for tools without CDNs or with incorrect CDNs
function InlineLogo({ name, color }) {
  if (name === 'Adobe Photoshop') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
        <rect width="24" height="24" rx="4" fill="#001833" />
        <text x="12" y="16.5" fill="#31a8ff" fontSize="12" fontWeight="800" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" textAnchor="middle">Ps</text>
      </svg>
    )
  }
  if (name === 'Adobe Illustrator') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
        <rect width="24" height="24" rx="4" fill="#330000" />
        <text x="12" y="16.5" fill="#ff9a00" fontSize="12" fontWeight="800" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" textAnchor="middle">Ai</text>
      </svg>
    )
  }
  if (name === 'Adobe XD') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
        <rect width="24" height="24" rx="4" fill="#2c001e" />
        <text x="12" y="16.5" fill="#ff61f6" fontSize="12" fontWeight="800" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" textAnchor="middle">Xd</text>
      </svg>
    )
  }
  if (name === 'Microsoft PowerPoint') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
        <rect width="24" height="24" rx="4" fill="#b7472a" />
        <text x="12" y="16.5" fill="#ffffff" fontSize="12" fontWeight="800" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" textAnchor="middle">P</text>
      </svg>
    )
  }
  if (name === 'Microsoft Word') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
        <rect width="24" height="24" rx="4" fill="#2b579a" />
        <text x="12" y="16.5" fill="#ffffff" fontSize="12" fontWeight="800" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" textAnchor="middle">W</text>
      </svg>
    )
  }
  if (name === 'REST APIs') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    )
  }
  return null
}

const row1 = [
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'FigJam', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Framer', icon: '/images/framer.png' },
  { name: 'Spline', icon: '/images/spline.png' },
  { name: 'Adobe Photoshop', isInline: true },
  { name: 'Adobe Illustrator', isInline: true },
  { name: 'Adobe XD', isInline: true },
  { name: 'Canva', icon: '/images/canva.png' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'REST APIs', isInline: true },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' }
]

const row2 = [
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'Eclipse', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg' },
  { name: 'Cursor', icon: '/images/cursor.png' },
  { name: 'Lovable', icon: '/images/lovable.png' },
  { name: 'ChatGPT', icon: '/images/chatgpt.png' },
  { name: 'Claude', icon: '/images/claude.png' },
  { name: 'Google Gemini', icon: '/images/gemini.png' },
  { name: 'Midjourney', icon: '/images/midjourney.png' },
  { name: 'Adobe Firefly', icon: '/images/firefly.png' },
  { name: 'Runway', icon: '/images/runwayml.png' },
  { name: 'Sora', icon: '/images/sora.png' },
  { name: 'Ideogram', icon: '/images/ideogram.png' },
  { name: 'Microsoft PowerPoint', isInline: true },
  { name: 'Microsoft Word', isInline: true }
]


function TickerRow({ items, reverse = false }) {
  const extendedItems = [...items, ...items, ...items]
  
  return (
    <div className="ticker-container" style={{ margin: '0.65rem 0' }}>
      <div 
        className="ticker-track" 
        style={{ 
          animationName: reverse ? 'ticker-reverse' : 'ticker',
          animationDuration: '45s'
        }}
      >
        {extendedItems.map((item, idx) => (
          <div 
            key={`${item.name}-${idx}`} 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '0.45rem 1rem',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.02)',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              transition: 'all 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.transform = 'none'
            }}
          >
            {item.isInline ? (
              <InlineLogo name={item.name} />
            ) : item.color ? (
              <img 
                src={item.icon} 
                alt={item.name} 
                style={{ 
                  width: 18, 
                  height: 18, 
                  objectFit: 'contain', 
                  flexShrink: 0,
                  filter: item.color === '#ffffff' ? 'brightness(0.9)' : `drop-shadow(0px 0px 1px ${item.color})`
                }}
                loading="lazy"
              />
            ) : (
              <img 
                src={item.icon} 
                alt={item.name} 
                style={{ width: 18, height: 18, objectFit: 'contain', flexShrink: 0 }}
                loading="lazy"
              />
            )}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ToolsSection() {
  return (
    <section id="tools" className="section" style={{ background: 'rgba(255,255,255,0.01)', paddingBottom: '3rem', paddingTop: '3rem' }}>
      <div className="container" style={{ maxWidth: '100%', padding: 0 }}>
        
        {/* Section Heading */}
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <div className="label" style={{ marginBottom: '1.2rem' }}>Workspace</div>
            <h2 className="heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Tools &amp; Technologies I Use
            </h2>
          </motion.div>
        </div>

        {/* Double row tickers */}
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '0.5rem 0' }}>
          {/* Side Fading gradients for premium feel */}
          <div style={{
            position: 'absolute', top: 0, bottom: 0, left: 0, width: '100px',
            background: 'linear-gradient(90deg, var(--bg) 0%, transparent 100%)',
            zIndex: 5, pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute', top: 0, bottom: 0, right: 0, width: '100px',
            background: 'linear-gradient(-90deg, var(--bg) 0%, transparent 100%)',
            zIndex: 5, pointerEvents: 'none'
          }} />

          <TickerRow items={row1} />
          <TickerRow items={row2} reverse={true} />
        </div>

      </div>
    </section>
  )
}
