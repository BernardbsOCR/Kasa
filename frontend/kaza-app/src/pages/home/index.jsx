import React from 'react'
import { useState, useEffect } from 'react'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import styles from '../../styles/Home.module.css'
import { getAll } from '../../api/KazaAPI'
import stylesBanner from '../../styles/Banner.module.css'

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

const titlesBanner = {
  desktop: 'Chez vous, partout et ailleurs',
  mobile: `Chez vous, partout et ailleurs`,
}

function Home({ updateNavLink }) {
  updateNavLink('Home')

  const [announcements, updateAnnouncement] = useState([])

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
      <Banner
        key={'HomeBanner'}
        images={imagesBanner}
        titles={titlesBanner}
        styles={stylesBanner}
      />
      <Gallery announcements={announcements} />
    </div>
  )
}

export default Home
