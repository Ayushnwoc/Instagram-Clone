import styles from '.././page.module.css'
import Header from '@/app/components/Header/Header'
import Profile from '@/app/components/Profile/page'
import Footer from './Footer/Footer'

export default function Hometo() {
  return (
    <div className={styles.heightscreen}>
      <Header />
      <div >
        <Profile />
      </div>
      <Footer />
    </div>
  )
}