import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import PauseRounded from '@mui/icons-material/PauseRounded';
import IconButton from '@mui/material/IconButton';
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import Slider from '@mui/material/Slider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Grid from '@mui/material/Grid';


function Footer() {
  const [paused, setPaused] = React.useState(false);
  return (
    <div className="footer">
      <div className="footer_left">
        <img className="footer_albumLogo" src="https://042jam.com/wp-content/uploads/2022/08/Asake-%E2%80%93-Terminator.jpg" alt="ablum cover" />
        <div className="footer_songInfo">
          <h4>Terminator</h4>
          <p>AsaKe</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_colored" />
        <SkipPreviousIcon className="footer_icon" />
        <IconButton
            aria-label={paused ? 'pause' : 'play'}
            onClick={() => setPaused(!paused)}
            
          >
        {paused ?  (<PauseRounded fontSize="large" className="footer_icon white-icon" />):
         ( <PlayCircleOutlineIcon fontSize="large" className="footer_icon white-icon"  /> ) }
          </IconButton>
            
        <SkipNextIcon className="footer_icon"/>
        <RepeatIcon className="footer_colored" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
        <Grid item> 
        <FavoriteBorderIcon className="footer_icon fav"/>
        </Grid>
          <Grid item>
            
            <PlaylistPlayIcon className="footer_icon"/>
          </Grid>
          <Grid item>
              <VolumeDownIcon className="footer_icon"/>
              </Grid>
              <Grid item xs>
              <Slider color="secondary" />
              </Grid>
              
          </Grid>
      </div>
    </div>
  );
}

export default Footer;
