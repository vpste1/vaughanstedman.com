import React from "react"
import styles from "./index.module.css"
import Layout from "../components/Layout"
import Header from "../components/Header"
import ContentBox from "../components/ContentBox"

export default function Home() {
  return (
    <Layout>
      <Header />
      <main className={styles.container}>
        <ContentBox>
          <p>Software Engineer</p>
          <p>Melbourne, Australia</p>
        </ContentBox>

        <ul className={styles.list}>
          <li>
            <a className="plus-tag" href="www.google.com">
              Photography
            </a>
          </li>
          <li>
            <a className="plus-tag" href="www.google.com">
              Backyard Biodiversity
            </a>
          </li>
        </ul>
      </main>
    </Layout>
  )
}
