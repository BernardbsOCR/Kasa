import React from 'react'
import styles from '../../styles/Thumb.module.css'

function Thumb({ id, title, cover }) {
  return (
    <div className={styles.thumb}>
      <img src={cover} alt="" />
      <div className={styles.rectangle} />
      <div className={styles.titleLayout}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  )
}

export default Thumb
