import Search from '../Components/Search/Search'
import TopBnner from '../Components/TopBanner/TopBnner'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <TopBnner></TopBnner>
      <Search></Search>
    </div>
  )
}
