'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

const founders = [
  {
    role: 'AI · PRODUCT · SYSTEMS',
    name: 'ARYAN JAIN',
    bio: '4+ years building production AI for international clients. Founding engineer at two VC-backed startups. Built the NETRA cognitive EW prototype from zero before any grant or validation.',
    linkedin: '#',
    dir: -50,
  },
  {
    role: 'HARDWARE · EMBEDDED · AVIONICS',
    name: 'YOGENDRA PANJARALE',
    bio: 'BITS Pilani. Built rocket avionics with dual-redundant sensor fusion validated under high-G conditions. The engineer who asks the questions that change the direction.',
    linkedin: '#',
    dir: 50,
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 section-padding" style={{ background: '#000', borderTop: '1px solid #1A1A1A' }}>
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span
            className="text-[10px] tracking-[0.3em] text-[#6B6B6B] uppercase"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            FOUNDERS
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {founders.map(({ role, name, bio, linkedin, dir }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: dir }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8"
              style={{ background: '#0A0A0A', border: '1px solid #1A1A1A' }}
            >
              {/* Top accent line animates on hover */}
              <div
                className="absolute top-0 left-0 h-[2px] bg-[#C8A96E] transition-all duration-500"
                style={{ width: '0%' }}
              />
              <div
                className="absolute top-0 left-0 h-[2px] bg-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ width: '100%' }}
              />

              <SectionLabel className="mb-4 block">{role}</SectionLabel>

              <h3
                className="text-2xl text-[#F0EDE8] mb-4"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {name}
              </h3>

              <p
                className="text-sm text-[#6B6B6B] leading-relaxed mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {bio}
              </p>

              <a
                href={linkedin}
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
