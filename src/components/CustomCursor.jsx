import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const move = (e) => { pos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', move)

    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)

    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    const obs = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    })
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf.current)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      {/* Small dot */}
      <div ref={dotRef} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 99999, pointerEvents: 'none',
        width: hovered ? 8 : 6, height: hovered ? 8 : 6,
        borderRadius: '50%', background: '#fff',
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.2s, height 0.2s',
        marginLeft: hovered ? -4 : -3, marginTop: hovered ? -4 : -3,
      }} />
      {/* Ring */}
      <div ref={ringRef} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 99998, pointerEvents: 'none',
        width: hovered ? 48 : 32, height: hovered ? 48 : 32,
        borderRadius: '50%',
        border: `1.5px solid ${hovered ? 'rgba(37,99,235,0.8)' : 'rgba(255,255,255,0.4)'}`,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.3s, height 0.3s, border-color 0.3s',
        marginLeft: hovered ? -24 : -16, marginTop: hovered ? -24 : -16,
        backdropFilter: hovered ? 'blur(4px)' : 'none',
      }} />
    </>
  )
}
