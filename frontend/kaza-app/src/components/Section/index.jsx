import React from 'react'
import stylesDefault from '../../styles/Section.module.css'

function Section({ images, title = '', styles = stylesDefault }) {
  return (
    <div className={styles.banner}>
      <picture>
        <source srcset={images.mobile.srcset} media={images.mobile.media} />
        <source srcset={images.desktop.srcset} media={images.desktop.media} />
        <img src={images.desktop.srcset} alt="Section-background" />
      </picture>
      <div className={styles.background}></div>

      {title !== '' ? <p className={styles.title}>{title}</p> : null}
    </div>
  )
}

export default Section
