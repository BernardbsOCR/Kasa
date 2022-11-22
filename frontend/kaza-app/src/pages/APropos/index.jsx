import React from 'react'
import Banner from '../../components/Banner'
import styles from '../../styles/APropos.module.css'
import bannerStyles from '../../styles/AProposBanner.module.css'
import Collapse from '../../components/Collapse'
import aProposText from '../../utils/text/AProposText'
import { linkText } from '../../utils/text/KasaText'
import BackgroungDesktop from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash_desktop.jpg'
import BackgroungMobile from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash_mobile.jpg'

const bannerSources = [
  {
    srcset: BackgroungDesktop,
    media: '(min-width: 769px)',
  },
  {
    srcset: BackgroungMobile,
    media: '(max-width: 768px)',
  },
]

function APropos({ updateActiveLink }) {
  updateActiveLink(linkText.about)

  return (
    <div className={styles.aPropos}>
      <div className={styles.banner}>
        <Banner sources={bannerSources} styles={bannerStyles} />
      </div>
      <section className={styles.section}>
        {aProposText.map((data, index) => (
          <Collapse
            key={data.title}
            title={data.title}
            description={data.description}
          />
        ))}
      </section>
    </div>
  )
}

export default APropos
