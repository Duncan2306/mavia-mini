import React from 'react'
import clsx from 'clsx'

import ContainerLayout from '../../../layout/container'
import { NAVIGATION_SECTIONS } from '../../../constants/common'

import styles from './BackedBy.module.scss'

const BackedBy = () => {
  return (
    <div id={NAVIGATION_SECTIONS.partner} className={styles.container}>
      <ContainerLayout className={styles.content}>
        <h2 className={styles.title}>Backed By</h2>

        <div className={styles.scroll}>
          <ul className={clsx(styles.list, styles.marquee)}>
            {BACKED_BY_LIST.map((item) => (
              <li key={item.name}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.icon} alt={item.name} className={styles.icon} />
                </a>
              </li>
            ))}
          </ul>
          <ul className={clsx(styles.list, styles.marquee)}>
            {BACKED_BY_LIST.map((item) => (
              <li key={item.name}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.icon} alt={item.name} className={styles.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </ContainerLayout>
    </div>
  )
}

export default React.memo(BackedBy)

const BACKED_BY_LIST = [
  { icon: './images/home/backed-by/hashkey.png', name: 'hashkey', link: '' },
  { icon: './images/home/backed-by/merit.png', name: 'merit', link: '' },
  { icon: './images/home/backed-by/guildfi.png', name: 'guildfi', link: '' },
  { icon: './images/home/backed-by/avocado.png', name: 'avocado', link: '' },
  { icon: './images/home/backed-by/ec-llc.png', name: 'ec-llc', link: '' }
]