import React from 'react'
import Banner from '../../components/BannerAPropos'
import styles from '../../styles/APropos.module.css'

function APropos({ updateNavLink }) {
  updateNavLink('APropos')

  return (
    <div>
      <Banner />A Propos
    </div>
  )
}

export default APropos
