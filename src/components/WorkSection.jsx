import { useState, useEffect, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Helper to return a custom SVG icon for case study popup details
const getProjectIcon = (id, color) => {
  switch (id) {
    case 'packpal':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      )
    case 'graphic-design':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
    case 'cricket':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    case 'insidehub':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    case 'research':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      )
    default:
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
          <polygon points="12 2 2 22 22 22" />
        </svg>
      )
  }
}

// ── ProjectCard Component (fan-out overlay inside folders) ───────────────────
const ProjectCard = forwardRef(({ image, title, delay, isVisible, index, totalCount, onClick, isSelected }, ref) => {
  const middleIndex = (totalCount - 1) / 2
  const factor = totalCount > 1 ? (index - middleIndex) / middleIndex : 0
  
  const rotation = factor * 25 
  const translationX = factor * 85 
  const translationY = Math.abs(factor) * 12

  return (
    <div
      ref={ref}
      className={`folder-project-card ${isSelected ? 'selected' : ''}`}
      style={{
        transform: isVisible
          ? `translateY(calc(-100px + ${translationY}px)) translateX(${translationX}px) rotate(${rotation}deg) scale(1)`
          : 'translateY(0px) translateX(0px) rotate(0deg) scale(0.4)',
        opacity: isSelected ? 0 : isVisible ? 1 : 0,
        zIndex: 10 + index,
        transition: `all 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
    >
      <div className="folder-project-card-inner">
        <img 
          src={image} 
          alt={title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)',
          pointerEvents: 'none',
        }} />
        <p style={{
          position: 'absolute',
          bottom: '8px',
          left: '8px',
          right: '8px',
          fontSize: '9px',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          color: '#ffffff',
          margin: 0,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          textShadow: '0 2px 4px rgba(0,0,0,0.4)',
        }}>
          {title}
        </p>
      </div>
    </div>
  )
})
ProjectCard.displayName = 'ProjectCard'

// ── ImageLightbox Component ──────────────────────────────────────────────────
function ImageLightbox({ projects, currentIndex, isOpen, onClose, onNavigate, onOpenDetailsModal }) {
  const [internalIndex, setInternalIndex] = useState(currentIndex)
  const [isSliding, setIsSliding] = useState(false)

  const totalProjects = projects.length
  const hasNext = internalIndex < totalProjects - 1
  const hasPrev = internalIndex > 0
  const currentProject = projects[internalIndex]

  useEffect(() => {
    if (isOpen) {
      setInternalIndex(currentIndex)
      setIsSliding(false)
    }
  }, [isOpen, currentIndex])

  const navigateNext = () => {
    if (internalIndex >= totalProjects - 1 || isSliding) return
    setIsSliding(true)
    onNavigate(internalIndex + 1)
    setTimeout(() => {
      setInternalIndex(internalIndex + 1)
      setIsSliding(false)
    }, 450)
  }

  const navigatePrev = () => {
    if (internalIndex <= 0 || isSliding) return
    setIsSliding(true)
    onNavigate(internalIndex - 1)
    setTimeout(() => {
      setInternalIndex(internalIndex - 1)
      setIsSliding(false)
    }, 450)
  }

  const handleDotClick = (idx) => {
    if (isSliding || idx === internalIndex) return
    setIsSliding(true)
    onNavigate(idx)
    setTimeout(() => {
      setInternalIndex(idx)
      setIsSliding(false)
    }, 450)
  }

  const handleViewProjectClick = (e) => {
    e.stopPropagation()
    if (currentProject.link) {
      window.open(currentProject.link, '_blank', 'noopener,noreferrer')
    } else {
      onClose()
      onOpenDetailsModal(currentProject)
    }
  }

  if (!isOpen || !currentProject) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(15, 23, 42, 0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        transition: 'opacity 0.4s ease',
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '2rem',
          right: '2rem',
          zIndex: 100000,
          width: '46px',
          height: '46px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.85)',
          border: '1px solid var(--border)',
          color: 'var(--text-primary)',
          fontSize: '1rem',
          fontWeight: 700,
          cursor: 'none',
          boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#ffffff'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)'}
      >
        ✕
      </button>

      {/* Nav Arrows */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); navigatePrev(); }}
          disabled={isSliding}
          style={{
            position: 'absolute',
            left: '2rem',
            zIndex: 100000,
            width: '56px',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.85)',
            border: '1px solid var(--border)',
            color: 'var(--text-primary)',
            fontSize: '1.5rem',
            fontWeight: 300,
            cursor: 'none',
            boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          ‹
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); navigateNext(); }}
          disabled={isSliding}
          style={{
            position: 'absolute',
            right: '2rem',
            zIndex: 100000,
            width: '56px',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.85)',
            border: '1px solid var(--border)',
            color: 'var(--text-primary)',
            fontSize: '1.5rem',
            fontWeight: 300,
            cursor: 'none',
            boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          ›
        </button>
      )}

      {/* Lightbox content card */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '520px',
          borderRadius: '24px',
          overflow: 'hidden',
          background: 'var(--bg-2)',
          border: '1px solid var(--border)',
          boxShadow: '0 30px 70px rgba(0,0,0,0.12)',
          position: 'relative',
          cursor: 'none',
        }}
      >
        <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', background: 'var(--bg-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={currentProject.image}
            alt={currentProject.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              userSelect: 'none',
            }}
          />
        </div>

        {/* Bottom Details Strip */}
        <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {/* Header info */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  margin: 0,
                  lineHeight: 1.2,
                }}>
                  {currentProject.title}
                </h3>
                <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', margin: '4px 0 0' }}>
                  {currentProject.subtitle}
                </p>
              </div>

              <button
                onClick={handleViewProjectClick}
                className="btn btn-primary"
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  background: 'var(--accent)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '0.55rem 1.25rem',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(59, 130, 246, 0.15)',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <span>{currentProject.link ? 'View Project ↗' : 'Read Case Study'}</span>
              </button>
            </div>

            {/* Pagination strip */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '0.85rem' }}>
              {totalProjects > 1 ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '4px 10px',
                  background: 'var(--border)',
                  borderRadius: '100px',
                }}>
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleDotClick(idx)}
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        background: idx === internalIndex ? 'var(--text-primary)' : 'var(--text-muted)',
                        opacity: idx === internalIndex ? 1 : 0.4,
                        transform: idx === internalIndex ? 'scale(1.3)' : 'scale(1)',
                        transition: 'all 0.3s',
                      }}
                    />
                  ))}
                </div>
              ) : <div />}
              <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)' }}>
                {internalIndex + 1} / {totalProjects}
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

// ── AnimatedFolder Component (3D Folder Tab Graphics) ───────────────────────
function AnimatedFolder({ title, projects, gradient, onProjectClick }) {
  const [isHovered, setIsHovered] = useState(false)
  const previewProjects = projects.slice(0, 5)

  const backBg = gradient || 'linear-gradient(135deg, var(--folder-back) 0%, var(--folder-tab) 100%)'
  const tabBg = gradient || 'var(--folder-tab)'
  const frontBg = gradient || 'linear-gradient(135deg, var(--folder-front) 0%, var(--folder-back) 100%)'

  return (
    <div
      className="folder-container"
      style={{
        minWidth: '270px',
        minHeight: '310px',
        perspective: '1200px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '20px',
          background: gradient 
            ? `radial-gradient(circle at 50% 70%, ${gradient.match(/#[a-fA-F0-9]{3,6}/)?.[0] || 'var(--accent)'} 0%, transparent 70%)` 
            : 'radial-gradient(circle at 50% 70%, var(--accent) 0%, transparent 70%)',
          opacity: isHovered ? 0.08 : 0,
          transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative flex items-center justify-center" style={{ height: '160px', width: '200px', position: 'relative' }}>
        {/* Back Tab Cover */}
        <div 
          style={{
            position: 'absolute',
            width: '128px',
            height: '96px',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
            border: '1px solid var(--border)',
            background: backBg,
            filter: gradient ? 'brightness(0.9)' : 'none',
            transformOrigin: 'bottom center',
            transform: isHovered ? 'rotateX(-20deg) scaleY(1.05)' : 'rotateX(0deg) scaleY(1)',
            transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 10,
            top: 'calc(50% - 48px + 4px)',
            left: 'calc(50% - 64px)'
          }}
        />

        {/* Tab Ear */}
        <div 
          style={{
            position: 'absolute',
            width: '48px',
            height: '16px',
            borderTopLeftRadius: '6px',
            borderTopRightRadius: '6px',
            borderTop: '1px solid var(--border)',
            borderLeft: '1px solid var(--border)',
            borderRight: '1px solid var(--border)',
            background: tabBg,
            filter: gradient ? 'brightness(0.85)' : 'none',
            top: 'calc(50% - 48px - 10px)',
            left: 'calc(50% - 64px + 16px)',
            transformOrigin: 'bottom center',
            transform: isHovered ? 'rotateX(-30deg) translateY(-2px)' : 'rotateX(0deg) translateY(0)',
            transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 10
          }}
        />

        {/* Stack of Project Cards inside folder */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 20 }}>
          {previewProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              delay={index * 45}
              isVisible={isHovered}
              index={index}
              totalCount={previewProjects.length}
              onClick={() => onProjectClick(project, index)}
            />
          ))}
        </div>

        {/* Front Cover */}
        <div 
          style={{
            position: 'absolute',
            width: '128px',
            height: '96px',
            borderRadius: '10px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            border: '1px solid var(--border)',
            background: frontBg,
            top: 'calc(50% - 48px + 4px)',
            left: 'calc(50% - 64px)',
            transformOrigin: 'bottom center',
            transform: isHovered ? 'rotateX(35deg) translateY(12px)' : 'rotateX(0deg) translateY(0)',
            transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 30
          }}
        />

        {/* Gloss Overlay */}
        <div 
          style={{
            position: 'absolute',
            width: '128px',
            height: '96px',
            borderRadius: '10px',
            overflow: 'hidden',
            pointerEvents: 'none',
            top: 'calc(50% - 48px + 4px)',
            left: 'calc(50% - 64px)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)',
            transformOrigin: 'bottom center',
            transform: isHovered ? 'rotateX(35deg) translateY(12px)' : 'rotateX(0deg) translateY(0)',
            transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 31
          }}
        />
      </div>

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.15rem',
          fontWeight: 800,
          color: 'var(--text-primary)',
          margin: 0,
          transition: 'all 500ms',
          letterSpacing: isHovered ? '-0.01em' : '0',
          transform: isHovered ? 'translateY(2px)' : 'translateY(0)',
        }}>{title}</h3>
        <p style={{
          fontSize: '0.8rem',
          fontWeight: 600,
          color: 'var(--text-muted)',
          margin: '0.35rem 0 0',
          opacity: isHovered ? 0.8 : 1,
          transition: 'opacity 500ms',
        }}>{projects.length} {projects.length === 1 ? 'project' : 'projects'}</p>
      </div>

      {/* Hover action indicator */}
      <div 
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.65rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: 'var(--text-muted)',
          opacity: isHovered ? 0 : 0.45,
          transition: 'all 500ms',
        }}
      >
        <span>Hover to open</span>
      </div>
    </div>
  )
}

// ── Folders Data Structure ───────────────────────────────────────────────────
const foldersData = [
  {
    id: 'ui-ux',
    title: 'UI/UX',
    gradient: 'linear-gradient(135deg, #00c6ff, #0072ff)',
    projects: [
      {
        id: 'packpal',
        title: 'PackPal',
        image: '/images/packpal.png',
        subtitle: 'Smart Travel Packing App',
        type: 'Project',
        label: 'End-to-End UI/UX Case Study',
        color: '#2563eb',
        tags: ['UI/UX Design', 'User Research', 'Prototyping', 'Figma'],
        highlights: [
          '100% planned milestones met in 6 weeks',
          '10+ users tested · 4/5 avg satisfaction',
          '35% reduction in task completion errors',
        ],
        link: 'https://www.behance.net/gallery/241458493/PackPal-A-Smart-Travel-Packing-App-UIUX-Case-Study',
      }
    ]
  },
  {
    id: 'unpublished',
    title: 'Unpublished Work',
    gradient: 'linear-gradient(135deg, #ff5e62, #ff9966)',
    projects: [
      {
        id: 'cricket',
        title: 'Cricket Analytics',
        image: '/images/cricket.png',
        subtitle: 'Sports Training & Evaluation Platform',
        type: 'Project',
        label: 'Ongoing Client Project',
        color: '#16a34a',
        tags: ['Product Design', 'Live Data UX', 'Client Work', 'Mobile-First'],
        highlights: [
          'Real-world platform designed for outdoor coaching environments',
          'Captures ball-by-ball training data via a fast, low-friction interface',
          'Generates automated, role-based performance reports for player groups',
        ],
        link: null,
        details: {
          title: 'Cricket Practice Session Analysis',
          subtitle: 'Cricket Training & Player Performance Platform',
          intro: 'A mobile-first platform designed around practice sessions rather than match scoring. The goal is to help coaches record what happens during training, evaluate players after each session, and turn that data into structured performance reports for players and parents.',
          challenge: 'The main UX challenge was designing a fast, low-friction interface for coaches on the cricket ground, where they need to record information while actively managing a session. A session supports up to 2 batters and 5 bowlers, with a 30-ball practice format. Coaches can record the shot played, ball type, player involvement, and optional custom notes during the session.',
          personas: 'The platform supports different experiences for coaches, players, and parents. Coaches manage sessions, players, ratings and feedback, while players and parents can review performance history and reports.',
          features: [
            { title: 'Live Practice Session', desc: 'Coaches can start, pause and resume a session while recording ball-by-ball training data without leaving the session flow.' },
            { title: 'Structured Performance Logging', desc: 'The system captures the batter, bowler, shot type, ball type, fielding involvement and optional coach notes, creating a consistent record instead of relying on verbal feedback or scattered paper notes.' },
            { title: 'Role-Based Player Evaluation', desc: "Ratings change according to the player's role. A batsman receives batting and fielding ratings, while a bowler receives bowling and fielding ratings." },
            { title: 'Session-Based Feedback', desc: 'After completing a session, the coach can add player-specific feedback and ratings. This creates a record for every training session rather than combining everything into one general assessment.' },
            { title: 'Performance Reports', desc: 'Completed sessions generate individual reports, while multiple sessions can be combined into weekly, monthly and yearly reports.' },
            { title: 'Practice Scheduling', desc: 'Coaches can manage different player groups, coaches, practice timings and locations. This supports academies where schedules and training locations can change.' },
            { title: 'Multi-Persona Experience', desc: 'The product has separate experiences for Coach, Player and Parent, while keeping the underlying performance data connected across the system.' },
            { title: 'Mobile-First Design', desc: 'The interface is designed for coaches using it outdoors during practice, so the design prioritises large touch targets, clear hierarchy, quick actions and minimal typing.' },
            { title: 'AI-Assisted Reporting', desc: "AI is used after the session to help organise the coach's recorded data and feedback into readable reports." }
          ],
          designSystem: {
            screen: '390 × 844 px',
            typography: 'Poppins',
            primary: '#188AEC',
            background: '#F7F9FA',
            grid: '8-point spacing system',
            components: 'Player cards, session cards, ratings, tables, charts, feedback cards, chips, forms, dialogs and empty states.'
          },
          decision: 'The product is built around a session-centric architecture: the practice session is the source of the performance data, and the reports are generated from what the coach actually recorded.'
        }
      },
      {
        id: 'insidehub',
        title: 'InsideHub',
        image: '/images/insighthub.png',
        subtitle: 'AI-Powered UX Research Workspace',
        type: 'Project',
        label: 'Experimental Concept',
        color: '#ea580c',
        tags: ['UX Research', 'AI Design', 'Information Architecture', 'Figma + MCP'],
        highlights: [
          'Brings interviews, notes, surveys and documents into one central workspace',
          'Researchers can ask findings questions; AI synthesizes source-referenced timestamps',
          'Explores custom Figma initial directions generated using Claude with MCP connectors',
        ],
        link: null,
        details: {
          title: 'InsideHub Workspace',
          subtitle: 'AI-Powered UX Research Hub',
          intro: 'InsideHub is an experimental product concept I created to solve a common UX research problem: research information is scattered across multiple platforms, making it difficult to organise findings, connect insights to their original sources, and quickly analyse a large amount of qualitative and quantitative research data.',
          challenge: 'The concept brings interviews, recordings, surveys, research documents, notes and project information into one central workspace. Researchers can ask questions about their collected research, while AI analyses the available data and provides answers with references to the specific source, such as the interview and relevant timestamp.',
          features: [
            { title: 'Centralised Research Workspace', desc: 'Researchers can manage research projects, interviews, recordings, surveys and documents from one place instead of switching between multiple platforms.' },
            { title: 'AI-Powered Research Analysis', desc: 'AI can analyse uploaded research material, identify key findings, summarise information and answer research questions based on the available research data.' },
            { title: 'Source-Referenced Insights', desc: 'Instead of providing unsupported AI answers, the system connects findings back to their original source—for example, identifying which participant mentioned something.' },
            { title: 'Research Dashboard', desc: 'A central dashboard gives researchers an overview of their projects, research activities, findings and important insights.' },
            { title: 'Multiple Research Sources', desc: 'The concept supports different types of research inputs, including interview data, survey responses, documents and recordings.' },
            { title: 'Tool Integrations', desc: 'The product explores integrations with tools such as Jira, Google Drive, Zoom and email, reducing friction.' },
            { title: 'AI Model Integration', desc: 'The concept also explores connecting different AI models such as Claude, ChatGPT and Gemini for research, analysis and secondary-data exploration.' }
          ],
          aiExperiment: 'InsideHub was also an experiment in AI-assisted product design. I defined the core problem, product requirements, features, information architecture and screen requirements, then used Claude with MCP connected to Figma to generate an initial UI direction. I manually corrected issues with layout, hierarchy, spacing, components and usability.',
          challengeCore: 'The main challenge was not simply "adding AI to UX research". It was designing a workflow where researchers can move from raw research → organised data → AI-generated insight → original evidence without losing context or trust in the research.',
          tags: 'UX Research · Product Design · Information Architecture · AI-Assisted Design · Figma · MCP · Experimental Product · AI + MCP Workflow'
        }
      }
    ]
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    gradient: 'linear-gradient(135deg, #f857a6, #ff5858)',
    projects: [
      {
        id: 'graphic-design',
        title: 'Graphic Design Portfolio',
        image: '/images/graphic.png',
        subtitle: 'Visual Branding & Campaign Creatives',
        type: 'Project',
        label: 'Graphic Design Portfolio',
        color: '#db2777',
        tags: ['Graphic Design', 'Branding Assets', 'Marketing Creatives', 'Adobe Photoshop', 'Adobe Illustrator'],
        highlights: [
          'Created campaign creatives and visual layouts, increasing engagement by 40%.',
          'Refined content structure for better storytelling, resulting in a 25% post interaction lift.',
          'Iterated designs based on performance insights, reducing content rework by 30%.',
        ],
        link: 'https://www.behance.net/gallery/226741899/Graphic-Design-Portfolio',
      }
    ]
  },
  {
    id: 'publications',
    title: 'Publications',
    gradient: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
    projects: [
      {
        id: 'research',
        title: 'Cognitive Load in AI-Augmented SaaS Dashboards',
        image: '/images/research_cert.png',
        subtitle: 'Design Patterns for Decision Fatigue Reduction',
        type: 'Publication',
        label: 'IJIRT · April 2026',
        color: '#4f46e5',
        tags: ['Research', 'Impact Factor 8.412', 'ISSN 2349-6002', 'Vol. 12, Issue 11'],
        highlights: [
          'Proposed the PACE Framework to systematically reduce cognitive load in AI-driven dashboard interfaces.',
          'Examined the impact of AI-generated information overload on decision fatigue within enterprise SaaS products.',
        ],
        link: 'https://ijirt.org/article?manuscript=199496',
      }
    ]
  }
]

export default function WorkSection() {
  const [activeFolderProjects, setActiveFolderProjects] = useState([])
  const [activeProject, setActiveProject] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalProject, setModalProject] = useState(null)

  const handleProjectClick = (projectsList, index) => {
    setActiveFolderProjects(projectsList)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const handleOpenDetailsModal = (project) => {
    setModalProject(project)
    setModalOpen(true)
  }

  return (
    <section id="work" className="section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <div className="label" style={{ marginBottom: '1rem' }}>Selected Work & Research</div>
          <h2 className="heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Projects &amp; Publications
          </h2>
        </motion.div>

        {/* 3D Folders Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2.5rem',
          width: '100%',
        }}>
          {foldersData.map((folder, index) => (
            <motion.div
              key={folder.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <AnimatedFolder
                title={folder.title}
                projects={folder.projects}
                gradient={folder.gradient}
                onProjectClick={(proj, idx) => handleProjectClick(folder.projects, idx)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Image Lightbox */}
      <ImageLightbox
        projects={activeFolderProjects}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
        onOpenDetailsModal={handleOpenDetailsModal}
      />

      {/* Case Study Detail Modal Overlay Popup */}
      <AnimatePresence>
        {modalOpen && modalProject && modalProject.details && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'rgba(15, 23, 42, 0.4)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <motion.div
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={e => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '680px',
                maxHeight: '85vh',
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid var(--border)',
                boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.15)',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'none',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(15, 23, 42, 0.05)',
                  border: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'none',
                  zIndex: 10,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.05)'}
              >
                ✕
              </button>

              {/* Inner Scroll Container to clip scrollbars */}
              <div
                style={{
                  overflowY: 'auto',
                  flex: 1,
                  padding: '2.5rem',
                  paddingRight: '2.25rem',
                }}
              >
                {/* Modal Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: modalProject.color,
                      background: `${modalProject.color}12`,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '100px',
                      display: 'inline-block',
                      marginBottom: '0.5rem',
                    }}>
                      {modalProject.type}
                    </span>
                    <h2 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      margin: 0,
                      lineHeight: 1.25,
                    }}>
                      {modalProject.details.title}
                    </h2>
                    <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)', margin: '4px 0 0' }}>
                      {modalProject.details.subtitle}
                    </p>
                  </div>

                  <div style={{ height: '1px', background: 'var(--border)' }} />

                  {/* Main description section */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                    <p style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{modalProject.details.intro}</p>
                    <p>{modalProject.details.challenge}</p>
                    {modalProject.details.personas && <p>{modalProject.details.personas}</p>}
                  </div>

                  {/* Key UX Features */}
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                      Key UX &amp; Product Features
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {modalProject.details.features.map(f => (
                        <div key={f.title} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                          <span style={{ color: modalProject.color, fontWeight: 700, fontSize: '0.9rem', marginTop: '1px' }}>•</span>
                          <div style={{ fontSize: '0.88rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{f.title}: </strong>
                            {f.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI / MCP workflow section if available */}
                  {modalProject.details.aiExperiment && (
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        AI-Assisted Design Experiment
                      </h4>
                      <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                        {modalProject.details.aiExperiment}
                      </p>
                    </div>
                  )}

                  {modalProject.details.challengeCore && (
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        Core Design Challenge
                      </h4>
                      <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                        {modalProject.details.challengeCore}
                      </p>
                    </div>
                  )}

                  {/* Design System Details */}
                  {modalProject.details.designSystem && (
                    <div style={{
                      background: 'rgba(59, 130, 246, 0.03)',
                      border: '1px solid rgba(145, 187, 251, 0.25)',
                      borderRadius: '16px',
                      padding: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                    }}>
                      <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', margin: 0 }}>
                        Design System Specifications
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginTop: '0.25rem' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          <strong>Viewport:</strong> {modalProject.details.designSystem.screen}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          <strong>Typography:</strong> {modalProject.details.designSystem.typography}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          <strong>Primary Color:</strong> <span style={{ color: modalProject.details.designSystem.primary, fontWeight: 700 }}>{modalProject.details.designSystem.primary}</span>
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          <strong>Layout:</strong> {modalProject.details.designSystem.grid}
                        </div>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem', borderTop: '1px solid var(--border)', paddingTop: '0.5rem' }}>
                        <strong>Components:</strong> {modalProject.details.designSystem.components}
                      </div>
                    </div>
                  )}

                  {/* Core Design Decision */}
                  {modalProject.details.decision && (
                    <div style={{
                      borderLeft: `3px solid ${modalProject.color}`,
                      paddingLeft: '1rem',
                      marginTop: '0.5rem',
                    }}>
                      <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                        The Core Design Decision
                      </h4>
                      <p style={{ fontSize: '0.88rem', lineHeight: 1.5, color: 'var(--text-secondary)', fontStyle: 'italic', margin: 0 }}>
                        "{modalProject.details.decision}"
                      </p>
                    </div>
                  )}

                  {/* Modal Tags Footer */}
                  {modalProject.details.tags && (
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      letterSpacing: '0.02em',
                      marginTop: '0.5rem',
                    }}>
                      {modalProject.details.tags}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
