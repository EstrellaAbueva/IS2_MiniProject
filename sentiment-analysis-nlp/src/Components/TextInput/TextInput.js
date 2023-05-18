import React from 'react'
import TextField from '@mui/material/TextField';

function TextInput() {
  return (
    <>
        <TextField
          id="outlined-multiline-static"
          label="Text to Analyze"
          multiline
          fullWidth 
          rows={10}
        />
    </>
  )
}

export default TextInput