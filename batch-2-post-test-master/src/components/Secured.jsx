import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

function Secured({ children }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <Fragment>
      { isLoggedIn ? children : <Redirect to="/login" />}
    </Fragment>
  )
}
export default Secured
