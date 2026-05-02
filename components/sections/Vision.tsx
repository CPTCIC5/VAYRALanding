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
      ref={ref}
      className="relative section-padding py-32 overflow-hidden"
      style={{ background: '#000', borderTop: '1px solid #1A1A1A' }}
    >
      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(200,169,110,0.04) 0%, transparent 65%)' }}
      />

      <div className="max-w-screen-xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-[10px] tracking-[0.35em] text-[#C8A96E] mb-8 block"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          VISION
        </motion.span>

        {/* Typewriter headline — left aligned for stronger impact */}
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
            className="inline-block align-middle bg-[#C8A96E] ml-1"
            style={{ width: 4, height: '0.8em', opacity: cursorVisible ? 1 : 0, transition: 'opacity 0.1s' }}
          />
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={done ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-base md:text-lg text-[#6B6B6B] leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Cognitive EW for the Indian Army is where we start. Naval EW, air defence EW, and space domain awareness follow. We are not building a product.
            <br /><br />
            We are building India's first AI-native defence technology company.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={done ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm text-[#C8A96E] leading-relaxed self-start border-l border-[#C8A96E] pl-6"
            style={{ fontFamily: "'Space Mono', monospace", borderLeftColor: 'rgba(200,169,110,0.3)' }}
          >
            "The ambition: Palantir-scale sovereign intelligence and EW platform for the Indian Armed Forces and allied nations."
          </motion.p>
        </div>
      </div>
    </section>
  )
}
