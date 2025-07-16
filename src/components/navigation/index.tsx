import React from 'react'
import clsx from 'clsx'

import ContainerLayout from '../../layout/container'

import styles from './navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ContainerLayout className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src="/images/logo.png" alt="Mavia" />
        </a>

        <ul className={styles.menu}>
          {MENU.map((link) => (
            <li key={link.label}>
              {link.label}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            className={clsx(styles.button, styles.discord)}
            style={{ background: 'url(/images/navigation/discord.png) no-repeat center / 100%' }}
          />

          <button
            className={styles.button}
            style={{ background: 'url(/images/navigation/join-beta.png) no-repeat center / 100%'}}
          />
        </div>
      </ContainerLayout>
    </nav>
  )
}

export default React.memo(Navigation)

const MENU = [
  { label: 'Home', href: '/' },
  { label: 'Partner', href: '/' },
  { label: 'Features', href: '/' },
  { label: 'Gameplay', href: '/' },
  { label: 'FAQ', href: '/' }
]