import React from "react"
import styles from "./index.module.css"
import Layout from "../components/Layout"
import Header from "../components/Header"
import ContentBox from "../components/ContentBox"

export default function Home() {
  return (
    <Layout>
      <Header text="Vaughan Stedman" />
      <main className={styles.container}>
        <ContentBox>
          <p>Software Engineer</p>
          <p>Melbourne, Australia</p>
        </ContentBox>

        <ul className={styles.list}>
          <li>
            <a className="plus-tag" href="/photos">
              Photography
            </a>
          </li>
          <li>
            <a
              className="plus-tag"
              href="https://www.backyardbiodiversity.com.au"
            >
              Backyard Biodiversity
            </a>
          </li>
        </ul>
      </main>
    </Layout>
  )
}
