'use client'

import { motion } from 'framer-motion'

export default function SupportedBy() {
  return (
    <section className="section-padding section-padding-y-sm" style={{ background: '#0A0A0A', borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A' }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center"
        style={{ gap: 'var(--space-md)' }}
      >
        <span
          className="text-[10px] tracking-[0.35em] text-[#6B6B6B] uppercase block"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          SUPPORTED BY
        </span>
        <p
          className="text-xl md:text-2xl text-[#F0EDE8]"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          iDEX — Defence Innovation Organisation
        </p>
        <p
          className="text-sm text-[#6B6B6B]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Ministry of Defence, Government of India
        </p>
      </motion.div>
    </section>
  )
}
