import React, { Component } from "react"
import Link from 'next/link'

export default class MyComponent extends Component {
  render () {
    return (
      <div class="container-fluid banner">
      <div class="row">
        <div class="col-md-12">
      <nav class="navbar navbar-md">
        <div class="navbar-brand">Salman Mohammed</div>
        <ul class="nav nav-tabs">
          <li class="nav-item">
                       <Link href="/">
            <a class="nav-link">Home</a>
                      </Link>
          </li>
          <li class="nav-item">
                      <Link href="/posts/build-table">
            <a class="nav-link">Country Table</a>
                      </Link>
          </li>
                      <li class="nav-item">
          <Link href="/posts/country">
            <a class="nav-link">Another Table</a>
                       </Link>
                       </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
  </div>
			<div class="col-md-8 offset-md-2 info">
				<h1 class="text-center">Salmans Next JS Website</h1>
				<p class="text-center">
					Welcome to my website where I'm practicing my Next JS skills 
				</p>
				<a href="#" class="btn btn-md text-center">GET STARTED</a>
			</div>
      </div>
      </div>

    )
  }
}
