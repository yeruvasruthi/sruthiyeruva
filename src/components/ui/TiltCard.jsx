import React, { useRef } from 'react'

export default function TiltCard({ children }) {
  const ref = useRef(null)

  function onMouseMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const rotX = ((y - midY) / midY) * -8
    const rotY = ((x - midX) / midX) * 8
    el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`
    el.style.setProperty('--gx', `${x}px`)
    el.style.setProperty('--gy', `${y}px`)
  }

  function onLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
  }

  return (
    <div
      className="relative will-change-transform transition-transform"
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
    >
      <div
        ref={ref}
        className="group relative rounded-2xl bg-white ring-1 ring-stone-200 shadow-soft p-5"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '800px'
        }}
      >
        {/* glare */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition"
          style={{
            background:
              'radial-gradient(600px circle at var(--gx) var(--gy), rgba(255,255,255,0.7), transparent 40%)'
          }}
        />
        {children}
      </div>
    </div>
  )
}
