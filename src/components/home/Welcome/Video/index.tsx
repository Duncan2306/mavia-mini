import React from "react"

import { VIDEO_ID } from '..'

import styles from './Video.module.scss'

const Video = () => {
  return (
    <div id={VIDEO_ID} className={styles.container} style={{ background: 'url(./images/home/welcome/iphone.png) no-repeat center / 100%' }}>
      {/* <iframe
        id={VIDEO_ID} 
        height="100%"
        width="100%"
        src={`https://www.youtube.com/embed/j-nfALzm3sY?si=cuMlBf232LfVnppZ?autoplay=1&mute=1&controls=0&loop=1&playlist=j-nfALzm3sY?si=cuMlBf232LfVnppZ`}
        title="YouTube video player"
        // frameBorder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allow="autoplay; encrypted-media;"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className={styles.video}
      >
      </iframe> */}
      <video
        src={'./videos/mavia.mp4'}
        autoPlay={false}
        muted={false}
        loop
        playsInline
        className={styles.video}
        height="100%"
        width="100%"
        controls
      >
      </video>
    </div>
  )
}

export default React.memo(Video)