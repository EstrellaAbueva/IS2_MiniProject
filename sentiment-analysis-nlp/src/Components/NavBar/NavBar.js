import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../Utils/Buttons/Button.js'

function NavBar() {
  return (
    <nav className="button-box">
        <Link to='single-text'><Button text="Single Text"/></Link>
        <Link to='file-text'><Button text="File Text"/></Link>
    </nav>
  )
}

export default NavBar