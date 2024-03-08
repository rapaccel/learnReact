import React from 'react'

const Input = React.forwardRef(({label, id, ...props}, ref) => {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...props} />
    </div>
  )
})

export default Input;