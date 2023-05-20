import React from 'react'
import TextField from '@mui/material/TextField';

function TextInput({label, inputValue, handleInputChange}) {
  
  const handleTextFieldChange = (event) => {
    const value = event.target.value;
    handleInputChange(value);
  };

  return (
    <>
        <TextField
          id="outlined-multiline-static"
          label={label}
          multiline
          fullWidth 
          rows={10}
          value={inputValue}
          onChange={handleTextFieldChange}
        />
    </>
  )
}

export default TextInput