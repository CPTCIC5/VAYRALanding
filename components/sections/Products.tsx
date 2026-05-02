'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import HexGrid from '@/components/ui/HexGrid'

const products = [
  {
    label: 'SIGNAL INTELLIGENCE',
    name: 'NETRA',
    sanskrit: '/ eye /',
    description:
      'AI-powered RF signal classification that sees known and unknown threats in real time. Unknown signals flagged automatically — never misclassified, never ignored.',
    stack: 'CNN-LSTM · RADIOML 2018 · EDGE INFERENCE',
    accent: '#C8A96E',
  },
  {
    label: 'DECISION ENGINE',
    name: 'MANAS',
    sanskrit: '/ mind /',
    description:
      'Reinforcement learning agent that maps every threat to the optimal countermeasure in milliseconds. Learns from every engagement. Gets smarter in the field.',
    stack: 'PPO · 6 ECM MODES · 200K SIMULATED ENGAGEMENTS',
    accent: '#C8A96E',
  },
  {
    label: 'KNOWLEDGE BASE',
    name: 'SMRITI',
    sanskrit: '/ memory /',
    description:
      'Every engagement logged. Every threat remembered. Response time improves with operational experience. The system that fights today is faster than the one that fought yesterday.',
    stack: 'DYNAMIC · PERSISTENT · SELF-IMPROVING',
    accent: '#C8A96E',
  },
]

export default function Products() {
  return (
    <section id="products" className="relative py-24 section-padding overflow-hidden" style={{ borderTop: '1px solid #1A1A1A' }}>
      <HexGrid opacity={0.028} />
      <div className="relative z-10 max-w-screen-xl mx-auto">

        {/* Section heading row */}
        <div className="flex items-end justify-between mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[clamp(3.5rem,7vw,7rem)] leading-none text-[#F0EDE8]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em' }}
          >
            SYSTEMS
          </motion.h2>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden md:block text-[10px] tracking-[0.25em] text-[#6B6B6B] mb-2"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            3 MODULES · v0.1
          </motion.span>
        </div>

        {/* Cards */}
        <div className="flex overflow-x-auto md:overflow-visible md:grid md:grid-cols-3 gap-4 md:gap-5 pb-4 md:pb-0 snap-x snap-mandatory md:snap-none">
          {products.map(({ label, name, sanskrit, description, stack }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative flex-none w-[84vw] md:w-auto snap-start flex flex-col"
              style={{
                background: '#0A0A0A',
                borderTop: '2px solid #C8A96E',
                border: '1px solid #1A1A1A',
                borderTopColor: '#C8A96E',
                borderTopWidth: 2,
                padding: '2rem',
                minHeight: 380,
              }}
            >
              {/* Top-right arrow */}
              <span
                className="absolute top-5 right-5 text-[#C8A96E] text-base opacity-40 group-hover:opacity-100 transition-opacity duration-200"
                style={{ fontFamily: 'monospace' }}
              >
                ↗
              </span>

              {/* Subtle corner bracket */}
              <div className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-[#C8A96E] opacity-20 group-hover:opacity-50 transition-opacity" />

              <SectionLabel className="mb-4 block">{label}</SectionLabel>

              <h3
                className="text-[3.2rem] leading-none text-[#F0EDE8] mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}
              >
                {name}
              </h3>

              <span
                className="text-[10px] text-[#6B6B6B] tracking-widest mb-5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {sanskrit}
              </span>

              <div className="h-px bg-[#1A1A1A] mb-5" />

              <p
                className="text-sm text-[#6B6B6B] leading-relaxed flex-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {description}
              </p>

              <div className="mt-6 pt-4 border-t border-[#1A1A1A]">
                <span
                  className="text-[9px] text-[#6B6B6B] tracking-[0.12em]"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {stack}
                </span>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 40px rgba(200,169,110,0.04)', borderRadius: 'inherit' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
