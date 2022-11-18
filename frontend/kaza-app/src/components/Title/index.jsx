import React from 'react'
import styles from '../../styles/Title.module.css'

function AnnouncementTitle({ title, location }) {
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  )
}

export default AnnouncementTitle
