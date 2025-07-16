import React from 'react'

import ContainerLayout from '../../../layout/container'
import Diamond from '../../Icons/Diamond'

import styles from './Section2.module.scss'

const Section2 = () => {
  return (
    <div
      className={styles.container}
      data-aos="fade-up-left"
      data-aos-duration="500"
      data-aos-once="true"
    >
      <ContainerLayout className={styles.content}>
        <section className={styles.left}>
          <img src="./images/home/sections/2.png" alt="1" />
        </section>

        <section className={styles.right}>
          <h2 className={styles.title}>
            <span className={styles.title_highlight}>Fast-paced PvP</span> protect or plunder Ruby2 mines
          </h2>

          <ul className={styles.list}>
            {OPTIONS.map((option, index) => (
              <li key={index} className={styles.list_item}>
                <Diamond />
                <span className={styles.list_item_text}>{option}</span>
              </li>
            ))}
          </ul>
        </section>
      </ContainerLayout>
    </div>
  )
}

export default React.memo(Section2)

const OPTIONS = [
  'Real-time PvP mayhem — defend your turf or raid Ruby2 riches!',
  'Clash in live PvP battles to protect or plunder precious Ruby2 mines!',
  'Fast-paced PvP fights: Guard your base or go full raid mode!',
  'Defend your Ruby2 stash or launch the ultimate raid — it\'s PvP time!',
  'Live card battles where every tap could win (or lose) your Ruby2 fortune!'
]