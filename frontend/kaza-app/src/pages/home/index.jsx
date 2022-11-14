import React from 'react'
import { useState, useEffect } from 'react'
import Banner from '../../components/BannerHome'
import Gallery from '../../components/Gallery'
import styles from '../../styles/Home.module.css'
import annonces from '../../datas/annonces.json'

function Home({ updateNavLink }) {
  updateNavLink('Home')

  const [announcements, updateAnnouncement] = useState([])

  useEffect(() => {
    getAnnouncements({ updateAnnouncement })
  }, [])

  return (
    <div className={styles.home}>
      <Banner />
      <Gallery announcements={announcements} />
    </div>
  )
}

async function getAnnouncements({ updateAnnouncement }) {
  const announcements = await loadData()

  updateAnnouncement(announcements)
}

async function loadData() {
  const jsonDatas = JSON.stringify(annonces)
  const data = JSON.parse(jsonDatas)

  return data
}

export default Home
