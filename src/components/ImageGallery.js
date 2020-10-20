import React from "react"
import styles from "./ImageGallery.module.css"

export default function ImageGallery({ urlList }) {
  return (
    <div className={styles.container}>
      {urlList.map((url, i) => (
        <img className={styles.image} key={url} src={url} alt={i} />
      ))}
    </div>
  )
}
