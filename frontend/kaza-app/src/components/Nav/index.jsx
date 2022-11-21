import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Nav.module.css'
import { navText } from '../../datas/text/KasaText'

function Nav({ activeLink }) {
  return (
    <nav>
      <Link
        to="/"
        className={styles.navLink}
        style={getTextDecoration(activeLink, 'Home')}
      >
        {navText.home}
      </Link>
      <Link
        to="/a-propos"
        className={styles.navLink}
        style={getTextDecoration(activeLink, 'APropos')}
      >
        {navText.about}
      </Link>
    </nav>
  )
}

function getTextDecoration(activeLink, linkName) {
  const underline = activeLink === linkName ? 'underline' : 'none'
  return {
    textDecoration: `${underline}`,
  }
}

export default Nav
