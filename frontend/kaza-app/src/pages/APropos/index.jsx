import React from 'react'
import Banner from '../../components/Banner'
import styles from '../../styles/APropos.module.css'
import Collapse from '../../components/Collapse'
import AProposText from '../../datas/text/AProposText'
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
        <Banner images={imagesBanner} />
      </div>
      <section className={styles.section}>
        {AProposText.map((data) => (
          <Collapse title={data.title} description={data.description} />
        ))}
      </section>
    </div>
  )
}

export default APropos