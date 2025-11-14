import { useEffect, useRef } from 'react'

export default function Particles({ hue = 200 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf

    const DPR = Math.min(2, window.devicePixelRatio || 1)
    let w = (canvas.width = window.innerWidth * DPR)
    let h = (canvas.height = window.innerHeight * DPR)
    canvas.style.width = '100%'
    canvas.style.height = '100%'

    const count = Math.floor((w * h) / (14000 * DPR))
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25 * DPR,
      vy: (Math.random() - 0.5) * 0.25 * DPR,
      r: Math.random() * 1.6 * DPR + 0.4 * DPR,
      a: Math.random() * 0.6 + 0.2,
    }))

    function resize() {
      w = canvas.width = window.innerWidth * DPR
      h = canvas.height = window.innerHeight * DPR
    }

    window.addEventListener('resize', resize)

    function loop() {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2)
        grad.addColorStop(0, `hsla(${hue}, 100%, 70%, ${0.3 * p.a})`)
        grad.addColorStop(1, `hsla(${hue + 40}, 100%, 50%, 0)`)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [hue])

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" />
}
