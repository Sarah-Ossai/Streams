import './Favorite.css'
import React from 'react'
import NavHeader from './NavHeader'
import Contact from './Contact'
import Footer from './Footer'

const Favorite = () => {
  
  return (
    <div className='wrapper'>
      <NavHeader/>

    <div className='favorite'>
      
        All your favorite songs will be shown here.
        
    </div>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Favorite