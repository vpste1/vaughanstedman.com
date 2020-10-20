import React from "react"
import styles from "./NavBar.module.css"

export default function NavBar({ activeIndex, selectIndex, options }) {
  return (
    <div className={styles.container}>
      {options.map((option, i) => (
        <button
          key={option}
          className={`${styles.navButton} ${
            activeIndex === i ? "active" : "plus-tag"
          }`}
          onClick={() => selectIndex(i)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
