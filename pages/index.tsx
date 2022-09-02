import Banner from '../Components/Banner/Banner'
import Category from '../Components/Category/Category'
import Menu from '../Components/Menu/Menu'
import Search from '../Components/Search/Search'
import TopBnner from '../Components/TopBanner/TopBnner'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <TopBnner></TopBnner>
      <Search></Search>
      <Menu></Menu>
      <Banner></Banner>
      <Category></Category>
    </div>
  )
}
