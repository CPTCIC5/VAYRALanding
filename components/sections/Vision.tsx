'use client'

import { useRef, useState, useEffect } from 'react'
import { useInView, motion } from 'framer-motion'

const HEADLINE = 'THIS IS MODULE 1.'

export default function Vision() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })
  const [displayed, setDisplayed] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!inView) return
    let i = 0
    const iv = setInterval(() => {
      i++
      setDisplayed(HEADLINE.slice(0, i))
      if (i >= HEADLINE.length) {
        clearInterval(iv)
        let blinks = 0
        const bl = setInterval(() => {
          setCursorVisible(v => !v)
          blinks++
          if (blinks > 5) { clearInterval(bl); setCursorVisible(false); setDone(true) }
        }, 300)
      }
    }, 50)
    return () => clearInterval(iv)
  }, [inView])

  return (
    <section
      id="ambition"
      ref={ref}
      className="relative section-padding py-32 overflow-hidden"
      style={{ background: '#000', borderTop: '1px solid #1A1A1A' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(200,169,110,0.04) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-[10px] tracking-[0.35em] mb-8 block"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: '#C8A96E' }}
        >
          THE AMBITION
        </motion.span>

        {/* Typewriter */}
        <h2
          className="leading-none mb-10"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(4rem, 10vw, 10rem)',
            letterSpacing: '0.02em',
            color: '#F0EDE8',
          }}
        >
          {displayed}
          <span
            className="inline-block align-middle ml-1"
            style={{
              width: 4,
              height: '0.8em',
              background: '#C8A96E',
              opacity: cursorVisible ? 1 : 0,
              transition: 'opacity 0.1s',
              verticalAlign: 'middle',
            }}
          />
        </h2>

        {/* Pull quote — the emotional core */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={done ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
          style={{ borderLeft: '3px solid #C8A96E', paddingLeft: '1.5rem' }}
        >
          <p
            className="text-xl md:text-2xl leading-snug"
            style={{ fontFamily: "'Space Mono', monospace", color: '#F0EDE8' }}
          >
            "The electromagnetic domain will define the next century of Indian security.
            We intend to define that domain."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={done ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p
              className="text-base md:text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B6B6B' }}
            >
              Cognitive EW for the Indian Army is Module 01. It is where we prove the thesis —
              that Indian AI can outthink adversary systems in the field.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B6B6B' }}
            >
              Naval EW follows. Air defence. Space domain awareness.
              Every domain where India's security depends on spectrum awareness
              and cannot afford to depend on imported intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={done ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {[
              { label: 'MODULE 01', desc: 'Cognitive EW — Indian Army', status: 'IN DEVELOPMENT' },
              { label: 'MODULE 02', desc: 'Naval Spectrum Awareness', status: 'PLANNED' },
              { label: 'MODULE 03', desc: 'Air Defence EW Integration', status: 'PLANNED' },
              { label: 'MODULE 04', desc: 'Space Domain Intelligence', status: 'PLANNED' },
            ].map(({ label, desc, status }, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3"
                style={{ borderBottom: '1px solid #1A1A1A' }}
              >
                <div>
                  <span
                    className="text-[10px] tracking-[0.2em] block mb-0.5"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: '#C8A96E' }}
                  >
                    {label}
                  </span>
                  <span
                    className="text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: i === 0 ? '#F0EDE8' : '#6B6B6B' }}
                  >
                    {desc}
                  </span>
                </div>
                <span
                  className="text-[9px] tracking-[0.2em]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: i === 0 ? '#40A870' : '#2A2A2A',
                  }}
                >
                  {status}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
