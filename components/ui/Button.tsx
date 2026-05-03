'use client'

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
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    fontSize: '0.875rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    fontFamily: "'Space Mono', monospace",
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#C8A96E',
    borderRadius: '0',
    transition: 'all 0.3s',
    cursor: 'pointer',
    textDecoration: 'none',
  }

  const goldStyle = {
    ...baseStyle,
    backgroundColor: '#C8A96E',
    color: '#000',
    fontWeight: '700',
  }

  const outlineStyle = {
    ...baseStyle,
    backgroundColor: 'transparent',
    color: '#C8A96E',
  }

  const style = variant === 'gold' ? goldStyle : outlineStyle

  if (href) {
    return (
      <a 
        href={href} 
        className={className}
        style={style}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = variant === 'gold' ? 'transparent' : '#C8A96E'
          e.currentTarget.style.color = variant === 'gold' ? '#C8A96E' : '#000'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = variant === 'gold' ? '#C8A96E' : 'transparent'
          e.currentTarget.style.color = variant === 'gold' ? '#000' : '#C8A96E'
        }}
      >
        {children}
      </a>
    )
  }
  
  return (
    <button 
      type="button"
      onClick={onClick}
      className={className}
      style={style}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = variant === 'gold' ? 'transparent' : '#C8A96E'
        e.currentTarget.style.color = variant === 'gold' ? '#C8A96E' : '#000'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = variant === 'gold' ? '#C8A96E' : 'transparent'
        e.currentTarget.style.color = variant === 'gold' ? '#000' : '#C8A96E'
      }}
    >
      {children}
    </button>
  )
}
