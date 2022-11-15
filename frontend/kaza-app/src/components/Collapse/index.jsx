import React from 'react'
import { useState } from 'react'
import styles from '../../styles/Collapse.module.css'
import dropdownClose from '../../assets/dropdown-close.svg'
import dropdownOpen from '../../assets/dropdown-open.svg'

function Collapse({ title, description }) {
  const [isOpen, updateIsOpen] = useState(title === 'Service' ? true : false)

  return (
    <div className={styles.collapse}>
      <div className={styles.titleLayout} onClick={() => updateIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <img
          src={isOpen ? dropdownOpen : dropdownClose}
          alt="dropdown-close.svg"
        />
      </div>
      {isOpen && <p>{description}</p>}
    </div>
  )
}

export default Collapse
