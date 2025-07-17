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
        <SectionBox direction="right">
          <Section1 />
        </SectionBox>
        <SectionBox direction="left">
          <Section2 />
        </SectionBox>
        <SectionBox direction="right">
          <Section3 />
        </SectionBox>
        <SectionBox direction="left">
          <Section4 />
        </SectionBox>
        <SectionBox direction="right">
          <Section5 />
        </SectionBox>
        <SectionBox direction="left">
          <Section6 />
        </SectionBox>
      </div>
      <Welcome />
      <Faq />
      <Contact />
    </div>
  )
}

export default React.memo(Home)

const SectionBox = ({ children }: { children: React.ReactNode, direction: 'left' | 'right' }) => {
  return (
    <div
      className={styles.features_item}
      // data-aos={`fade-up-right`}
      // data-aos-duration="500"
      // data-aos-once="true"
    >
      {children}
    </div>
  )
}