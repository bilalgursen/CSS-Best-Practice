import styles from './page.module.css'
import Header from './components/Head/header'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
    </main>
  )
}
