import React from 'react'

import ContainerLayout from '../../../layout/container'
import Diamond from '../../Icons/Diamond'

import styles from './Section3.module.scss'

const Section3 = () => {
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
            <span className={styles.title_highlight}>AI-powered cards</span> = endless strategies
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
          <img src="/images/home/sections/3.png" alt="1" />
        </section>
      </ContainerLayout>
    </div>
  )
}

export default React.memo(Section3)

const OPTIONS = [
  'No two battles the same — AI-powered cards keep strategies fresh!',
  'Smart cards, smarter plays — AI brings endless tactical variety.',
  'Every card learns, every match evolves — thanks to AI magic!',
  'Dynamic AI-driven cards mean no repeat strategies, ever.',
  'Think fast — AI-enhanced cards shift tactics in real time!'
]