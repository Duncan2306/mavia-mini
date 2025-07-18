import React from 'react'

import styles from './Diamond.module.scss'

const Diamond = () => {
  return (
    <div className={styles.container}>
      <img src="./images/diamond.png" alt="diamond" />
    </div>
  )
}

export default React.memo(Diamond)