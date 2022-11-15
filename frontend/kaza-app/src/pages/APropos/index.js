import React from 'react'
import Banner from '../../components/BannerAPropos'
import styles from '../../styles/APropos.module.css'
import Collapse from '../../components/Collapse'
import AProposText from '../../datas/text/AProposText'

function APropos({ updateNavLink }) {
  updateNavLink('APropos')

  return (
    <div className={styles.aPropos}>
      <Banner />
      <section>
        {AProposText.map((data, index) => (
          <Collapse title={data.title} description={data.description} />
        ))}
      </section>
    </div>
  )
}

export default APropos
