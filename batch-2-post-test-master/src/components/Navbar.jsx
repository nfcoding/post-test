import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'

const links = [
  ['/register', 'Register'],
  ['/login', 'Login'],
  ['/', 'Post'],
  ['/post-list', 'Post List'],
]

function Navbar() {
  const location = useLocation()
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className={clsx('navbar-toggler', show && 'collapsed')} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
        <span className="navbar-toggler-icon" />
      </button>

      <div className={clsx('collapse', 'navbar-collapse', show && 'show')} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {
            links.map(([to, linkTitle]) => (
              <li key={to} className={clsx('nav-item', location.pathname === to && 'active')}>
                <Link to={to} className="nav-link">{linkTitle}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
