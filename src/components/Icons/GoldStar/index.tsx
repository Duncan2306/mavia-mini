import React from 'react'

import styles from './GoldStar.module.scss'

const GoldStar = () => {
  return (
    <div className={styles.container}>
      <img src="./images/gold-star.png" alt="gold-star" />
    </div>
  )
}

export default React.memo(GoldStar)