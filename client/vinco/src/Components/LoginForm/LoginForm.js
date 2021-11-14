import './LoginForm.css'
import React from 'react';

function LoginForm () {

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <form className="login-form">
        <h2 className="login-form-title">Log in</h2> 
        <div className="login-form-input">
          <label className="login-label">Username:</label>
          <input className="login-input-username" type="text" placeholder="Enter username..." required></input>     
          <label className="login-label">Password:</label>
          <input className="login-input-password" type="password" placeholder="Enter password..." required></input>
        </div> 
        <div className="login-form-button">
          <button className="log-in-button" type="submit">Submit</button>
          <button className="log-in-button" type="submit">Cancel</button>
        </div> 
      </form>
    </div>
  )
}

export default LoginForm;
