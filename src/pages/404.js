import React from "react"
import { Helmet } from "react-helmet"
import styles from "./404.module.css"

export default function FourOhFour() {
  return (
    <>
      <Helmet>
        <title>Uh oh</title>
      </Helmet>
      <main className={styles.container}>404</main>
    </>
  )
}
