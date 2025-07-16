import React, { useCallback, useState } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import clsx from "clsx"

import ContainerLayout from "../../../layout/container"
import BlackStar from "../../Icons/BlackStar"
import GoldStar from "../../Icons/GoldStar"
import Diamond from "../../Icons/Diamond"

import styles from './Crypto.module.scss'

const Crypto = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const getIndex = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    swipe: true,
    arrows: false,
    afterChange: (index: number) => getIndex(index)
  }

  return (
    <div
      className={styles.container}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
      data-aos-once="true"
    >
      <ContainerLayout className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.title_highlight}>Cute.</span> Clever. Crypto-powered.
          </h2>

          <p className={styles.description}>Mini Mavia is where fun meets the future of gaming.</p>
        </header>

        <div className={styles.box}>
          <section
            className={styles.sliderOutside}
            style={{ background: 'url(/images/home/crypto/box-slider.png) no-repeat center / 100%' }}
          >
            <Slider {...settings} className={styles.slider}>
              {SLIDER.map((item, index) => (
                <img key={index} src={item.image} alt={item.image} />
              ))}
            </Slider>
          </section>

          <section className={styles.introduceBox}>
            {INTRODUCE.map((item, index) => (
              <article key={index} className={styles.introduceItem}>
                <div className={styles.head}>
                  {currentIndex === index ? <GoldStar /> : <BlackStar />}
                  <p
                    className={clsx(styles.lbl, {
                      [styles.active]: currentIndex === index
                    })}
                  >
                    {item.heading}
                  </p>
                </div>

                <ul
                  className={clsx(styles.subList, {
                    [styles.active]: currentIndex === index
                  })}
                >
                  {item.sub.map((sub, index) => (
                    <li
                      key={index}
                      className={styles.subItem}
                      style={{ animationDelay: `${index * 0.3}s`, animationFillMode: "forwards" }}
                    >
                      <Diamond />
                      <span className={styles.subItem_lbl}>{sub}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </div>
      </ContainerLayout>
    </div>
  )
}

export default React.memo(Crypto)

const SLIDER = [
  { image: '/images/home/crypto/1.png' },
  { image: '/images/home/crypto/2.png' },
  { image: '/images/home/crypto/3.png' },
  { image: '/images/home/crypto/4.png' },
  { image: '/images/home/crypto/5.png' },
  { image: '/images/home/crypto/6.png' }
]

const INTRODUCE = [
  {
    heading: 'Chibi twist on the legendary Heroes of Mavia',
    sub: [
      'Heroes of Mavia like you’ve never seen them — reimagined in adorable chibi form!',
      'The iconic Mavia universe gets a cute and chaotic chibi makeover!',
      'Legendary Mavia heroes, now mini, mighty, and irresistibly chibi-fied!',
      'Big battles, tiny warriors — it’s Heroes of Mavia with a playful twist!',
      'Dive into a chibi-powered version of the epic Heroes of Mavia saga!',
    ]
  },
  {
    heading: 'Fast-paced PvP — protect or plunder Ruby2 mines',
    sub: [
      'Real-time PvP mayhem — defend your turf or raid Ruby2 riches!',
      'Clash in live PvP battles to protect or plunder precious Ruby2 mines!',
      'Fast-paced PvP fights: Guard your base or go full raid mode!',
      'Defend your Ruby2 stash or launch the ultimate raid — it\'s PvP time!',
      'Live card battles where every tap could win (or lose) your Ruby2 fortune!',
    ]
  },
  {
    heading: 'AI-powered cards = endless strategies',
    sub: [
      'No two battles the same — AI-powered cards keep strategies fresh!',
      'Smart cards, smarter plays — AI brings endless tactical variety.',
      'Every card learns, every match evolves — thanks to AI magic!',
      'Dynamic AI-driven cards mean no repeat strategies, ever.',
      'Think fast — AI-enhanced cards shift tactics in real time!',
    ]
  },
  {
    heading: 'Collect & upgrade heroes with unique skills',
    sub: [
      'Build your dream team — collect, level up, and unleash unique hero powers!',
      'Recruit chibi champions, upgrade their skills, and dominate the battlefield!',
      'Gather mighty minis with game-changing abilities and make them unstoppable!',
      'Unlock, power up, and master heroes with one-of-a-kind talents!',
      'Collect epic heroes, boost their powers, and craft your ultimate strategy!',
    ]
  },
  {
    heading: 'Light base-building meets card battle mayhem',
    sub: [
      'Build your base, battle with cards — conquer the crypto battlefield!',
      'Strategic base-building collides with fast-paced card fights for Web3 dominance!',
      'Fortify your base and unleash your deck — win battles, earn crypto!',
      'From cards to castles, command it all in the race for Ruby2 riches!',
      'Combine brains and brawn — construct, clash, and claim your crypto crown!',
    ]
  },
  {
    heading: 'Designed for Mavia fans & casual Web3 gamers alike',
    sub: [
      'Perfect for Mavia veterans and Web3 first-timers alike!',
      'Whether you\'re a Mavia loyalist or new to Web3, adventure awaits!',
      'Built for die-hard fans and curious newcomers — no experience needed!',
      'Easy to pick up, epic to master — for Mavia fans and Web3 explorers!',
      'A welcoming battlefield for both crypto pros and casual gamers!',
    ]
  }
]