import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getOne } from '../../api/KazaAPI'
import styles from '../../styles/FicheLogement.module.css'
import { ficheLogementText, linkText } from '../../utils/KasaText'
import Carousel from '../../components/Carousel'
import Title from '../../components/Title'
import Tags from '../../components/Tags'
import Host from '../../components/Host'
import Rate from '../../components/Rate'
import Dropdown from '../../components/Dropdown'

function FicheLogement({ updateActiveLink }) {
  updateActiveLink(linkText.announcement)

  const { id } = useParams()

  const [announcement, updateAnnouncement] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    Promise.resolve(getOne(id))
      .then((data) => {
        if (data) {
          updateAnnouncement(data)
        } else {
          navigate('/404')
        }
      })
      .catch((error) => {
        console.log({ error })
      })
  }, [navigate, id])

  return announcement !== null ? (
    <main className={styles.main}>
      <Carousel announcement={announcement} />

      <div className={styles.announcement}>
        <div className={styles.title}>
          <Title title={announcement.title} location={announcement.location} />
          <Tags tags={announcement.tags} />
        </div>
        <div className={styles.host}>
          <Host
            name={announcement.host.name}
            picture={announcement.host.picture}
          />
          <Rate rating={announcement.rating} max={5} />
        </div>
      </div>
      <div className={styles.content}>
        <Dropdown
          title={ficheLogementText.description}
          description={announcement.description}
          open={true}
        />
        <Dropdown
          title={ficheLogementText.equipments}
          description={announcement.equipments}
          open={true}
        />
      </div>
    </main>
  ) : null
}

export default FicheLogement
