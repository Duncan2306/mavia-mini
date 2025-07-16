import React from 'react'

import ContainerLayout from '../../../layout/container'
import Diamond from '../../Icons/Diamond'

import styles from './Section4.module.scss'

const Section4 = () => {
  return (
    <div
      className={styles.container}
      data-aos="fade-up-left"
      data-aos-duration="500"
      data-aos-once="true"
    >
      <ContainerLayout className={styles.content}>
        <section className={styles.left}>
          <img src="./images/home/sections/4.png" alt="4" />
        </section>

        <section className={styles.right}>
          <h2 className={styles.title}>
            <span className={styles.title_highlight}>Collect & upgrade heroes</span> with unique skills
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

export default React.memo(Section4)

const OPTIONS = [
  'Build your dream team — collect, level up, and unleash unique hero powers!',
  'Recruit chibi champions, upgrade their skills, and dominate the battlefield!',
  'Gather mighty minis with game-changing abilities and make them unstoppable!',
  'Unlock, power up, and master heroes with one-of-a-kind talents!',
  'Collect epic heroes, boost their powers, and craft your ultimate strategy!'
]