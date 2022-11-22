import React from 'react'
import { Link } from 'react-router-dom'
import { error404Text, linkText } from '../../utils/KasaText'
import styles from '../../styles/Error404.module.css'

function Error404({ updateActiveLink }) {
  updateActiveLink(linkText.error404)

  return (
    <main className={styles.main}>
      <h1>404</h1>
      <p>{error404Text.title}</p>
      <Link to="/" className={styles.link}>
        {error404Text.link}
      </Link>
    </main>
  )
}

export default Error404
