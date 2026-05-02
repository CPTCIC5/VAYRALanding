'use client'

import { motion } from 'framer-motion'

const words =
  'India cannot import its electromagnetic sovereignty. Every system that sees our signals was built by someone else, for someone else, optimised for threats that are not ours. VAYRA exists to end that dependency — permanently.'.split(' ')

export default function Mission() {
  return (
    <section
      id="thesis"
      className="py-20 md:py-28"
      style={{
        background: '#0A0A0A',
        borderLeft: '3px solid #C8A96E',
        paddingLeft: 'clamp(1.5rem, 6vw, 7rem)',
        paddingRight: 'clamp(1.5rem, 6vw, 7rem)',
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[10px] tracking-[0.35em] text-[#C8A96E] mb-6 block"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          THE THESIS
        </motion.span>

        <div
          className="text-xl md:text-2xl lg:text-[1.75rem] leading-relaxed text-[#F0EDE8] max-w-4xl"
          style={{ fontFamily: "'DM Sans', sans-serif", display: 'flex', flexWrap: 'wrap', gap: '0 0.3em', rowGap: '0.15em' }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: i * 0.035, duration: 0.35 }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
