import React from 'react'

function CenterLayout({ children }) {
  return (
    <div className="container vh-100">
      <div className="row vh-100">
        <div className="col align-self-center">
          {children}
        </div>
      </div>
    </div>
  )
}
export default CenterLayout
