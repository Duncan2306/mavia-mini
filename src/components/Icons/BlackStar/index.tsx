import React from 'react'

import styles from './BlackStar.module.scss'

const BlackStar = () => {
  return (
    <div className={styles.container}>
      <img src="./images/black-star.png" alt="black-star" />
    </div>
  )
}

export default React.memo(BlackStar)