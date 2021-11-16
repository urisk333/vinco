import './LoginForm.css';
import React from 'react';

function LoginForm ({getUser, user, handleShowLogin}) {

  function handleSubmit (e) {
    e.preventDefault();
    getUser(user);
    handleShowLogin(); 
  }

  function handleCancel () {
    window.location.href = ("/");
  }

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <form className="login-form">
        <h2 className="login-form-title">Log in</h2> 
        <div className="login-form-input">
          <label className="login-label">Username:</label>
          <input className="login-input-username" type="text" placeholder="Enter username..."></input>     
          <label className="login-label">Password:</label>
          <input className="login-input-password" type="password" placeholder="Enter password..."></input>
        </div> 
        <div className="login-form-button">
          <button className="log-in-button" type="submit" onClick={() => {handleSubmit()}}>Submit</button>
          <button className="log-in-button" type="submit" onClick={() => {handleCancel()}}>Cancel</button>
        </div> 
      </form>
    </div>
  )
}

export default LoginForm;
