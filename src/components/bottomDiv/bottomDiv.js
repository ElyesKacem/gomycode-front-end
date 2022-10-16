import { IconButton, Slider } from '@mui/material'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const BottomDiv = () => {
  return (
    <div style={{gap:15,position:'fixed',bottom:0,width:"97%",padding:10,display:'flex',alignItems:'center'}}>
<IconButton color="primary" aria-label="upload picture" component="label">
  <PlayArrowIcon />
</IconButton>
<Slider
  size="small"
  defaultValue={0}
  aria-label="Small"
  valueLabelDisplay="auto"
/>
    </div>
  )
}
