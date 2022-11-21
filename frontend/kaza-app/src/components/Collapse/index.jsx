import React from 'react'
import { useState } from 'react'
import defaultStyles from '../../styles/Collapse.module.css'
import dropdownClose from '../../assets/dropdown-close.svg'
import dropdownOpen from '../../assets/dropdown-open.svg'

function Collapse({
  title,
  description,
  styles = defaultStyles,
  open = false,
}) {
  const [isOpen, updateIsOpen] = useState(open)

  return (
    <div className={styles.collapse}>
      <div className={styles.titleLayout} onClick={() => updateIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <img src={isOpen ? dropdownOpen : dropdownClose} alt="dropdown.svg" />
      </div>
      {isOpen && <p className={styles.content}>{description}</p>}
    </div>
  )
}

export default Collapse