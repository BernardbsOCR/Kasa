import React from 'react'
import stylesDefault from './Banner.module.css'

function Banner({ sources, title = '', styles = stylesDefault }) {
  return (
    <div className={styles.banner}>
      <picture>
        {sources.map((src, index) => (
          <source
            key={`Banner-media-${index}`}
            srcset={src.srcset}
            media={src.media}
          />
        ))}
        <img src={sources[0].srcset} alt="Banner-background" />
      </picture>
      <div className={styles.background}></div>

      {title !== '' && <p className={styles.title}>{title}</p>}
    </div>
  )
}

export default Banner
