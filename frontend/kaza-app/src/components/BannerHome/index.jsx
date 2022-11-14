import React from 'react'
import styles from '../../styles/BannerHome.module.css'
import BackgroungDesktop from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash_descktop.jpg'
import BackgroungMobile from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash_mobile.jpg'

function BannerHome() {
  return (
    <div className={styles.banner}>
      <picture>
        <source srcset={BackgroungMobile} media="(max-width: 768px)" />
        <source srcset={BackgroungDesktop} media="(min-width: 769px)" />
        <img src={BackgroungDesktop} alt="Banner-background" />
      </picture>
      <div className={styles.background}></div>
      <p className={styles.bannerTitleDesktop}>
        Chez vous, partout et ailleurs
      </p>
      <p className={styles.bannerTitleMobile}>
        Chez vous,
        <br /> partout et ailleurs
      </p>
    </div>
  )
}

export default BannerHome
