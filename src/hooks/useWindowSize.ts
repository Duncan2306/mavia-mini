'use client'

import { useCallback, useEffect, useState } from "react"
import { BREAKPOINTS } from "../constants/common"

const setWindowState = (setIsMobile: (value: boolean) => void, setIsTablet: (value: boolean) => void, setIsDesktop: (value: boolean) => void) => {
  const sm = window.matchMedia(`(max-width: ${BREAKPOINTS.SM_MAX}px)`)
  const md = window.matchMedia(`(min-width: ${BREAKPOINTS.MD_MIN}px) and (max-width: ${BREAKPOINTS.MD_MAX}px)`)
  const lg = window.matchMedia(`(min-width: ${BREAKPOINTS.LG_MIN}px)`)

  if (sm.matches) {
    setIsMobile(true)
    setIsTablet(false)
    setIsDesktop(false)
  }

  if (md.matches) {
    setIsMobile(false)
    setIsTablet(true)
    setIsDesktop(false)
  }

  if (lg.matches) {
    setIsMobile(false)
    setIsTablet(false)
    setIsDesktop(true)
  }
}

const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  const onResize = useCallback(() => {
    setWindowState(setIsMobile, setIsTablet, setIsDesktop)
  }, [])

  useEffect(() => {
    onResize()

    window?.addEventListener('resize', onResize)

    return () => {
      window?.removeEventListener('resize', onResize)
    }
  }, [onResize])

  return { isMobile, isTablet, isDesktop }
}

export default useWindowSize

