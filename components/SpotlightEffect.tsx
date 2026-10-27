"use client"

import { useEffect, useRef, useSyncExternalStore } from "react"

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {}
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
  mediaQuery.addEventListener("change", callback)
  return () => {
    mediaQuery.removeEventListener("change", callback)
  }
}

function getReducedMotionSnapshot(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function getReducedMotionServerSnapshot(): boolean {
  return false
}

export default function SpotlightEffect() {
  const isReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  )

  const containerRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const rafId = useRef<number>(0)

  useEffect(() => {
    if (isReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle do jednego razu na klatkę — unikamy layout thrashing
      cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        if (containerRef.current && spotlightRef.current) {
          const rect = containerRef.current.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          spotlightRef.current.style.transform = `translate3d(${x - 450}px, ${y - 450}px, 0)`
        }
      })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      cancelAnimationFrame(rafId.current)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isReducedMotion])

  if (isReducedMotion) {
    return (
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden contain-paint'>
        <div className='absolute top-0 left-1/4 -translate-x-1/2 w-200 h-175 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.18)_0%,rgba(30,58,138,0.08)_45%,transparent_70%)] blur-3xl opacity-80' />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className='pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none contain-paint'
    >
      {/* Dynamiczny interaktywny spotlight podążający za kursorem — GPU-accelerated */}
      <div
        ref={spotlightRef}
        className='absolute w-225 h-225 rounded-full will-change-transform'
        style={{
          transform: "translate3d(-150px, -200px, 0)",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.14) 0%, rgba(37,99,235,0.06) 40%, transparent 70%)",
        }}
      />

      {/* Górna kinowa wiązka światła (spotlight z lewego górnego rogu jak w referencji) */}
      <div
        className='absolute -top-32 -left-20 w-150 sm:w-225 h-200 rotate-22 pointer-events-none gpu-layer'
        style={{
          background:
            "linear-gradient(135deg, rgba(125,211,252,0.18) 0%, rgba(56,189,248,0.07) 30%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* Subtelny ambient glow z prawej strony dla równowagi */}
      <div
        className='absolute top-1/3 -right-32 w-150 h-150 pointer-events-none gpu-layer'
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.09) 0%, rgba(30,58,138,0.04) 50%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  )
}
