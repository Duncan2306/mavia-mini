import { lazy } from 'react'

import styles from './App.module.scss'

const Navigation = lazy(() => import('./components/navigation'))
const Footer = lazy(() => import('./components/footer'))
const Home = lazy(() => import('./components/home'))

function App() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Home />
      <Footer />
    </div>
  )
}

export default App
