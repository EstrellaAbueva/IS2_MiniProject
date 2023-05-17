import React from 'react'
import './Button.css';

export const Button = ( {text, onClick} ) => {
  return (
    <div className="frame">
      <button class="custom-btn btn-5" onClick={() => onClick(text)}><span>{ text }</span></button>
    </div>
    
  )
}

export default Button;