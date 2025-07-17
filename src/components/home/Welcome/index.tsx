import React, { useEffect, useMemo } from 'react'

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

  const showVideo = useMemo(() => direction === 'down', [direction])

  useEffect(() => {
    const sliderElement = document.getElementById(SLIDER_ID)
    const videoElement = document.getElementById(VIDEO_ID) as HTMLVideoElement

    if (!sliderElement || !videoElement) return

    if (direction === 'down') {
      videoElement.style.display = 'none'
      sliderElement.style.display = 'block'
      // videoElement.classList.add(styles.iphoneRotate)
      
      // setTimeout(() => {
      //   videoElement.classList.add(styles.iphoneScaleDown)
      // }, 1500)

      // setTimeout(() => {
      //   sliderElement.style.display = 'block'
      // }, 2500)
    } else {
      videoElement.style.display = 'block'
      sliderElement.style.display = 'none'
    }
  }, [direction])

  return (
    <div
      id="gameplay"
      className={styles.container}
      // data-aos="flip-down"
      // data-aos-duration="1000"
      // data-aos-once="true"
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
          <div
            className={styles.video}
            style={{
              opacity: showVideo ? 0 : 1,
              zIndex: showVideo ? 0 : 10,
            }}
          >
            <Video />
          </div>
          <div
            className={styles.slider}
            style={{
              opacity: !showVideo ? 0 : 1,
              zIndex: !showVideo ? 0 : 10,
            }}
          >
            <Slider isMobile={isMobile} />
          </div>
        </div>
      </ContainerLayout>
    </div>
  )
}

export default React.memo(Welcome)