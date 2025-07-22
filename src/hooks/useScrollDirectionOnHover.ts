'use client'

import { useEffect, useState, useRef } from 'react'

export function useScrollDirectionOnHover(element: string) {
  const touchStartY = useRef<number | null>(null)
  const [direction, setDirection] = useState<'down' | 'up' | null>(null)

  useEffect(() => {
    const target = document.getElementById(element) || null

    if (!target) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (e.deltaY > 1) {
        setDirection('down')
      } else if (e.deltaY < -1) {
        setDirection('up')
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      // e.preventDefault()
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      if (touchStartY.current === null) return
      const currentY = e.touches[0].clientY
      const deltaY = currentY - touchStartY.current

      if (Math.abs(deltaY) > 10) {
        if (deltaY < 0) {
          setDirection('down')
        } else {
          setDirection('up')
        }
        touchStartY.current = null // reset sau 1 lần vuốt
      }
    }

    target.addEventListener('wheel', handleWheel, { passive: false })
    target.addEventListener('touchstart', handleTouchStart, { passive: true })
    target.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      target.removeEventListener('wheel', handleWheel)
      target.removeEventListener('touchstart', handleTouchStart)
      target.removeEventListener('touchmove', handleTouchMove)
    }
  }, [element])

  return { direction }
}
