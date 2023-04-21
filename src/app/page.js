'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { Inter } from 'next/font/google'
import styles from './custom.global.scss'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0">
        <div className="container">
          <div className=" row align-items-center">
            <div className="col-sm-6">
              <h1 className="text-primary fw-bold display-3">We Build <span className='text-secondary'>Mobile Apps </span> That Engage & Convert Users.</h1>
              <p>{"Comprehensive mobile app development & marketing services that deliver guaranteed results. Let's get started!"}</p>
              <div className="text-center">
                {/* <a className="btn btn-primary my-1 mx-3 px-5 py-2">Website Comming Soon</a> */}
                <a className="btn btn-secondary my-1 mx-3 px-5 py-2">Contact us</a>
              </div>
            </div>
            {/* <div className="col-sm-6 text-center"> */}
            {/* <h1 className="text-primary fw-bold">Blocship</h1> */}
            {/* <p>Comming Soon</p> */}
            {/* <div className="text-center">
                <a className="btn btn-primary my-1 mx-3">Comming Soon</a>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </main>
  )
}


const Nav = () => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container">
        {/* <Link href="/"> */}
        {/* <Image src={Logo} alt="Logo" width="36" height="36" className="vertical-align-middle" /> */}
        <a className="navbar-brand">
          <span className="">Blocship</span>
        </a>
        {/* </Link> */}
        <button
          className="custom-toggler navbar-toggler"
          type="button" data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id="navbarsExample09"
        >
          <div className="navbar-nav">
            <a className="nav-link">Contact us</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

