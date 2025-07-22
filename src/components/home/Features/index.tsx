import React, { useEffect, useRef, useState } from 'react'

import styles from './Features.module.scss'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import { NAVIGATION_SECTIONS } from '../../../constants/common'

const Features = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const lastSlideRef = useRef<HTMLDivElement>(null)
  const firstSlideRef = useRef<HTMLDivElement>(null)

  const [isLastVisible, setIsLastVisible] = useState(false)
  const [isFirstVisible, setIsFirstVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLastVisible(entry.isIntersecting)
      },
      {
        root: scrollRef.current,
        threshold: 0.9, // Slide cuối nằm 90% trong viewport thì tính là "hiện"
      }
    )

    if (lastSlideRef.current) {
      observer.observe(lastSlideRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFirstVisible(entry.isIntersecting)
      },
      {
        root: scrollRef.current,
        threshold: 0.9, // Slide cuối nằm 90% trong viewport thì tính là "hiện"
      }
    )

    if (firstSlideRef.current) {
      observer.observe(firstSlideRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div id={NAVIGATION_SECTIONS.feature} className={styles.container}>
      {isFirstVisible ? null : <img src="./images/scroll.png" alt="arrow" className={styles.scrollReverse} />}
      {isLastVisible ? null : <img src="./images/scroll.png" alt="arrow" className={styles.scrollTo} />}

      <div ref={scrollRef} className={styles.features}>
        <SectionBox direction="right" ref={firstSlideRef as React.RefObject<HTMLDivElement>}>
          <Section1 />
        </SectionBox>
        <SectionBox direction="left">
          <Section2 />
        </SectionBox>
        <SectionBox direction="right">
          <Section3 />
        </SectionBox>
        <SectionBox direction="left">
          <Section4 />
        </SectionBox>
        <SectionBox direction="right">
          <Section5 />
        </SectionBox>
        <SectionBox direction="left" ref={lastSlideRef as React.RefObject<HTMLDivElement>}>
          <Section6 />
        </SectionBox>
      </div>
    </div>
  )
}

export default React.memo(Features)

const SectionBox = ({ children, ref }: { children: React.ReactNode, direction: 'left' | 'right', ref?: React.RefObject<HTMLDivElement> }) => {
  return (
    <div ref={ref} className={styles.features_item}>
      {children}
    </div>
  )
}