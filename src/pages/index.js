import React from "react"
import { Helmet } from "react-helmet"
import styles from "./index.module.css"
import Header from "../components/Header"
import ContentBox from "../components/ContentBox"

export default function Home() {
  const links = [
    { text: "Photography", ref: "/photos" },
    { text: "Github", ref: "https://github.com/vpste1" },
    {
      text: "Backyard Biodiversity",
      ref: "https://www.backyardbiodiversity.com.au",
    },
  ]
  return (
    <>
      <Helmet>
        <title>Vaughan Stedman</title>
      </Helmet>

      <Header text="Vaughan Stedman" />
      <main>
        <div className={styles.container}>
          <ContentBox>
            <p>Software Engineer</p>
            <p>Melbourne, Australia</p>
          </ContentBox>

          <ul className={styles.list}>
            {links.map(link => (
              <li key={link.ref}>
                <a className="plus-tag" href={link.ref}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}
