import React from 'react'
import './Button.css';

export const Button = ( {text, onClick} ) => {
  return (
    <div className="button-box">
      <div className="frame">
        <button class="custom-btn btn-5"><span>{ text }</span></button>
      </div>
    </div>
  )
}

export default Button;