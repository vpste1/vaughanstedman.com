import React, { useState, useEffect } from "react"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import ImageGallery from "../components/ImageGallery"
import { Storage } from "aws-amplify"
import generateUrlTree from "../utils/generateUrlTree"

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
      } catch {
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
