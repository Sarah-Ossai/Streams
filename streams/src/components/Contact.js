import React from 'react'
import './Contact.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

const contact = () => {
  return (
<div>
    <div className='contact desktop'>
          <div className="logo">
            <img src='https://i.ibb.co/3zTHC4j/streams-icon.png'
            alt='stream-logo'/>
            <p>Copywrite © 2022</p>
          </div>
          <div className="browse">
            <h3>Browse</h3>
            <NavLink to="/homepage"><p>Home</p></NavLink>
            <NavLink to="/trending"><p>Trending</p></NavLink>
            <NavLink to="/artists"><p>Artists</p></NavLink>
            <NavLink to="/genre"><p>Genres</p></NavLink>

          </div>
          <div className="about">
            <h3>About</h3>
            <Link to="#about" smooth>About</Link>
            <br/>
            <a href='https://wa.me/+2347013969864'>Support</a>
            <br/>
            <a href='sarah06@6mail.com'>Report a vulnerability</a>
            <br/>
            <a href='http://www.gitbook.com'>Api Documentation</a>
          </div>
          <div className='desktop'>
          <h1>Contact us:</h1>
     <div className='contact-icons'>
    <a href="https://free.facebook.com/sarahifeoma.ossai.9"> <FacebookIcon className='contact-icon' fontSize='large'/></a>
     <a href="https://twitter.com/SarahOssai_"><TwitterIcon className='contact-icon' fontSize='large'/></a>
     <a href="https://www.instagram.com/sarahossai.i/"><InstagramIcon className='contact-icon' fontSize='large'/></a>
     </div>
     </div>
        </div>
        <div className='contact contact-mobile mobile'>

          <div className="browse">
            <h3>Browse</h3>
            <NavLink to="/homepage"><p>Home</p></NavLink>
            <NavLink to="/trending"><p>Trending</p></NavLink>
            <NavLink to="/artists"><p>Artists</p></NavLink>
            <NavLink to="/genre"><p>Genres</p></NavLink>

          </div>
          <div className="about">
            <h3>About</h3>
            <Link to="#about" smooth>About</Link>
            <br/>
            <a href='https://wa.me/+2347013969864'>Support</a>
            <br/>
            <a href='sarah06@6mail.com'>Report a vulnerability</a>
            <br/>
            <a href='http://wwww.gitbook.com'>Api Documentation</a>
          </div>
          <div className=''>
          <h3>Contact us:</h3>
     <div className='contact-icons contact-icons-mobile'>
    <a href="https://free.facebook.com/sarahifeoma.ossai.9"> <FacebookIcon className='contact-icon' fontSize='small'/></a>
     <a href="https://twitter.com/SarahOssai_"><TwitterIcon className='contact-icon' fontSize='small'/></a>
     <a href="https://www.instagram.com/sarahossai.i/"><InstagramIcon className='contact-icon' fontSize='small'/></a>
     </div>
     </div>
        </div>
        </div>
  )
}

export default contact