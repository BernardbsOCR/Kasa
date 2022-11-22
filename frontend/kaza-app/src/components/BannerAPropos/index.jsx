import React from 'react'
import Banner from '../Banner'
import styles from '../../styles/BannerAPropos.module.css'
import BackgroungDesktop from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash_desktop.jpg'
import BackgroungMobile from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash_mobile.jpg'

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

function BannerAPropos() {
  return <Banner sources={bannerSources} styles={styles} />
}

export default BannerAPropos
