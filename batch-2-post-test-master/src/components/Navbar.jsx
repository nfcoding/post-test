import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/">Post</Link>
      <Link to="/post-list">Post List</Link>
    </nav>
  )
}
export default Navbar
