import React from 'react'
import { useState, useEffect } from 'react'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import styles from '../../styles/Home.module.css'
import { getAll } from '../../api/KazaAPI'
import BackgroungDesktop from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash_descktop.jpg'
import BackgroungMobile from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash_mobile.jpg'

const imagesBanner = {
  desktop: {
    srcset: BackgroungDesktop,
    media: '(min-width: 769px)',
  },
  mobile: {
    srcset: BackgroungMobile,
    media: '(max-width: 768px)',
  },
}

const titleBanner = 'Chez vous, partout et ailleurs'

function Home({ updateNavLink }) {
  updateNavLink('Home')

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
        <Section images={imagesBanner} title={titleBanner} />
      </div>

      {announcements !== null ? (
        <Gallery announcements={announcements} />
      ) : null}
    </div>
  )
}

export default Home
