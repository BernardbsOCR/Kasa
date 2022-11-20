import React from 'react'
import styles from '../../styles/Rate.module.css'
import starRed from '../../assets/star_rate-red.svg'
import starGrey from '../../assets/star_rate-grey.svg'

function Rate({ rating, max }) {
  const count = parseInt(rating)
  const stars = []
  for (let i = 0; i < max; i++) {
    stars.push(i < count ? 'red' : 'grey')
  }

  return (
    <div className={styles.rate}>
      {stars.map((rate) => (
        <img src={rate === 'red' ? starRed : starGrey} alt="star" />
      ))}
    </div>
  )
}

export default Rate
