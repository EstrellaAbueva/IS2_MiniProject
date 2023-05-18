import React from 'react'
import TextField from '@mui/material/TextField';

function Remarks() {
  return (
    <>
        <TextField
          id="outlined-multiline-static"
          label="Remarks"
          multiline
          fullWidth 
          rows={5}
        />
    </>
  )
}

export default Remarks