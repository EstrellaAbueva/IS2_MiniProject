import React from 'react';
import { TextField } from '@mui/material';

function TextInput({ label, inputValue, handleInputChange }) {
  const handleTextFieldChange = (event) => {
    handleInputChange(event.target.value);
  };

  return (
    <TextField
      id="outlined-multiline-static"
      label={label}
      multiline
      fullWidth
      rows={10}
      value={inputValue}
      onChange={handleTextFieldChange}
      sx={{ backgroundColor: '#ACB1D6' }} // Set the background color here
    />
  );
}

export default TextInput;