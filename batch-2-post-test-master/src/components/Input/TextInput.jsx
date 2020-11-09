import React from 'react'

function TextInput(props) {
  const { name, id, refInput, label, error } = props
  return (

    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type="text" className="form-control" id={id} name={name} ref={refInput} />
      <small id={id} className="form-text text-muted">
        {error || '\u00A0'}
      </small>
    </div>
  )
}
export default TextInput
