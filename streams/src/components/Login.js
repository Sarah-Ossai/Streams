import React from 'react'
import NavBar from './NavBar'
import './Login.css'
import Contact from './Contact'

import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
function Login() {
  return (
    <div className='wrapper'>
      <NavBar/>
    <div className='login desktop'>
      <h1>WELCOME BACK!</h1>
      <hr/>
      <div className='form'>
        <form>
          <div className='input-wrap'>
          <EmailIcon className='icon-style'/><input type='email' name='email' required placeholder='Enter your email address' className='input-style'/>
          </div>

          <br/>
          <div className='input-wrap'>
          <KeyIcon className='icon-style'/><input type='password' name='password' required placeholder='Enter your password' className='input-style'/>
          </div>
          <br/>
          <br/>
          <button id='login-btn_btn'>LOGIN</button>
        </form>

      </div>
    </div>
    <div className='login login-mobile mobile'>
      <h1>WELCOME BACK!</h1>
      <br/>
      <div className='form'>
        <form>
          <div className='input-wrap input-mobile'>
          <EmailIcon className='icon-style'/><input type='email' name='email' required placeholder='Enter your email address' className='input-style'/>
          </div>

          <br/>
          <div className='input-wrap input-mobile'>
          <KeyIcon className='icon-style'/><input type='password' name='password' required placeholder='Enter your password' className='input-style'/>
          </div>
          <br/>
          <br/>
          <button id='login-btn_btn'>LOGIN</button>
        </form>

      </div>
      </div>
    <Contact/>
    </div>
  )
}

export default Login