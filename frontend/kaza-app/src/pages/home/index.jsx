import React from 'react'
import { useState, useEffect } from 'react'
import Banner from '../../components/BannerHome'
import Gallery from '../../components/Gallery'
import styles from './Home.module.css'
import { homeText, linkText } from '../../utils/KasaText'
import { getAll } from '../../api/KazaAPI'

const bannerTitle = homeText.sectionTitle

function Home({ updateActiveLink }) {
  updateActiveLink(linkText.home)

  const [announcements, updateAnnouncement] = useState(null)

  useEffect(() => {
    Promise.resolve(getAll())
      .then((data) => {
        updateAnnouncement(data)
      })
      .catch((error) => {
        console.log({ error })
      })
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <Banner title={bannerTitle} />
      </div>

      {announcements !== null ? (
        <Gallery announcements={announcements} />
      ) : null}
    </main>
  )
}

export default Home
