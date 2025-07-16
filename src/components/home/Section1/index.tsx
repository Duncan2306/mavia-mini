import React from 'react'

import ContainerLayout from '../../../layout/container'
import Diamond from '../../../components/Icons/Diamond'

import styles from './Section1.module.scss'

const Section1 = () => {
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
            <span className={styles.title_highlight}>Chibi twist</span> on the legendary Heroes of Mavia
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
          <img src="./images/home/sections/1.png" alt="1" />
        </section>
      </ContainerLayout>
    </div>
  )
}

export default React.memo(Section1)



const OPTIONS = [
  'Heroes of Mavia like you’ve never seen them — reimagined in adorable chibi form!',
  'The iconic Mavia universe gets a cute and chaotic chibi makeover!',
  'Legendary Mavia heroes, now mini, mighty, and irresistibly chibi-fied!',
  'Big battles, tiny warriors — it’s Heroes of Mavia with a playful twist!',
  'Dive into a chibi-powered version of the epic Heroes of Mavia saga!'
]