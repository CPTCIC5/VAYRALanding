'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const isMobile = window.innerWidth < 768
    const W = container.offsetWidth
    const H = container.offsetHeight

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'low-power' })
    renderer.setPixelRatio(1) // always 1 — perf is more important than sharpness here
    renderer.setSize(W, H)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 80)
    camera.position.z = 5

    // Wireframe icosahedron — low segment count
    const sphereGeo = new THREE.IcosahedronGeometry(2, 2)
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0xc8a96e,
      wireframe: true,
      transparent: true,
      opacity: 0.05,
    })
    const sphere = new THREE.Mesh(sphereGeo, sphereMat)
    sphere.position.set(2, 0, 0)
    scene.add(sphere)

    // Stars — reduced count, instanced
    const count = isMobile ? 180 : 380
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 22
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    const starGeo = new THREE.BufferGeometry()
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const starMat = new THREE.PointsMaterial({ color: 0xc8a96e, size: 0.02, transparent: true, opacity: 0.35 })
    scene.add(new THREE.Points(starGeo, starMat))

    let animId: number
    let lastTime = 0

    const animate = (ts: number) => {
      animId = requestAnimationFrame(animate)
      if (document.hidden) return

      // Throttle to ~30fps — hero is atmospheric, not interactive
      if (ts - lastTime < 33) return
      lastTime = ts

      sphere.rotation.y += 0.002
      sphere.rotation.x += 0.0007
      renderer.render(scene, camera)
    }
    animId = requestAnimationFrame(animate)

    let resizeTimer: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        const w = container.offsetWidth
        const h = container.offsetHeight
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
      }, 400)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      sphereGeo.dispose()
      sphereMat.dispose()
      starGeo.dispose()
      starMat.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />
}
