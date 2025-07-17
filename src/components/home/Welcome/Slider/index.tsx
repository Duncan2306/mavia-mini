import React, { useCallback, useState } from "react"
import clsx from "clsx"
import Slider from 'react-slick'

import { SLIDER_ID } from '..'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Slider.module.scss'

const MiniMaviaSlider = ({ isMobile }: { isMobile: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const getIndex = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const settings = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: isMobile ? 1 : 3,
    speed: 800,
    arrows: true,
    infinite: true,
    focusOnSelect: true,
    afterChange: (index: number) => getIndex(index),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  }

  return (
    <div id={SLIDER_ID} className={styles.container}>
      <Slider {...settings}>
        {LIST_SLIDE.map((item, index) => (
          <div key={index} className={styles.item}>
            {currentIndex !== index && <div className={styles.gradient} />}
            <img src={item} alt={`Slide ${index + 1}`}
              className={clsx(styles.image)}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default React.memo(MiniMaviaSlider)

const LIST_SLIDE = [
  './images/home/welcome/1.png',
  './images/home/welcome/2.png',
  './images/home/welcome/3.png',
  './images/home/welcome/4.png',
  './images/home/welcome/5.png',
  './images/home/welcome/6.png',
]

interface ArrowProps {
  onClick?: () => void
}

const CustomPrevArrow = (props: ArrowProps) => {
  const { onClick = () => {} } = props

  return (
    <img
      className={styles.prevArrow}
      src="./images/back.png"
      alt="back"
      onClick={onClick}
    />
  )
}

const CustomNextArrow = (props: ArrowProps) => {
  const { onClick } = props

  return (
    <img
      className={styles.nextArrow}
      src="./images/next.png"
      alt="next"
      onClick={onClick}
    />
  )
}