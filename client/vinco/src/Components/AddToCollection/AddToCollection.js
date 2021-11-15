import './AddToCollection.css';
import React from 'react';
import ReactStars from 'react-rating-stars-component';

function AddToCollection () {

  return (
    <div className="add-container">
      <div className="add-container-top">
        <form className="add-information">
          <div className="input-order">
            <label className="add-label">Artist:</label>
            <input className="add-input-information" type="text" placeholder="Enter artist..."></input>     
          </div>
          <div className="input-order">
            <label className="add-label">Album:</label>
            <input className="add-input-information" type="text" placeholder="Enter album title..."></input>
          </div>
          <div className="input-order">
            <label className="add-label">Year:</label>
            <input className="add-input-information" type="text" placeholder="Enter release year..."></input>     
          </div>
          <div className="input-order">
            <label className="add-label">Format:</label>
            <input className="add-input-information" type="text" placeholder="Enter record format..."></input>
          </div>
          <ReactStars
          classNames="rating-stars"
          count={5}
          // onChange={handleRatingChange}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#FFDB65"
        />
        </form>
        <div className="webcam-window">
          <div className="webcam">      
          </div>
          <button className="webcam-snap-button" type="submit">Snap!</button>
          <button className="webcam-save-button" type="submit">Save!</button>
        </div>
      </div>
      <div className="add-container-bottom">
        <button className="add-collection-button" type="submit">Add record</button>
      </div>
    </div>
  )
}

export default AddToCollection;
