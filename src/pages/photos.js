import React, { useState, useEffect } from "react"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import ImageGallery from "../components/ImageGallery"
import Amplify, { Storage } from "aws-amplify"
import awsConfig from "../aws-config"
import generateUrlTree from "../utils/generateUrlTree"

Amplify.configure(awsConfig.amplify)

export default function Photos() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [urlTree, setUrlTree] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    async function loadUrlTree() {
      try {
        const urlArray = await Storage.list("")
        setUrlTree(generateUrlTree(urlArray))
        setLoading(false)
      } catch (err) {
        console.error(err)
        setError(true)
        setLoading(false)
      }
    }

    loadUrlTree()
  }, [])

  const countryList = urlTree ? Object.keys(urlTree) : []

  return (
    <>
      <Header showBack text="Photos" />
      <main>
        {loading ? (
          <span>+ LOADING +</span>
        ) : error ? (
          <span>ERROR</span>
        ) : (
          <>
            <NavBar
              activeIndex={activeIndex}
              selectIndex={setActiveIndex}
              options={countryList}
            />
            <ImageGallery urlList={urlTree[countryList[activeIndex]]} />
          </>
        )}
      </main>
    </>
  )
}
