import React from 'react'

import ContainerLayout from '../../../layout/container'
import Diamond from '../../Icons/Diamond'

import styles from './Section5.module.scss'

const Section5 = () => {
  return (
    <div
      className={styles.container}
      data-aos="fade-up-right"
      data-aos-duration="500"
      data-aos-once="true"
    >
      <ContainerLayout className={styles.content}>
        <section className={styles.left}>
          <h2 className={styles.title}>
            <span className={styles.title_highlight}>Light base-building meets card</span> battle mayhem
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

        <section className={styles.right}>
          <img src="/images/home/sections/5.png" alt="5" />
        </section>
      </ContainerLayout>
    </div>
  )
}

export default React.memo(Section5)

const OPTIONS = [
  'Build your base, battle with cards — conquer the crypto battlefield!',
  'Strategic base-building collides with fast-paced card fights for Web3 dominance!',
  'Fortify your base and unleash your deck — win battles, earn crypto!',
  'From cards to castles, command it all in the race for Ruby2 riches!',
  'Combine brains and brawn — construct, clash, and claim your crypto crown!'
]