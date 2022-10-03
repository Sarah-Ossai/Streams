import React from "react";

import "./SideBar.css";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Person3Icon from '@mui/icons-material/Person3';
import AlbumIcon from '@mui/icons-material/Album';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { NavLink } from 'react-router-dom'

function SideBar() {
  return (

    <div className="sidebar desktop">
      <div className="top-sidebar desktop">
        <img
          src="https://i.ibb.co/3zTHC4j/streams-icon.png"
          alt="streams-logo"
        />
        <p className="title">STREAMS</p>
      </div>
      <hr className="line desktop" />
      <br />
      <div className="sidebar-list">
      <div className="sidebar-link">
  
      <NavLink to='/homepage' className="linking desktop"><HomeIcon className="icon-color"/> Home</NavLink>
      <NavLink to='trending' className="linking desktop" ><WhatshotIcon className="icon-color"/>Trending</NavLink>
      <NavLink to='artists' className="linking desktop" ><Person3Icon className="icon-color"/>Artists</NavLink>
      <NavLink to='genre' className="linking desktop" ><AlbumIcon className="icon-color"/>Genre</NavLink>

      </div>
      </div> 
      <br/>
       <hr className="line2 desktop" />
      <div className="library desktop">
        <p>Library</p>
        <NavLink to='myplaylist' className="linking desktop" ><QueueMusicIcon className="icon-color"/>My Playlist</NavLink>
        <NavLink to='favorite' className="linking desktop" ><FavoriteIcon className="icon-color"/>Favorite</NavLink>
      </div>  
      
      </div> 


  );
}

export default SideBar;
