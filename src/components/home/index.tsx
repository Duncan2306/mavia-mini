import React, { lazy } from 'react'

import styles from './home.module.scss'

const Header = lazy(() => import('./Header'))
const BackedBy = lazy(() => import('./BackedBy'))
const Crypto = lazy(() => import('./Crypto'))
const Section1 = lazy(() => import('./Section1'))
const Section2 = lazy(() => import('./Section2'))
const Section3 = lazy(() => import('./Section3'))
const Section4 = lazy(() => import('./Section4'))
const Section5 = lazy(() => import('./Section5'))
const Section6 = lazy(() => import('./Section6'))
const Welcome = lazy(() => import('./Welcome'))
const Faq = lazy(() => import('./Faq'))
const Contact = lazy(() => import('./Contact'))

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <BackedBy />
      <Crypto />
      <div id="features" className={styles.features}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
      <Welcome />
      <Faq />
      <Contact />
    </div>
  )
}

export default React.memo(Home)