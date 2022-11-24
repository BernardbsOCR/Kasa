import React from 'react'
import styles from './Footer.module.css'
import Logo from '../../assets/logo_kaza_white.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
      <picture>
        <img src={Logo} alt="kaza-logo" />
      </picture>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
