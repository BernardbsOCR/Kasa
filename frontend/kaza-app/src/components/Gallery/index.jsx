import React from 'react'
import Thumb from '../Thumb'
import styles from './Gallery.module.css'

function Gallery({ announcements }) {
  return (
    <div className={styles.gallery}>
      {announcements.map((content) => (
        <Thumb
          key={content.id}
          id={content.id}
          title={content.title}
          cover={content.cover}
        />
      ))}
    </div>
  )
}

export default Gallery
