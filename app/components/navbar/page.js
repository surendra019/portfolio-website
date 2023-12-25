"use client"
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Navbar() {
  
  
  return (
    <nav className={`navbar navbar-expand-lg  ${styles.bg}`} data-bs-theme="dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className={usePathname()==='/'? `nav-item active ${styles.nav_item_bold} ${styles.m_nav_item}`: `nav-item  ${styles.m_nav_item}`}>
          <Link className={`nav-link `} aria-current="page" href="/">Home</Link>
        </li>
        <li className={usePathname()==='/pages/about'? `nav-item active ${styles.nav_item_bold} ${styles.m_nav_item}`: `nav-item  ${styles.m_nav_item}`}>
          <Link className={`nav-link`} href="/pages/about">About</Link>
        </li>
        <li className={usePathname()==='/pages/resume'? `nav-item active ${styles.nav_item_bold} ${styles.m_nav_item}`: `nav-item  ${styles.m_nav_item}`}>
          <Link className={`nav-link`} href="/pages/resume">Resume</Link>
        </li>
        <li className={usePathname()==='/pages/portfolio'? `nav-item active ${styles.nav_item_bold} ${styles.m_nav_item}`: `nav-item  ${styles.m_nav_item}`}>
          <Link className={`nav-link`} href="/pages/portfolio">Portfolio</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

  )
}
