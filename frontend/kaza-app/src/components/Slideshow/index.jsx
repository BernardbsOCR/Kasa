import React from 'react'
import { useState } from 'react'
import styles from '../../styles/Slideshow.module.css'
import arrowBack from '../../assets/arrow-Back.svg'
import arrowForward from '../../assets/arrow-Forward.svg'

function Slideshow({ announcement }) {
  const [position, updatePosition] = useState(0)
  const pictures = announcement.pictures
  const image = pictures[position]

  function Forward(e) {
    updatePosition(position < pictures.length ? position + 1 : 0)
  }

  function Back(e) {
    updatePosition(position > 0 ? position - 1 : pictures.length - 1)
  }

  return (
    <section className={styles.slideshow}>
      <picture>
        <img
          src={image}
          alt="backgroun_announcement"
          className={styles.background}
        />
      </picture>
      <div className={styles.arrow}>
        <img
          className={styles.btn}
          src={arrowBack}
          alt="icon_Forward"
          onClick={Forward}
          id="Forward"
        />
        <img
          className={styles.btn}
          src={arrowForward}
          alt="icon_Back"
          onClick={Back}
          id="Back"
        />
      </div>
    </section>
  )
}

export default Slideshow
