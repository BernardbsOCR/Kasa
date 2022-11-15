import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Error404.module.css'

function Error404({ updateNavLink }) {
  updateNavLink('Error404')

  return (
    <section className={styles.error404}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className={styles.link}>
        Retourner sur la page d’accueil
      </Link>
    </section>
  )
}

export default Error404
