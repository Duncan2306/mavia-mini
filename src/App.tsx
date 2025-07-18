import { lazy, useEffect } from 'react'

import styles from './App.module.scss'

const Navigation = lazy(() => import('./components/navigation'))
const Footer = lazy(() => import('./components/footer'))
const Home = lazy(() => import('./components/home'))

export const backToTopId = 'backToTop'

function App() {
  useEffect(() => {
    const backToTop = document.getElementById(backToTopId)

    if (!backToTop) return

    const handleScroll = () => {
      if (window.scrollY > 200) {
        backToTop.style.display = 'block'
      } else {
        backToTop.style.display = 'none'
      }
    }
  
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={styles.container}>
      <Navigation />
      <Home />
      <Footer />
      <img
        id={backToTopId}
        src="./images/top.png" alt="top" className={styles.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </div>
  )
}

export default App
