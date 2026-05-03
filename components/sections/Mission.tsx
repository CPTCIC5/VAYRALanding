'use client'

import { motion } from 'framer-motion'

const words =
  'India cannot import its electromagnetic sovereignty. Every system that sees our signals was built by someone else, for someone else, optimised for threats that are not ours. VAYRA exists to end that dependency — permanently.'.split(' ')

export default function Mission() {
  return (
    <section
      id="thesis"
      className="section-padding section-padding-y w-full"
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid #1A1A1A',
      }}
    >
      <div className="flex items-center mx-auto">
        <div className="max-w-7xl grid md:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr] gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left — Section Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:sticky md:top-28"
          >
            <span
              className="text-[10px] tracking-[0.35em] text-[#C8A96E] block"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              THE THESIS
            </span>
          </motion.div>

          {/* Right — Content with gold border */}
          <div
            className="relative"
            style={{
              borderLeft: '3px solid #C8A96E',
              paddingLeft: 'clamp(1.5rem, 3vw, 2.5rem)',
            }}
          >
            <div
              className="text-xl md:text-2xl lg:text-[1.75rem] text-[#F0EDE8]"
              style={{ 
                fontFamily: "'DM Sans', sans-serif", 
                lineHeight: '1.7',
              }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ delay: i * 0.035, duration: 0.35 }}
                  style={{ display: 'inline-block', marginRight: '0.3em' }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
