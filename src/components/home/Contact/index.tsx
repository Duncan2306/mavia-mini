import React, { useMemo } from 'react'

import ContainerLayout from '../../../layout/container'
import useWindowSize from '../../../hooks/useWindowSize'

import styles from './Contact.module.scss'

const Contact = () => {
  const { isMobile } = useWindowSize()

  const bg = useMemo(() => {
    if (isMobile) return './images/home/contact/contact-mobile.png'
    return './images/home/contact/contact.png'
  }, [isMobile])

  return (
    <div
      className={styles.container}
      style={{ background: `url(${bg}) no-repeat center / 100%` }}
    >
      <ContainerLayout className={styles.content}>
        <h2 className={styles.title}>Join Our Disscord Server</h2>
        
        {isMobile ? (
          <p className={styles.description}>
            Be part of the chaos, cuteness, and crypto strategy!<br />
            Join Now and connect with fellow players, get early<br/>
            updates, sneak peeks, and exclusive rewards!<br/>
            Mini Mavia — where the chibi warriors never sleep!
          </p>
        ) : (
          <p className={styles.description}>
            Be part of the chaos, cuteness, and crypto strategy!<br />
            Join Now and connect with fellow players, get early updates, <br/> sneak peeks, and exclusive rewards!
          </p>
        )}

        <img src={'./images/home/contact/join.png'} alt={'join'} className={styles.joinBtn} />
      </ContainerLayout>
    </div>
  )
}

export default React.memo(Contact)