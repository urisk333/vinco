import './Dashboard.css';
import React from 'react';
import homepage_pic from '../../Assets/homepage_pic.jpg';
import dancing_icon from '../../Assets/dancing_icon.png';
import { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';

function Dashboard ({ getUser, user}) {

  const [visible, setVisible] = useState(false);

  function handleShowLogin () {
    setVisible(!visible)
  }

  function handleRouteCollection () {
    window.location.href = ("/collections");
  }
 
  return (
    <div className="dashboard">
      <div className="home-page-top">
        <h1 className="header-title">Make a digital home for your records collection</h1>
        <img className="home-page-pic" src={homepage_pic} alt="vinyls" />
        <button className="my-collection-button" type="submit" onClick={handleRouteCollection}>My collection</button>
        <button className="login-button" type="submit" onClick={handleShowLogin}>Log in</button>
        {visible && <LoginForm getUser={getUser} user={user} handleShowLogin={handleShowLogin}/>}
        <button className="signin-button" type="submit">Sign in</button>
        <img className="dancing-icon" src={dancing_icon} alt="dancing icon" />
      </div>
    </div>
  )
}

export default Dashboard;
