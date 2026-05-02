'use client'

import { motion } from 'framer-motion'

const words =
  'We build AI-native electronic warfare systems for the Indian Armed Forces and allied nations. Starting with cognitive EW — the capability India does not have today.'.split(
    ' '
  )

export default function Mission() {
  return (
    <section id="mission" className="py-20 md:py-28" style={{ background: '#0A0A0A', borderLeft: '3px solid #C8A96E', paddingLeft: 'clamp(1.5rem, 6vw, 7rem)', paddingRight: 'clamp(1.5rem, 6vw, 7rem)' }}>
      <div className="max-w-screen-xl mx-auto">
        <div
          className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-[#F0EDE8] max-w-4xl"
          style={{ fontFamily: "'DM Sans', sans-serif", display: 'flex', flexWrap: 'wrap', gap: '0 0.3em', rowGap: '0.15em' }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
