import React, { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import ContainerLayout from '../../../layout/container'
import { useScrollDirectionOnHover } from '../../../hooks/useScrollDirectionOnHover'
import Slider from './Slider'
import Video from './Video'
import useWindowSize from '../../../hooks/useWindowSize'

import styles from './Welcome.module.scss'

export const MEDIA_ID = 'gameplay-media'
export const VIDEO_ID = 'gameplay-video'
export const SLIDER_ID = 'gameplay-slider'

const Welcome = () => {
  const { isMobile } = useWindowSize()
  const { direction } = useScrollDirectionOnHover(MEDIA_ID)

  const bg = useMemo(() => {
    if (isMobile) return './images/home/welcome/bg-mobile.png'
    return './images/home/welcome/bg.png'
  }, [isMobile])

  const showSlider = useMemo(() => direction === 'down', [direction])

  return (
    <div
      id="gameplay"
      className={styles.container}
      style={{ background: `url(${bg}) no-repeat center / 100%` }}
    >
      <ContainerLayout className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.title_highlight}>Welcome to</span> Mini Mavia
          </h2>

          <p className={styles.description}>Where cute gets chaotic and crypto gets clever!</p>
        </header>
        
        <div id={MEDIA_ID} className={styles.mediaBox}>
          <AnimatePresence mode="wait">
            {showSlider ? (
              <motion.div
                key="slider"
                initial={{ rotate: 0, scale: 0.5, opacity: 0.8 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
                transition={{ duration: 1.2, ease: 'circOut' }}
                className={styles.slider}
              >
                <Slider isMobile={isMobile} />
              </motion.div>
            ) : (
              <motion.div
                key="iphone"
                initial={{ rotate: 90, scale: 0.5, opacity: 0.8 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                transition={{ duration: 1.2, ease: 'circOut' }}
                className={styles.video}
              >
                <Video />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ContainerLayout>
    </div>
  )
}

export default React.memo(Welcome)