'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

const founders = [
  {
    role: 'AI · PRODUCT · SYSTEMS',
    name: 'ARYAN JAIN',
    bio: '4+ years building production AI for international clients. Founding engineer at two VC-backed startups. Built the NETRA cognitive EW prototype from zero before any grant or validation.',
    linkedin: 'https://www.linkedin.com/in/aryan-jain-8087a6188/',
    dir: -50,
  },
  {
    role: 'HARDWARE · EMBEDDED · AVIONICS',
    name: 'YOG PANJARALE',
    bio: 'BITS Pilani. Built rocket avionics with dual-redundant sensor fusion validated under high-G conditions. The engineer who asks the questions that change the direction.',
    linkedin: 'https://www.linkedin.com/in/yog-panjarale/',
    dir: 50,
  },
]

export default function Team() {
  return (
    <section id="team" className="section-padding section-padding-y" style={{ background: '#000', borderTop: '1px solid #1A1A1A' }}>
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[10px] tracking-[0.25em] block"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: '#C8A96E', marginBottom: 'var(--space-lg)' }}
        >
          Founders
        </motion.span>

        <div className="grid md:grid-cols-2" style={{ gap: 'clamp(2rem, 4vw, 3rem)' }}>
          {founders.map(({ role, name, bio, linkedin, dir }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: dir }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
              style={{ 
                background: '#0A0A0A', 
                border: '1px solid #1A1A1A',
                padding: 'clamp(2rem, 4vw, 2.5rem)',
              }}
            >
              {/* Top accent line animates on hover */}
              <div
                className="absolute top-0 left-0 h-[2px] bg-[#C8A96E] opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ width: '100%' }}
              />

              <div style={{ marginBottom: 'var(--space-md)' }}>
                <SectionLabel className="block">{role}</SectionLabel>
              </div>

              <h3
                className="text-2xl text-[#F0EDE8]"
                style={{ fontFamily: "'Space Mono', monospace", marginBottom: 'var(--space-md)' }}
              >
                {name}
              </h3>

              <p
                className="text-sm text-[#6B6B6B] leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", marginBottom: 'var(--space-lg)', lineHeight: '1.7' }}
              >
                {bio}
              </p>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] text-[#C8A96E] tracking-[0.2em] hover:opacity-70 transition-opacity"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                LinkedIn ↗
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
