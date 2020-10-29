import React from "react"
import styles from "./ImageGallery.module.css"

import Image from "./Image"

export default function ImageGallery({ urlList }) {
  return (
    <div className={styles.container}>
      {urlList.map((url, i) => (
        <Image style={styles.image} key={url} src={url} alt={i} />
      ))}
    </div>
  )
}
