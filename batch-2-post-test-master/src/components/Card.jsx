import React from 'react'

function Card(props) {
  const { children, title } = props
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title text-center">{title}</h4>
        {children}
      </div>
    </div>
  )
}
export default Card
