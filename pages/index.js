import React, { Component } from "react"
import Link from 'next/link'

export default class extends Component {
  render () {
    return (
      <div>
      <h1>Hello World</h1>

      {' '}
      <h2>
      <Link href="/posts/build-table">
      <a>Country table</a>
      </Link>
      </h2>

      {' '}
      <h2>
      <Link href="/posts/country">
      <a>Different country table</a>
      </Link>
      </h2>
      </div>
    )
  }
}