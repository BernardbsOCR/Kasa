import React from 'react'
import Banner from '../../components/BannerHome'
import styles from '../../styles/Home.module.css'

function Home({ updateNavLink }) {
  updateNavLink('Home')

  return (
    <div className={styles.home}>
      <div>
        <Banner />
      </div>
    </div>
  )
}

export default Home
