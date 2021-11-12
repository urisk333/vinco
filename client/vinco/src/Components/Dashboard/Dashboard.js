import './Dashboard.css';
import background_pic from '../../Assets/background_pic.png';
import React from 'react';

function Dashboard () {

  return (
    <div className="dashboard">
      <img className="background-picture" src={background_pic} alt="background pic" />
    </div>
  )
}

export default Dashboard;
