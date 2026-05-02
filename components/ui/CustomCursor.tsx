'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice) return

    let raf: number
    let ringX = 0
    let ringY = 0
    let curX = 0
    let curY = 0

    const onMove = (e: MouseEvent) => {
      curX = e.clientX
      curY = e.clientY
    }

    const animate = () => {
      ringX += (curX - ringX) * 0.12
      ringY += (curY - ringY) * 0.12

      if (cursorRef.current) {
        cursorRef.current.style.left = `${curX}px`
        cursorRef.current.style.top = `${curY}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }
      raf = requestAnimationFrame(animate)
    }

    const onEnterLink = () => ringRef.current?.classList.add('hovered')
    const onLeaveLink = () => ringRef.current?.classList.remove('hovered')

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
