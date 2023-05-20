import React, { useState } from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


function SelectGraph() {
    const [chosenGraph, setChosenGraph] = useState('');

    const handleChange = (event) => {
        setChosenGraph(event.target.value);
    };

  return (
    <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
        <InputLabel id="demo-select-small-label">Graph</InputLabel>
        <Select
        labelId="graph-label"
        id="graph"
        value={chosenGraph}
        label="Graph"
        onChange={handleChange}
        >
            <MenuItem value={"bar"}>Bar</MenuItem>
            <MenuItem value={"pie"}>Pie</MenuItem>
            <MenuItem value={"line"}>Line</MenuItem>
        </Select>
    </FormControl>
  )
}

export default SelectGraph