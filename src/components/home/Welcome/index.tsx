import React from 'react'

import ContainerLayout from '../../../layout/container'

import styles from './Welcome.module.scss'

const Welcome = () => {
  return (
    <div
      className={styles.container}
      data-aos="flip-down"
      data-aos-duration="500"
      data-aos-once="true"
    >
      <ContainerLayout className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.title_highlight}>Welcome to</span> Mini Mavia
          </h2>

          <p className={styles.description}>Where cute gets chaotic and crypto gets clever!</p>
        </header>
        
        <img src="/images/home/iphone.png" alt="iphone" className={styles.iphone} />
      </ContainerLayout>
    </div>
  )
}

export default React.memo(Welcome)