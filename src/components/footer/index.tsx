import React from 'react'

import ContainerLayout from '../../layout/container'

import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.navigation}>
      <ContainerLayout className={styles.container}>
        <section className={styles.left}>
          <a href="/" className={styles.logo}>
            <img src="./images/logo-white.png" alt="Mavia" />
          </a>
          <span className={styles.copyright}>© Copyright 2025 Mavia Mini. All rights reserved</span>
        </section>

        <section className={styles.right}>
          <ul className={styles.menu}>
            {MENU.map((link) => (
              <li key={link.label}>
                {link.label}
              </li>
            ))}
          </ul>

          <ul className={styles.socials}>
            {SOCIALS.map((social) => (
              <li
                key={social.label}
                className={styles.social}
                style={{ background: `url(${social.icon}) no-repeat center / 100%` }}
              >
              </li>
            ))}
          </ul>
        </section>
      </ContainerLayout>
    </footer>
  )
}

export default React.memo(Footer)

const MENU = [
  { label: 'Terms and Conditions', href: '/' },
  { label: 'Privacy Policy', href: '/' },
]

const SOCIALS = [
  { label: 'Discord', href: '/', icon: './images/footer/discord.png' },
  { label: 'Twitter', href: '/', icon: './images/footer/twitter.png' },
  { label: 'Gate', href: '/', icon: './images/footer/gate.png' },
  { label: 'Duck', href: '/', icon: './images/footer/duck.png' },
]