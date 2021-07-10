import React, { Component } from "react"
import Link from 'next/link'

export default class MyComponent extends Component {
  render () {
    return (
      <div className="container-fluid banner">
      <div className="row">
        <div className="col-md-12">
      <nav className="navbar navbar-md">
        <div className="navbar-brand">Salman Mohammed</div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
                       <Link href="/">
            <a className="nav-link">Home</a>
                      </Link>
          </li>
          <li className="nav-item">
                      <Link href="/posts/build-table">
            <a className="nav-link">Country Table</a>
                      </Link>
          </li>
                      <li className="nav-item">
          <Link href="/posts/country">
            <a className="nav-link">Another Table</a>
                       </Link>
                       </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
  </div>
			<div className="col-md-8 offset-md-2 info">
				<h1 className="text-center">Salmans Next JS Website</h1>
				<p className="text-center">
					Welcome to my website where I'm practicing my Next JS skills 
				</p>
				<a href="#" className="btn btn-md text-center">GET STARTED</a>
			</div>
      </div>
      </div>

    )
  }
}
