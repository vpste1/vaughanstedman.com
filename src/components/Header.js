import React from "react"
import { Link } from "gatsby"

export default function Header({ text, showBack }) {
  return (
    <header>
      <h1>{text}</h1>
      {showBack && <Link to="/">{`< Back`}</Link>}
    </header>
  )
}
