import React, { useMemo } from 'react'

import ContainerLayout from '../../../layout/container'
import useWindowSize from '../../../hooks/useWindowSize'
import { NAVIGATION_SECTIONS } from '../../../constants/common'

import styles from './Header.module.scss'

const Header = () => {
  const { isMobile } = useWindowSize()

  const bg = useMemo(() => {
    if (isMobile) return './images/home/header/hero-mobile.png'
    return './images/home/header/hero.png'
  }, [isMobile])

  return (
    <div
      id={NAVIGATION_SECTIONS.home}
      className={styles.container}
      style={{ background: `url(${bg}) no-repeat center / 100%` }}
      data-aos="zoom-out-down"
      data-aos-duration="1500"
      data-aos-once="false"
    >
      {isMobile && <div className={styles.gradient} />}
      <ContainerLayout className={styles.content}>
        <h2 className={styles.title}>
          <span className={styles.title_highlight}>Mini Mavia</span> - Chibi Wars, Crypto Wins!
        </h2>
        
        <p className={styles.description}>Mini Mavia – a Web3 card battle game inspired by the iconic Heroes of Mavia, but with a playful chibi twist!</p>

        <ul className={styles.storeList}>
          {STORE_LIST.map((store) => (
            <li key={store.label}>
              <a href={store.link} target="_blank" rel="noopener noreferrer">
                <img src={store.icon} alt={store.label} className={styles.storeIcon} />
              </a>
            </li>
          ))}
        </ul>
      </ContainerLayout>
    </div>
  )
}

export default React.memo(Header)

const STORE_LIST = [
  { label: 'google', icon: './images/home/header/google.png', link: '' },
  { label: 'app', icon: './images/home/header/apple.png', link: '' },
  { label: 'nexira', icon: './images/home/header/nexira-btn.png', link: '' }
]