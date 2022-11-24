import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Thumb.module.css'

function Thumb({ id, title, cover }) {
  const link = `/fiche-logement/${id}`

  return (
    <Link to={link}>
      <article className={styles.thumb}>
        <img src={cover} alt={title} />
        <div className={styles.rectangle} />
        <div className={styles.titleLayout}>
          <p className={styles.title}>{title}</p>
        </div>
      </article>
    </Link>
  )
}

export default Thumb
