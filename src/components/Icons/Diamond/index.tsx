import React from 'react'

import styles from './Diamond.module.scss'

const Diamond = () => {
  return (
    <div className={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16rem" height="16rem" viewBox="0 0 16 16" fill="none">
        <g clipPath="url(#clip0_3_9416)">
          <path d="M15.1968 6.06323L9.91705 0.7835C8.85829 -0.275255 7.14171 -0.275255 6.08295 0.7835L0.803223 6.06323C-0.255532 7.12199 -0.255531 8.83857 0.803224 9.89732L6.08296 15.1771C7.14171 16.2358 8.85829 16.2358 9.91704 15.1771L15.1968 9.89732C16.2555 8.83857 16.2555 7.12199 15.1968 6.06323Z" fill="#209EFF"/>
        </g>
        <defs>
          <clipPath id="clip0_3_9416">
            <rect width="16rem" height="16rem" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default React.memo(Diamond)