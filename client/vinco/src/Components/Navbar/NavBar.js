import './NavBar.css';
import vinyl_icon from '../../Assets/vinyl_icon.png';
import search_icon from '../../Assets/search_icon.png';
import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <div className="navbar-container">
      <div className="navbar-main">
        <div className="vinyl">
          <img className="vinyl-icon" src={vinyl_icon} alt="vinyl icon" />
        </div>
        <div className="app-name">
          <h1>
            <Link to="/">VinCo</Link>
          </h1>
        </div>
        <div className="navbar">
          <div className="navbar-links">
            <h3>
              <Link to="collections">My Collection</Link>
            </h3>
            <h3>
              <Link to="favorites">Favorites</Link>
            </h3>
            <h3>
              <Link to="wishlists">Wishlist</Link>
            </h3>
            <h3>Other Collections</h3>
            <h3>Chat</h3>
          </div>
          <div className="search-bar">
            <input className="search-input" type="text" placeholder="Search by artist..."></input>
          </div>
        </div>
      </div>
      <div className="search">
        <img className="search-icon" src={search_icon} alt="search icon" />
      </div>
    </div>
  )
}

export default NavBar;
