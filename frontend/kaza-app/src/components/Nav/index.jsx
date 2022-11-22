import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Nav.module.css'
import { linkText } from '../../utils/KasaText'

function Nav({ activeLink }) {
  const links = [
    { to: '/', linkName: linkText.home },
    { to: '/a-propos', linkName: linkText.about },
  ]

  return (
    <nav>
      {links.map((link) => (
        <Link
          to={link.to}
          className={styles.navLink}
          style={getTextDecoration(activeLink, link.linkName)}
        >
          {link.linkName}
        </Link>
      ))}
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
