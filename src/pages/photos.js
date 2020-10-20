import React from "react"
import styles from "./index.module.css"
import Layout from "../components/Layout"
import Header from "../components/Header"

export default function Home() {
  return (
    <Layout>
      <Header text="Photos" />
      <main className={styles.container}></main>
    </Layout>
  )
}
