import React from 'react'
import styles from './Title.module.css'

function AnnouncementTitle({ title, location }) {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
      <p>{location}</p>
    </div>
  )
}

export default AnnouncementTitle
