import React from 'react'
import styles from '../../styles/BannerHome.module.css'

function Banner({ images, titles = '' }) {
  return (
    <div className={styles.banner}>
      <picture>
        <source srcset={images.mobile.srcset} media={images.mobile.media} />
        <source srcset={images.desktop.srcset} media={images.desktop.media} />
        <img src={images.desktop.srcset} alt="Banner-background" />
      </picture>
      <div className={styles.background}></div>
      {titles !== '' ? (
        <p className={styles.bannerTitleDesktop}>{titles.desktop}</p>
      ) : null}
      {titles !== '' ? (
        <p className={styles.bannerTitleMobile}>{titles.mobile}</p>
      ) : null}
    </div>
  )
}

export default Banner
