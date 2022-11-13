import React from 'react'
import styles from '../../styles/RootLayout.module.css'

function RootLayout({ children }) {
  return <div className={styles.rootLayout}>{children}</div>
}

export default RootLayout
