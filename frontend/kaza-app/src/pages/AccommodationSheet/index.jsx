import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOne } from '../../api/KazaAPI'
import Error404 from '../Error404'
import Slideshow from '../../components/Slideshow'
import styles from '../../styles/AccommodationSheet.module.css'

function FicheLogement({ updateNavLink }) {
  updateNavLink('FicheLogement')

  const { id } = useParams()

  const [announcement, updateAnnouncement] = useState({})
  const isValidId = true

  useEffect(
    (isValidId) => {
      Promise.resolve(getOne(id))
        .then((data) => {
          if (data) {
            updateAnnouncement(data)
          } else {
            isValidId = false
          }
        })
        .catch((error) => {
          console.log({ error })
          isValidId = false
        })
    },
    [id]
  )

  return announcement.pictures && isValidId ? (
    <div className={styles.AccommodationSheetLayout}>
      <Slideshow announcement={announcement} />
    </div>
  ) : (
    <Error404 updateNavLink={updateNavLink} />
  )
}

export default FicheLogement
