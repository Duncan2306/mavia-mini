import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

import ContainerLayout from '../../layout/container'

import styles from './navigation.module.scss'

const Navigation = () => {
  const [scrollDir, setScrollDir] = useState('up')
  const lastScroll = useRef(0)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    lastScroll.current = window.scrollY
    function onScroll() {
      if (window.scrollY > 70) {
        if (window.scrollY >= lastScroll.current) {
          setScrollDir('down')
        } else {
          setScrollDir('up')
        }
      } else {
        setScrollDir('up')
      }
      lastScroll.current = window.scrollY
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!headerRef.current) {
      return
    }
    if (scrollDir === 'down') {
      headerRef.current.style.transform = 'translateY(-100%)'
    } else {
      headerRef.current.style.transform = 'translateY(0%)'
    }
  }, [scrollDir])

  return (
    <nav ref={headerRef} className={styles.navigation}>
      <ContainerLayout className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src="./images/logo.png" alt="Mavia" />
        </a>

        <ul className={styles.menu}>
          {MENU.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            className={clsx(styles.button, styles.discord)}
            style={{ background: 'url(./images/navigation/discord.png) no-repeat center / 100%' }}
          />

          <button
            className={styles.button}
            style={{ background: 'url(./images/navigation/join-beta.png) no-repeat center / 100%'}}
          />
        </div>
      </ContainerLayout>
    </nav>
  )
}

export default React.memo(Navigation)

const MENU = [
  { label: 'Home', href: '#home' },
  { label: 'Partner', href: '#partner' },
  { label: 'Features', href: '#features' },
  { label: 'Gameplay', href: '#gameplay' },
  { label: 'FAQ', href: '#faq' }
]