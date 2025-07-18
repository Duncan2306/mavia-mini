import React, { lazy } from 'react'

import styles from './home.module.scss'

const Header = lazy(() => import('./Header'))
const BackedBy = lazy(() => import('./BackedBy'))
const Crypto = lazy(() => import('./Crypto'))
const Features = lazy(() => import('./Features'))
const Welcome = lazy(() => import('./Welcome'))
const Faq = lazy(() => import('./Faq'))
const Contact = lazy(() => import('./Contact'))

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <BackedBy />
      <Crypto />
      <Features />
      <Welcome />
      <Faq />
      <Contact />
    </div>
  )
}

export default React.memo(Home)
