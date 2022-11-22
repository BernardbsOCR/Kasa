import React from 'react'
import { Link } from 'react-router-dom'
import { error404Text } from '../../utils/text/KasaText'
import styles from '../../styles/Error404.module.css'

function Error404({ updateActiveLink }) {
  updateActiveLink('Error404')

  return (
    <div className={styles.error404}>
      <h1>404</h1>
      <p>{error404Text.title}</p>
      <Link to="/" className={styles.link}>
        {error404Text.link}
      </Link>
    </div>
  )
}

export default Error404
