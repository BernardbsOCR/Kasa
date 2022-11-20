import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Nav.module.css'
import navText from '../../datas/text/AProposText'

function Nav({ currentLink }) {
  return (
    <nav>
      <Link
        to="/"
        className={styles.navLink}
        style={getTextDecoration(currentLink, 'Home')}
      >
        {navText.home}
      </Link>
      <Link
        to="/a-propos"
        className={styles.navLink}
        style={getTextDecoration(currentLink, 'APropos')}
      >
        {navText.about}
      </Link>
    </nav>
  )
}

function getTextDecoration(currentLink, linkName) {
  const underline = currentLink === linkName ? 'underline' : 'none'
  return {
    textDecoration: `${underline}`,
  }
}

export default Nav
