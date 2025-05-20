"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
}

export default function ParticlesBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 })

  // Initialize particles
  const initParticles = () => {
    if (!canvasRef.current) return

    const { width, height } = dimensions
    const particles: Particle[] = []
    const particleCount = Math.min(Math.floor((width * height) / 10000), 100)

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 2 + 1
      const x = Math.random() * width
      const y = Math.random() * height
      const speedX = Math.random() * 0.5 - 0.25
      const speedY = Math.random() * 0.5 - 0.25
      const colorOptions = ["#8B5CF6", "#10B981", "#3B82F6"]
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      const opacity = Math.random() * 0.5 + 0.1

      particles.push({ x, y, size, speedX, speedY, color, opacity })
    }

    particlesRef.current = particles
  }

  // Draw particles and connections
  const drawParticles = () => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Update and draw particles
    particlesRef.current.forEach((particle, index) => {
      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Boundary check
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX = -particle.speedX
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY = -particle.speedY
      }

      // Mouse interaction
      const dx = particle.x - mouseRef.current.x
      const dy = particle.y - mouseRef.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < mouseRef.current.radius) {
        const angle = Math.atan2(dy, dx)
        const force = (mouseRef.current.radius - distance) / mouseRef.current.radius
        particle.x += Math.cos(angle) * force * 2
        particle.y += Math.sin(angle) * force * 2
      }

      // Draw particle
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.globalAlpha = particle.opacity
      ctx.fill()

      // Draw connections
      particlesRef.current.forEach((otherParticle, otherIndex) => {
        if (index !== otherIndex) {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = ((150 - distance) / 1500) * particle.opacity
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        }
      })
    })

    animationRef.current = requestAnimationFrame(drawParticles)
  }

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const width = canvasRef.current.parentElement.clientWidth
        const height = canvasRef.current.parentElement.clientHeight
        setDimensions({ width, height })
        canvasRef.current.width = width
        canvasRef.current.height = height
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Initialize particles and start animation when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      initParticles()
      drawParticles()
    }

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [dimensions])

  return <canvas ref={canvasRef} className={`absolute inset-0 ${className || ""}`} style={{ pointerEvents: "none" }} />
}
