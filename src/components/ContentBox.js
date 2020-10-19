import React from "react"
import styles from "./ContentBox.module.css"

export default function ContentBox({ children }) {
  return <div className={styles.container}>{children}</div>
}
