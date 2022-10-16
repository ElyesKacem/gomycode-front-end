import { IconButton, Slider } from '@mui/material'
import React, { useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

export const BottomDiv = ({videoDuration}) => {
  const [playPauseCurrentIcon, setPlayPauseCurrentIcon] = useState(<PlayArrowIcon/>);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  React.useEffect(() => {
    let interval=null
    if(isPlaying){
      interval = setInterval(() => {
        setTime((time) => time+1);
      },  videoDuration/100);

    }
    else{
      setTime(time);
      clearInterval(interval);
      
    }

    
    
  
    
  }, [isPlaying])
  
  return (
    <div style={{gap:15,position:'fixed',bottom:0,width:"97%",padding:10,display:'flex',alignItems:'center'}}>
<IconButton color="primary" aria-label="upload picture" component="label" onClick={()=>{
if(isPlaying)
{
  // pausi el video
  setPlayPauseCurrentIcon(<PlayArrowIcon/>);
  
}
else{
  setPlayPauseCurrentIcon(<PauseIcon/>);
}
setIsPlaying(!isPlaying);
}}>
  {playPauseCurrentIcon}
</IconButton>
<Slider
  size="small"
  defaultValue={0}
  aria-label="Small"
  value={time}
  // valueLabelDisplay="auto"
/>
    </div>
  )
}
