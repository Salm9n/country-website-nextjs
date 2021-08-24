import React, { Component } from "react"
import Link from 'next/link'

const IndexPage = ({ isDark, toggleChecked }) => {
  console.log({isDark})
    return (
    <> 
      <div className="container-fluid banner">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
              <div className="navbar-brand"></div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
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
                      <Link href="/posts/about">
                       <a className="nav-link">About Me</a>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link href="/posts/contactme">
                        <a className="nav-link">Contact Me</a>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link href="/posts/crypto">
                        <a className="nav-link">Crypto</a>
                      </Link>
                  </li>
                </ul>
              </div>
              </nav>
      </div>
			<div className="col-md-8 offset-md-2 info">
				<h1 className="text-center">Salmans Next JS Website</h1>
				<p className="text-center">
					{ "Welcome to my website where I'm practicing my Next JS skills" }
				</p>
        <Link href="/posts/about">
				<a className="btn btn-md text-center">GET STARTED</a></Link>
			</div>
      </div>
      </div>

    )
  </>
    )}
export default IndexPage;
