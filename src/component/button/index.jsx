/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React from 'react'
import "./index.scss"
function Button({variant ="default",onClick}) {
  return (
    <button onClick={onClick} className={`button button--${variant}`}>Button</button>
  )
}

export default Button