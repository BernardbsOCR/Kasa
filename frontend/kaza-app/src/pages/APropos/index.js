import React from 'react'
import Banner from '../../components/Banner'
import styles from '../../styles/APropos.module.css'
import Collapse from '../../components/Collapse'
import AProposText from '../../datas/text/AProposText'
import stylesBanner from '../../styles/BannerAPropos.module.css'

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
      <Banner
        key={'AProposBanner'}
        images={imagesBanner}
        styles={stylesBanner}
      />
      <section>
        {AProposText.map((data, index) => (
          <Collapse title={data.title} description={data.description} />
        ))}
      </section>
    </div>
  )
}

export default APropos
