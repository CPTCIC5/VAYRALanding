'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import HexGrid from '@/components/ui/HexGrid'

const modules = [
  {
    label: 'SIGNAL INTELLIGENCE',
    name: 'NETRA',
    sanskrit: '/ eye /',
    description:
      'AI-powered RF signal classification. Sees known and unknown threats in real time. Unknown signals are flagged automatically — never misclassified, never ignored.',
    stack: 'CNN-LSTM · RADIOML 2018 · EDGE INFERENCE',
  },
  {
    label: 'DECISION ENGINE',
    name: 'MANAS',
    sanskrit: '/ mind /',
    description:
      'Reinforcement learning agent that maps every detected threat to the optimal countermeasure in milliseconds. Learns from every engagement. Gets faster in the field.',
    stack: 'PPO · 6 ECM MODES · 200K SIMULATED ENGAGEMENTS',
  },
  {
    label: 'KNOWLEDGE BASE',
    name: 'SMRITI',
    sanskrit: '/ memory /',
    description:
      'Every engagement logged, every threat remembered. Response time improves with operational experience. The system that fights today is faster than the one that fought yesterday.',
    stack: 'DYNAMIC · PERSISTENT · SELF-IMPROVING',
  },
]

export default function Products() {
  return (
    <section
      id="products"
      className="relative section-padding py-24 overflow-hidden"
      style={{ borderTop: '1px solid #1A1A1A' }}
    >
      <HexGrid opacity={0.028} />

      <div className="relative z-10 max-w-screen-xl mx-auto">

        {/* Module label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span
            className="text-[10px] tracking-[0.35em] mb-3 block"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: '#C8A96E' }}
          >
            CURRENT WORK
          </span>
          <h2
            className="text-[clamp(3.5rem,7vw,7rem)] leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em', color: '#F0EDE8' }}
          >
            MODULE 01
          </h2>
          <p
            className="mt-3 text-base max-w-xl leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B6B6B' }}
          >
            Cognitive Electronic Warfare for the Indian Army. This is where we start.
            The systems below are the first output of a platform we intend to build across
            every domain India operates in.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex overflow-x-auto md:overflow-visible md:grid md:grid-cols-3 gap-4 md:gap-5 pb-4 md:pb-0 snap-x snap-mandatory md:snap-none">
          {modules.map(({ label, name, sanskrit, description, stack }, i) => (
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
                border: '1px solid #1A1A1A',
                borderTopColor: '#C8A96E',
                borderTopWidth: 2,
                padding: '2rem',
                minHeight: 360,
              }}
            >
              <span
                className="absolute top-5 right-5 text-base opacity-40 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: '#C8A96E' }}
              >
                ↗
              </span>
              <div className="absolute bottom-5 right-5 w-4 h-4 border-b border-r opacity-20 group-hover:opacity-50 transition-opacity" style={{ borderColor: '#C8A96E' }} />

              <SectionLabel className="mb-4 block">{label}</SectionLabel>

              <h3
                className="text-[3.2rem] leading-none mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em', color: '#F0EDE8' }}
              >
                {name}
              </h3>

              <span
                className="text-[10px] tracking-widest mb-5"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: '#6B6B6B' }}
              >
                {sanskrit}
              </span>

              <div className="h-px mb-5" style={{ background: '#1A1A1A' }} />

              <p
                className="text-sm leading-relaxed flex-1"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B6B6B' }}
              >
                {description}
              </p>

              <div className="mt-6 pt-4" style={{ borderTop: '1px solid #1A1A1A' }}>
                <span
                  className="text-[9px] tracking-[0.12em]"
                  style={{ fontFamily: "'Space Mono', monospace", color: '#6B6B6B' }}
                >
                  {stack}
                </span>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: 'inset 0 0 40px rgba(200,169,110,0.04)' }} />
            </motion.div>
          ))}
        </div>

        {/* "This is not where we stop" line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 text-sm"
          style={{ fontFamily: "'Space Mono', monospace", color: '#6B6B6B' }}
        >
          Module 02, 03, and beyond are defined by what India needs next —
          not by what we decided to build today.
        </motion.p>
      </div>
    </section>
  )
}
