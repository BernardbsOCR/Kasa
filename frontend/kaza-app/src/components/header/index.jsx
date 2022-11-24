import React from 'react'
import styles from './Header.module.css'
import Logo from '../../assets/logo_kaza.svg'
import Nav from '../../components/Nav'

function Header({ activeLink }) {
  return (
    <header className={styles.header}>
      <picture>
        <img src={Logo} alt="kaza-logo" />
      </picture>
      <nav>
        <Nav activeLink={activeLink} />
      </nav>
    </header>
  )
}

export default Header
