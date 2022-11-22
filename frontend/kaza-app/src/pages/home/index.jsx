import React from 'react'
import { useState, useEffect } from 'react'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import styles from '../../styles/Home.module.css'
import { homeText, linkText } from '../../utils/text/KasaText'
import { getAll } from '../../api/KazaAPI'
import BackgroungDesktop from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash_descktop.jpg'
import BackgroungMobile from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash_mobile.jpg'

const bannerSources = [
  {
    srcset: BackgroungDesktop,
    media: '(min-width: 769px)',
  },
  {
    srcset: BackgroungMobile,
    media: '(max-width: 768px)',
  },
]

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
    <div className={styles.home}>
      <div className={styles.banner}>
        <Banner sources={bannerSources} title={bannerTitle} />
      </div>

      {announcements !== null ? (
        <Gallery announcements={announcements} />
      ) : null}
    </div>
  )
}

export default Home
