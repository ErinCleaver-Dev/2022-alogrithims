import Image from 'next/image'
import styles from '../styles/Notes.module.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
export default function Home() {
  return (
    <div>
      <Header
        title={"Notes"}
      />

      <main className={styles.main}>
        <Sidebar sidebarFormat={styles.sidebar}/>
        Study of algorithms and data structures

      </main>
    </div>
  )
}
