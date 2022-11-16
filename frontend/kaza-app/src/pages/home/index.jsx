import React from 'react'
import { useState, useEffect } from 'react'
import Banner from '../../components/BannerHome'
import Gallery from '../../components/Gallery'
import styles from '../../styles/Home.module.css'
import kazaApi from '../../api/kazaApi'

function Home({ updateNavLink }) {
  updateNavLink('Home')

  const [announcements, updateAnnouncement] = useState([])

  useEffect(() => {
    getAnnouncements()
  }, [])

  function getAnnouncements() {
    Promise.resolve(kazaApi.getAll())
      .then((data) => {
        updateAnnouncement(data)
      })
      .catch((error) => {
        console.log({ error })
      })
  }

  return (
    <div className={styles.home}>
      <Banner />
      <Gallery announcements={announcements} />
    </div>
  )
}

export default Home
