import React from 'react'

import ContainerLayout from '../../../../layout/container'
import Diamond from '../../../Icons/Diamond'

import styles from './Section6.module.scss'

const Section6 = () => {
  return (
    <div className={styles.container}>
      <ContainerLayout className={styles.content}>
        <section className={styles.left}>
          <img src="./images/home/sections/6.png" alt="6" />
        </section>

        <section className={styles.right}>
          <h2 className={styles.title}>
            <span className={styles.title_highlight}>Designed for</span> Mavia fans & casual Web3 gamers alike
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

export default React.memo(Section6)

const OPTIONS = [
  'Perfect for Mavia veterans and Web3 first-timers alike!',
  'Whether you\'re a Mavia loyalist or new to Web3, adventure awaits!',
  'Built for die-hard fans and curious newcomers — no experience needed!',
  'Easy to pick up, epic to master — for Mavia fans and Web3 explorers!',
  'A welcoming battlefield for both crypto pros and casual gamers!'
]