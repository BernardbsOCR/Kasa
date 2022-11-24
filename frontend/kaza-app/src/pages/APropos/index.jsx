import React from 'react'
import Banner from '../../components/BannerAPropos'
import Dropdown from '../../components/Dropdown'
import { linkText, aProposText } from '../../utils/KasaText'
import styles from './APropos.module.css'
import stylesDropdown from './DropdownAPropos.module.css'

function APropos({ updateActiveLink }) {
  updateActiveLink(linkText.about)

  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <Banner />
      </div>
      <section className={styles.section}>
        {aProposText.map((data) => (
          <Dropdown
            key={data.title}
            title={data.title}
            description={data.description}
            styles={stylesDropdown}
          />
        ))}
      </section>
    </main>
  )
}

export default APropos
