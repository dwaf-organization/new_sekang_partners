import { useEffect, useRef } from 'react'

type Particle = {
  color: string
  opacity: number
  size: number
  vx: number
  vy: number
  x: number
  y: number
}

type HeroParticleCanvasProps = {
  disabled?: boolean
}

const PARTICLE_COUNT = 70
const CONNECTION_DISTANCE = 118
const CONNECTION_ALPHA = 0.1

export function HeroParticleCanvas({ disabled = false }: HeroParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (disabled) {
      return undefined
    }

    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) {
      return undefined
    }

    let animationFrameId = 0
    const particles: Particle[] = []
    const rootStyles = getComputedStyle(document.documentElement)
    const colors = [
      rootStyles.getPropertyValue('--color-primary-gradient-start').trim() || '#00c6ff',
      rootStyles.getPropertyValue('--color-primary-gradient-end').trim() || '#0072ff',
      '#7c3aed',
      rootStyles.getPropertyValue('--color-primary-gradient-start').trim() || '#00c6ff',
    ]

    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1
      const { innerHeight, innerWidth } = window

      canvas.width = innerWidth * pixelRatio
      canvas.height = innerHeight * pixelRatio
      canvas.style.height = `${innerHeight}px`
      canvas.style.width = `${innerWidth}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }

    const createParticles = () => {
      particles.length = 0

      for (let index = 0; index < PARTICLE_COUNT; index += 1) {
        particles.push({
          color: colors[index % colors.length],
          opacity: Math.random() * 0.45 + 0.18,
          size: Math.random() * 1.4 + 0.45,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        })
      }
    }

    const drawConnections = () => {
      for (let index = 0; index < particles.length; index += 1) {
        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const first = particles[index]
          const second = particles[nextIndex]
          const distanceX = first.x - second.x
          const distanceY = first.y - second.y
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

          if (distance < CONNECTION_DISTANCE) {
            context.beginPath()
            context.strokeStyle = `rgba(0, 198, 255, ${
              CONNECTION_ALPHA * (1 - distance / CONNECTION_DISTANCE)
            })`
            context.lineWidth = 0.28
            context.moveTo(first.x, first.y)
            context.lineTo(second.x, second.y)
            context.stroke()
          }
        }
      }
    }

    const drawParticles = () => {
      particles.forEach((particle) => {
        context.beginPath()
        context.globalAlpha = particle.opacity
        context.fillStyle = particle.color
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fill()
        context.globalAlpha = 1

        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > window.innerWidth) {
          particle.vx *= -1
        }

        if (particle.y < 0 || particle.y > window.innerHeight) {
          particle.vy *= -1
        }
      })
    }

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)
      drawConnections()
      drawParticles()
      animationFrameId = window.requestAnimationFrame(draw)
    }

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    resizeCanvas()
    createParticles()
    draw()

    window.addEventListener('resize', handleResize)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [disabled])

  return (
    <canvas
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1]"
      ref={canvasRef}
    />
  )
}
