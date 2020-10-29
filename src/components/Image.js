import React, { useState } from "react"
import styles from "./Image.module.css"

export default function Image({ src, alt, style }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <img
      className={imageLoaded ? style : styles.hideImage}
      key={src}
      src={src}
      alt={alt}
      onLoad={() => setImageLoaded(true)}
    />
  )
}
