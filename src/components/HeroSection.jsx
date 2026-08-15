import { motion } from 'framer-motion'

// Pure SVG Chevron icon to avoid dependency issues
const ChevronRight = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const SparklesIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
)

// Custom cursor rendering for the interactive canvas
const FigmaCursor = ({ name, color, x, y, delay }) => (
  <motion.div
    style={{
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      pointerEvents: 'none',
      zIndex: 100,
    }}
    animate={{
      x: x,
      y: y,
    }}
    transition={{
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 5,
      ease: 'easeInOut',
      delay: delay,
    }}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill={color} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}>
      <path d="M4.5 3V21L10.3 15.2H19.5L4.5 3Z" stroke="#fff" strokeWidth="1.5" />
    </svg>
    <div style={{
      background: color,
      color: '#fff',
      fontSize: '10px',
      fontWeight: 600,
      padding: '2px 6px',
      borderRadius: '4px',
      whiteSpace: 'nowrap',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    }}>
      {name}
    </div>
  </motion.div>
)

export default function HeroSection() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      background: 'var(--bg)',
      color: 'var(--text-primary)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '6rem',
      paddingBottom: '4rem',
    }}>
      {/* Background SVG from the financial reference */}
      <svg
        width="358"
        height="483"
        viewBox="0 0 358 483"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, pointerEvents: 'none', opacity: 0.8 }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_0_1)">
          <rect
            x="-86.9961"
            y="-33.114"
            width="72"
            height="541"
            rx="36"
            transform="rotate(-30.8182 -86.9961 -33.114)"
            fill="url(#paint0_linear_0_1)"
          />
        </g>
        <g filter="url(#filter1_f_0_1)">
          <rect
            x="-17"
            y="-135.113"
            width="50.0937"
            height="541"
            rx="25.0469"
            transform="rotate(-30.8182 -17 -135.113)"
            fill="url(#paint1_linear_0_1)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_1"
            x="-137.641"
            y="-120.646"
            width="440.285"
            height="602.787"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="32"
              result="effect1_foregroundBlur_0_1"
            />
          </filter>
          <filter
            id="filter1_f_0_1"
            x="-71.707"
            y="-215.486"
            width="429.598"
            height="599.69"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="32"
              result="effect1_foregroundBlur_0_1"
            />
          </filter>
          <linearGradient
            id="paint0_linear_0_1"
            x1="-50.9961"
            y1="-33.114"
            x2="-50.9961"
            y2="507.886"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#91bbfb" />
            <stop offset="1" stopColor="#E6F1FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_1"
            x1="8.04686"
            y1="-135.113"
            x2="8.04686"
            y2="405.887"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8dbafd" />
            <stop offset="1" stopColor="#c1d9f8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Extra soft background gradients to style as designer workspace */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '45%', height: '700px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '15%', width: '45%', height: '500px',
        background: 'radial-gradient(circle, rgba(255, 92, 46, 0.04) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        
        {/* Animated Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: '#ffffff',
            border: '2px solid #ffffff',
            padding: '4px 12px 4px 4px',
            borderRadius: '100px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 8px 30px rgba(59, 130, 246, 0.08)',
            marginBottom: '2rem',
            cursor: 'default',
          }}
        >
          <span style={{
            background: 'linear-gradient(135deg, var(--accent), #91bbfb)',
            color: '#ffffff',
            fontSize: '10px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            padding: '4px 10px',
            borderRadius: '100px',
          }}>
            Available
          </span>
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)' }}>
            UI/UX &amp; Product Designer
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 6.5vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            textAlign: 'center',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            maxWidth: '960px',
            marginBottom: '1.5rem',
          }}
        >
          Designing digital products <br /> that feel <span className="gradient-text">seamless.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            fontWeight: 500,
            textAlign: 'center',
            maxWidth: '720px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            padding: '0 1rem',
          }}
        >
          I craft user-centered, data-informed interfaces with a research-first mindset. 
          Specializing in scalable design systems, accessibility, and cognitive load reduction in SaaS.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2.5rem' }}
        >
          <button
            onClick={() => scrollToSection('work')}
            className="btn btn-primary"
            style={{
              padding: '0.85rem 2rem',
              fontSize: '1rem',
              background: 'linear-gradient(135deg, var(--accent) 0%, #1d4ed8 100%)',
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            Selected Projects <ChevronRight size={16} />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn btn-outline"
            style={{
              padding: '0.85rem 2rem',
              fontSize: '1rem',
              background: '#ffffff',
              border: '1px solid rgba(145, 187, 251, 0.45)',
            }}
          >
            Get in touch
          </button>
        </motion.div>

        {/* Figma/Dashboard Mockup Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}
        >
          <div
            className="glass"
            style={{
              width: '100%',
              borderRadius: '24px',
              padding: '8px',
              background: 'rgba(255, 255, 255, 0.4)',
              border: '1px solid rgba(145, 187, 251, 0.2)',
              boxShadow: '0 30px 70px rgba(59, 130, 246, 0.06), 0 10px 24px rgba(0,0,0,0.02)',
              overflow: 'hidden',
            }}
          >
            {/* Inner Dashboard Layout */}
            <div style={{
              background: '#ffffff',
              borderRadius: '18px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '480px',
              border: '1px solid rgba(145, 187, 251, 0.15)',
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,1)',
            }}>
              
              {/* Figma Window Top Bar */}
              <div style={{
                height: '42px',
                background: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 1rem',
                userSelect: 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', marginLeft: '12px', letterSpacing: '0.02em' }}>
                    workspace / rohan-girase-portfolio
                  </span>
                </div>
                {/* Active avatars */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%', background: '#3b82f6',
                    color: '#fff', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', border: '1.5px solid #fff'
                  }}>RG</div>
                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%', background: '#ff5c2e',
                    color: '#fff', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', border: '1.5px solid #fff'
                  }}>DEV</div>
                  <span style={{
                    fontSize: '11px', fontWeight: 600, color: '#3b82f6', background: 'rgba(59,130,246,0.08)',
                    padding: '2px 8px', borderRadius: '100px', marginLeft: '6px',
                  }}>
                    Present
                  </span>
                </div>
              </div>

              {/* Workspace Main Split */}
              <div style={{ display: 'flex', flex: 1, height: 'calc(100% - 42px)', position: 'relative' }}>
                
                {/* Left Side: Figma-style Layer Panel */}
                <div
                  className="md-show"
                  style={{
                    width: '210px',
                    background: '#f8fafc',
                    borderRight: '1px solid #e2e8f0',
                    padding: '1rem 0.75rem',
                    flexDirection: 'column',
                    gap: '12px',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    userSelect: 'none',
                  }}
                >
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    Layers
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent)' }}>
                      <span style={{ fontSize: '12px' }}>📱</span>
                      <span style={{ fontWeight: 600 }}>PackPal Mockup</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingLeft: '14px' }}>
                      <span>🔤</span>
                      <span>Header Title</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingLeft: '14px' }}>
                      <span>🖼️</span>
                      <span>Feature Grid</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingLeft: '14px', color: 'var(--text-muted)' }}>
                      <span>✔️</span>
                      <span>List Checkbox</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '12px' }}>
                      <span>🎨</span>
                      <span>Design System Token</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingLeft: '14px' }}>
                      <span>🔵</span>
                      <span>Primary Accent</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingLeft: '14px' }}>
                      <span>🟠</span>
                      <span>Secondary Accent</span>
                    </div>
                  </div>
                </div>

                {/* Center / Right: Checkered Canvas */}
                <div style={{
                  flex: 1,
                  background: '#f1f5f9',
                  backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
                  backgroundSize: '16px 16px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  padding: '2rem',
                }}>
                  
                  {/* Floating Figma Cursors */}
                  <FigmaCursor name="Rohan (Designer)" color="#3b82f6" x={['120px', '280px', '180px']} y={['280px', '190px', '310px']} delay={0} />
                  <FigmaCursor name="Developer" color="#ff5c2e" x={['440px', '320px', '460px']} y={['110px', '220px', '80px']} delay={1.5} />

                  {/* Canvas Content Grid */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '24px',
                    width: '100%',
                    maxWidth: '720px',
                    flexWrap: 'wrap',
                  }}>
                    
                    {/* App Mockup Card */}
                    <motion.div
                      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(59,130,246,0.12)' }}
                      style={{
                        width: '230px',
                        background: '#ffffff',
                        borderRadius: '24px',
                        padding: '1.25rem 1rem',
                        boxShadow: '0 10px 30px rgba(15,23,42,0.06)',
                        border: '1.5px solid rgba(145, 187, 251, 0.25)',
                        position: 'relative',
                        zIndex: 10,
                      }}
                    >
                      {/* Mobile Notch Bar */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '9px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '1rem', padding: '0 4px' }}>
                        <span>12:14</span>
                        <div style={{ width: '45px', height: '14px', borderRadius: '10px', background: '#0f172a', margin: '0 auto', marginTop: '-12px' }} />
                        <span>5G</span>
                      </div>

                      {/* Header */}
                      <div style={{ marginBottom: '1.25rem' }}>
                        <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>
                          PackPal Case Study
                        </div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 800, color: 'var(--text-primary)' }}>
                          Smart Travel Packing
                        </h4>
                      </div>

                      {/* Content: checklist list */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.25rem' }}>
                        {[
                          { title: 'Passport & Visas', checked: true },
                          { title: 'Camera & Lenses', checked: true },
                          { title: 'Travel Charger Kit', checked: false },
                        ].map((item, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: item.checked ? 'rgba(59,130,246,0.04)' : 'transparent', padding: '6px 8px', borderRadius: '8px', border: item.checked ? '1px solid rgba(59,130,246,0.08)' : '1px solid rgba(0,0,0,0.03)' }}>
                            <div style={{
                              width: '12px', height: '12px', borderRadius: '3px',
                              border: item.checked ? 'none' : '1px solid #cbd5e1',
                              background: item.checked ? 'var(--accent)' : 'transparent',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                              {item.checked && (
                                <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </div>
                            <span style={{ fontSize: '10px', fontWeight: 600, color: item.checked ? 'var(--text-primary)' : 'var(--text-secondary)', textDecoration: item.checked ? 'line-through' : 'none' }}>
                              {item.title}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Autogenerate AI Button */}
                      <button style={{
                        width: '100%',
                        background: 'linear-gradient(135deg, var(--accent) 0%, #1d4ed8 100%)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '8px',
                        fontSize: '10px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
                      }}>
                        <SparklesIcon /> Auto-generate Checklist
                      </button>
                    </motion.div>

                    {/* Stats Widget + Color System */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '210px' }}>
                      
                      {/* Metric Card */}
                      <motion.div
                        whileHover={{ y: -3, boxShadow: '0 12px 30px rgba(59,130,246,0.08)' }}
                        style={{
                          background: '#ffffff',
                          borderRadius: '16px',
                          padding: '1rem',
                          border: '1.5px solid rgba(145, 187, 251, 0.25)',
                          boxShadow: '0 8px 24px rgba(15,23,42,0.04)',
                        }}
                      >
                        <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                          Usability Testing
                        </div>
                        <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.1 }}>
                          +35%
                        </div>
                        <div style={{ fontSize: '10px', fontWeight: 500, color: 'var(--text-secondary)', marginTop: '2px' }}>
                          Error reduction in workflows
                        </div>
                      </motion.div>

                      {/* Design System Swatches */}
                      <motion.div
                        whileHover={{ y: -3, boxShadow: '0 12px 30px rgba(59,130,246,0.08)' }}
                        style={{
                          background: '#ffffff',
                          borderRadius: '16px',
                          padding: '1rem',
                          border: '1.5px solid rgba(145, 187, 251, 0.25)',
                          boxShadow: '0 8px 24px rgba(15,23,42,0.04)',
                        }}
                      >
                        <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                          Palette Tokens
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          {[
                            { color: '#3b82f6', label: 'Primary' },
                            { color: '#ff5c2e', label: 'Warm' },
                            { color: '#1e293b', label: 'Slate' },
                            { color: '#f8fafc', border: '1px solid #cbd5e1', label: 'Bg' }
                          ].map((swatch, idx) => (
                            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                              <div style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                background: swatch.color,
                                border: swatch.border || 'none',
                                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.08)',
                              }} />
                              <span style={{ fontSize: '8px', color: 'var(--text-secondary)', fontWeight: 600 }}>{swatch.label}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
