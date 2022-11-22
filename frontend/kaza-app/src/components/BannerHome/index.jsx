import React from 'react'
import Banner from '../Banner'
import BackgroungDesktop from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash_descktop.jpg'
import BackgroungMobile from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash_mobile.jpg'

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

function BannerHome({ title }) {
  return <Banner sources={bannerSources} title={title} />
}

export default BannerHome
