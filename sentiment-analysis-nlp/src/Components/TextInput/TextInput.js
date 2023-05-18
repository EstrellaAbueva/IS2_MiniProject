import React from 'react'
import TextField from '@mui/material/TextField';

function TextInput({label}) {
  return (
    <>
        <TextField
          id="outlined-multiline-static"
          label={label}
          multiline
          fullWidth 
          rows={10}
        />
    </>
  )
}

export default TextInput