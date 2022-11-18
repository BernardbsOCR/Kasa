import React from 'react'
import styles from '../../styles/Host.module.css'
import background from '../../assets/host-background.svg'

function AnnouncementHost({ name, picture }) {
  const userName = name.includes(' ') ? name.split(' ') : [name]

  return (
    <div className={styles.host}>
      <div className={styles.hostName}>
        {userName.map((data) => (
          <p>{data}</p>
        ))}
      </div>
      <img
        className={styles.hostPicture}
        src={picture ? picture : background}
        alt="host"
      />
    </div>
  )
}

export default AnnouncementHost
