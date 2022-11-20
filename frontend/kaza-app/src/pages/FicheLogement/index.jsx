import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getOne } from '../../api/KazaAPI'
import styles from '../../styles/FicheLogement.module.css'
import stylesDropdown from '../../styles/FicheLogementDropdown.module.css'
import { ficheLogementText } from '../../datas/text/KasaText'
import Slideshow from '../../components/Carrousel'
import Title from '../../components/Title'
import Tags from '../../components/Tags'
import Host from '../../components/Host'
import Rate from '../../components/Rate'
import Dropdown from '../../components/Dropdown'

function FicheLogement({ updateNavLink }) {
  updateNavLink('FicheLogement')

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
  }, [id, navigate])

  return announcement !== null ? (
    <div className={styles.announcement}>
      <Slideshow announcement={announcement} />

      <div className={styles.details}>
        <div className={styles.detailsTitle}>
          <Title title={announcement.title} location={announcement.location} />
          <Tags tags={announcement.tags} />
        </div>
        <div className={styles.detailHost}>
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
          styles={stylesDropdown}
          open={true}
        />
        <Dropdown
          title={ficheLogementText.equipments}
          description={announcement.equipments.map((e) => (
            <p style={{ padding: 0 }}>{e}</p>
          ))}
          styles={stylesDropdown}
          open={true}
        />
      </div>
    </div>
  ) : null
}

export default FicheLogement
