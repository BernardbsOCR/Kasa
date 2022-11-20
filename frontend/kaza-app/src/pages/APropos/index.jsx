import React from 'react'
import Section2 from '../../components/Section'
import styles from '../../styles/APropos.module.css'
import stylesBanner from '../../styles/AProposSection.module.css'
import Dropdown from '../../components/Dropdown'
import aProposText from '../../datas/text/AProposText'
import BackgroungDesktop from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash_desktop.jpg'
import BackgroungMobile from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash_mobile.jpg'

const imagesBanner = {
  desktop: {
    srcset: BackgroungDesktop,
    media: '(min-width: 769px)',
  },
  mobile: {
    srcset: BackgroungMobile,
    media: '(max-width: 768px)',
  },
}

function APropos({ updateNavLink }) {
  updateNavLink('APropos')

  return (
    <div className={styles.aPropos}>
      <div className={styles.banner}>
        <Section2 images={imagesBanner} styles={stylesBanner} />
      </div>
      <section className={styles.section}>
        {aProposText.map((data) => (
          <Dropdown title={data.title} description={data.description} />
        ))}
      </section>
    </div>
  )
}

export default APropos
