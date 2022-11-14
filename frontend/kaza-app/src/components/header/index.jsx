import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Header.module.css'
import Logo from '../../assets/logo_kaza.svg'

function Header({ navLink }) {
  return (
    <header className={styles}>
      <picture>
        <img src={Logo} alt="kaza-logo" />
      </picture>
      <nav>
        <Link
          to="/"
          className={styles.navLink}
          style={getTextDecoration(navLink, 'Home')}
        >
          Accueil
        </Link>
        <Link
          to="/a-propos"
          className={styles.navLink}
          style={getTextDecoration(navLink, 'APropos')}
        >
          A Propos
        </Link>
      </nav>
    </header>
  )
}

function getTextDecoration(navLink, linkName) {
  const underline = navLink === linkName ? 'underline' : 'none'
  return {
    textDecoration: `${underline}`,
  }
}

export default Header
