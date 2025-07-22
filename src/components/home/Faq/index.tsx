import React, { useState } from 'react'
import clsx from 'clsx'

import ContainerLayout from '../../../layout/container'
import { Expandable } from '../../shared/expandable/Expandable'
import useWindowSize from '../../../hooks/useWindowSize'
import { NAVIGATION_SECTIONS } from '../../../constants/common'

import styles from './Faq.module.scss'

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0)

  const { isMobile } = useWindowSize()

  return (
    <div id={NAVIGATION_SECTIONS.faq} className={styles.container}>
      <img src="./images/home/faq/sticker.png" alt="sticker" className={styles.sticker} />
      <ContainerLayout className={styles.content}>
        {isMobile ? <h2 className={styles.faqBox_title}>FAQ</h2> : null}
        <img src="./images/home/faq/girl-ruby.png" alt="hero" className={styles.hero} />

        <section className={styles.faqBox}>
          {isMobile ? null : <h2 className={styles.faqBox_title}>FAQ</h2>}

          <ul className={styles.list}>
            {FAQsList.map((item, index) => (
              <li
                key={index}
                className={clsx(styles.item, {
                  [styles.open]: open === index
                })}
                onClick={() => setOpen(open === index ? null : index)}
              >
                <section className={styles.question}>
                  <p
                    className={clsx(styles.question_lbl, {
                      [styles.question_lbl_open]: open === index
                    })}
                  >
                    {item.title}
                  </p>
                  {open === index ? <CloseIcon /> : <OpenIcon />}
                </section>

                <Expandable open={open === index} key={index}>
                  <section className={styles.answer}>
                    {open === index && <p className={styles.answer_lbl}>{item.content}</p>}
                  </section>
                </Expandable>
              </li>
            ))}
          </ul>
        </section>
      </ContainerLayout>
    </div>
  )
}

export default React.memo(Faq)

const FAQsList = [
  {
    title: '1. What is Mini Mavia?',
    content: 'Mini Mavia is a fast-paced, Web3-powered card battle game set in the Heroes of Mavia universe. It features adorable chibi-style heroes, AI-enhanced cards, and thrilling PvP battles where players defend or raid Ruby2 mines for rewards.',
  },
  {
    title: '2. How do AI-powered cards work?',
    content: 'The purpose of the app is to help users find the best deals on flights, hotels, and cars.',
  },
  {
    title: '3. Do I need a crypto wallet to play?',
    content: 'The purpose of the app is to help users find the best deals on flights, hotels, and cars.',
  },
  {
    title: '4. Is Mini Mavia free to play?',
    content: 'The purpose of the app is to help users find the best deals on flights, hotels, and cars.',
  },
  {
    title: '5. Can I earn real rewards in the game?',
    content: 'The purpose of the app is to help users find the best deals on flights, hotels, and cars.',
  }
]

const CloseIcon = () => (
  <div className={styles.closeIcon}>
    <svg xmlns="http://www.w3.org/2000/svg" width="19rem" height="3rem" viewBox="0 0 19 3" fill="none">
      <path d="M19 3H0V0H19V3Z" fill="white"/>
    </svg> 
  </div>
)

const OpenIcon = () => (
  <div className={styles.openIcon}>
    <svg xmlns="http://www.w3.org/2000/svg" width="19rem" height="19rem" viewBox="0 0 19 19" fill="none">
      <path d="M11 8H19V11H11V19H8V11H0V8H8V0H11V8Z" fill="#0E1426"/>
    </svg>
  </div>
)