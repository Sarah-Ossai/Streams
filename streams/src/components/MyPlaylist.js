import './MyPlaylist.css'
import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import NavHeader from './NavHeader'
import Contact from './Contact'
import Footer from './Footer';
const MyPlaylist = () => {
  return (
    <div className='wrapper'>
  <NavHeader/>
    <div className='myplaylist'>
    
    <h3>No playlist has been created yet. Click on the button below to create a new playlist.</h3>

    <br/>
    <br/>
    <button className='createPlayList'><AddBoxIcon /> Create Playlist</button>
    
    </div>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default MyPlaylist