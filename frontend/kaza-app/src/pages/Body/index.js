import React from 'react'
import styles from '../../styles/Body.module.css'

function Body({ children }) {
  return <main className={styles.bodyLayout}>{children}</main>
}

export default Body
