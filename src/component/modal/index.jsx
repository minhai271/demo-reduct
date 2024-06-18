/* eslint-disable react/prop-types */
import React from 'react'
import "./index.scss"
function Modal({isOpen = false , onCancel}) {
  return (
    <div className={`modal ${isOpen ? "active" : ""}`}>
        <div className="modal__overlay" onClick={onCancel}></div>
        <div className="modal__content"></div>
    </div>
  )
}

export default Modal