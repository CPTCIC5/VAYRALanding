'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'gold' | 'outline'
  href?: string
  onClick?: () => void
  className?: string
}

export default function Button({
  children,
  variant = 'outline',
  href,
  onClick,
  className = '',
}: ButtonProps) {
  const base =
    'relative inline-flex items-center gap-2 px-7 py-3 text-sm tracking-widest uppercase overflow-hidden transition-all duration-200'
  const styles =
    variant === 'gold'
      ? `${base} bg-[#C8A96E] text-black font-semibold hover:bg-transparent hover:text-[#C8A96E] border border-[#C8A96E]`
      : `${base} bg-transparent text-[#C8A96E] border border-[#C8A96E] hover:bg-[#C8A96E] hover:text-black`

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`${styles} ${className}`}
      onClick={onClick}
      style={{ fontFamily: "'Space Mono', monospace" }}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }
  return content
}
