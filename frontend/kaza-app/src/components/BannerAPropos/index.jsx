import React from 'react'
import styles from '../../styles/BannerAPropos.module.css'
import BackgroungDesktop from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash_desktop.jpg'
import BackgroungMobile from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash_mobile.jpg'

function BannerAPropos() {
  return (
    <div className={styles.banner}>
      <picture>
        <source srcset={BackgroungMobile} media="(max-width: 768px)" />
        <source srcset={BackgroungDesktop} media="(min-width: 769px)" />
        <img src={BackgroungDesktop} alt="Banner-background" />
      </picture>
      <div className={styles.background}></div>
    </div>
  )
}

export default BannerAPropos
