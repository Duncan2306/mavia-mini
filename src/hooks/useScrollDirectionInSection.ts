'use client'

import { useEffect, useRef, useState } from "react"

export const useScrollDirectionInSection = (ref: React.RefObject<HTMLElement | null>) => {
  const [direction, setDirection] = useState<string | null>(null)
  const [inView, setInView] = useState(false)

  const lastY = useRef(window?.scrollY)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 1 }
    )
    if (ref?.current) observer.observe(ref?.current)
    return () => observer.disconnect()
  }, [ref])

  useEffect(() => {
    const handleScroll = () => {
      if (inView) {
        const currentY = window?.scrollY
        setDirection(currentY > lastY.current ? 'down' : 'up')
        lastY.current = currentY
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [inView])

  return { direction, inView }
}
