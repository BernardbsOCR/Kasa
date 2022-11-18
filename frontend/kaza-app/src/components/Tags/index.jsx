import React from 'react'
import styles from '../../styles/Tags.module.css'

function AnnouncementTags({ tags }) {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <p>{tag}</p>
      ))}
    </div>
  )
}

export default AnnouncementTags
