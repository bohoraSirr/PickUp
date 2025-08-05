import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <h6>Username: </h6>
          <input type="text" placeholder='Your Name' />
          <h6>Email: </h6>
          <input type="email" placeholder='Your Email' />
          <h6>Password: </h6>
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
