import React from 'react'
function PasswordInput(props) {
  const { name, label, refInput, id, error } = props
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type="password" className="form-control" id={id} name={name} ref={refInput} />
      <small id={id} className="form-text text-muted">
        {error || '\u00A0'}
      </small>
    </div>
  )
}
export default PasswordInput
