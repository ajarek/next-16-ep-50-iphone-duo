"use client"

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react"

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

  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 300,
    y: 250,
  })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isReducedMotion])

  if (isReducedMotion) {
    return (
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute top-0 left-1/4 -translate-x-1/2 w-200 h-175 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.18)_0%,rgba(30,58,138,0.08)_45%,transparent_70%)] blur-3xl opacity-80' />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className='pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none'
    >
      {/* Dynamiczny interaktywny spotlight podążający za kursorem */}
      <div
        className='absolute w-225 h-225 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-150 ease-out will-change-transform'
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background:
            "radial-gradient(circle, rgba(56,189,248,0.14) 0%, rgba(37,99,235,0.06) 40%, transparent 70%)",
        }}
      />

      {/* Górna kinowa wiązka światła (spotlight z lewego górnego rogu jak w referencji) */}
      <div
        className='absolute -top-32 -left-20 w-150 sm:w-225 h-200 rotate-22 pointer-events-none'
        style={{
          background:
            "linear-gradient(135deg, rgba(125,211,252,0.18) 0%, rgba(56,189,248,0.07) 30%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* Subtelny ambient glow z prawej strony dla równowagi */}
      <div
        className='absolute top-1/3 -right-32 w-150 h-150 pointer-events-none'
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.09) 0%, rgba(30,58,138,0.04) 50%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  )
}
