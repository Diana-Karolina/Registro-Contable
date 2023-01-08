import React from 'react'

const InputText = (props) => {
  return (
    <div className="row mt-4">
    <label htmlFor={props.identifier} className="form-label">
      <em>{props.title}</em>
    </label>

    <input
      type={props.type || "text"}
      className="form-control-sm col-md-4"
      id={props.identifier}
      name={props.identifier}
      {...props.register(props.identifier, props.validations)}
    />
  </div>
  )
}

export default InputText