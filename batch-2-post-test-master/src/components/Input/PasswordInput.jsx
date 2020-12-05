import React, { useState } from 'react'

function PasswordInput(props) {
  const { id, label, name, error, refInput } = props

  const [show, setShow] = useState(false)

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <div className="input-group mb-3">
        <input
          spellCheck={false}
          type={(show) ? 'text' : 'password'}
          className="form-control"
          name={name}
          id={id}
          ref={refInput}
        />
        <div className="input-group-append">
          <button onClick={() => setShow(!show)} type="button" className="btn btn-primary">
            {
              (show) ? <i className="far fa-eye-slash" /> : <i className="far fa-eye" />
            }
          </button>
        </div>
      </div>
      <small className="form-text text-muted">
        {error || '\u00A0'}
      </small>
    </div>
  )
}

export default PasswordInput
