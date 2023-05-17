import { React, useState, useEffect } from 'react';
import SingleText from '../SingleText/SingleText.js';
import FileText from '../FileText/FileText.js';
import Button from '../../Utils/Buttons/Button.js'

import './index.css';

export const Menu = () => {
  const [button, setButton] = useState("");

  function isClicked(text) {
    if (text === "Single Text")
      setButton("single-text");
    else if (text === "File Text") {
      setButton("file-text");
    }
  }
  return (
    <div className="parent-bg">
      <div className="button-box">
        <Button text="Single Text" onClick={isClicked} />
        <Button text="File Text" onClick={isClicked}/>
      </div>
      <div className="display">
        {button === "single-text" ?
          <SingleText /> :
          button === "file-text" ?
            <FileText /> :
            null}
      </div>
    </div>
  )
}

export default Menu;