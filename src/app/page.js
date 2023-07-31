import Feed from '@/app/components/Feed/page'
import styles from './page.module.css'
import Header from '@/app/components/Header/Header'
import Profile from '@/app/components/Profile/page'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <div className={styles.heightscreen}>
       <Header />
      <div >
       <Feed/>
      </div>
      <Footer />
    </div>
  )
}
