import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

function RedirectToHome({ children }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <Fragment>
      {isLoggedIn ? <Redirect to="/" /> : children}
    </Fragment>
  )
}
export default RedirectToHome
