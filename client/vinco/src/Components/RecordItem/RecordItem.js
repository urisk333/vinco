import './RecordItem.css';
import React from 'react';
import ReactStars from "react-rating-stars-component";
import { useContext } from 'react';
import { RecRatingContext, RecRemoveContext } from '../../Context';

function RecordItem ({ record, isCollection }) {

  const { updateRatingFromCollection, updateRatingFromWishlist } = useContext(RecRatingContext);
  const { removeFromCollection, removeFromWishlist } = useContext(RecRemoveContext);

  function handleRatingChange (newRating) {

    if (isCollection === true) {
      updateRatingFromCollection(record.id, newRating);
    } else {
      updateRatingFromWishlist(record.id, newRating);
    }
  }

  function handleRemoveItem (e) {
    e.preventDefault();

    if (isCollection === true) {
      removeFromCollection(record.id)
    } else {
      removeFromWishlist(record.id)
    }
  }
  
  return (
    <div className="record-container">
      <div className="record-item">
        <img className="record-image" src={record.image} alt="album cover" />
        <p className="record-artist">{record.artist}</p>
        <p className="record-title">{record.title}</p>
        <p className="record-year">{record.year}</p>
        <p className="record-format">{record.format}</p>
        <ReactStars
          classNames="rating-stars"
          count={5}
          onChange={handleRatingChange}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#FFDB65"
        />
        <button className="delete-record" type="submit" onClick={handleRemoveItem}>Delete</button>
      </div>
    </div>
  )
}

export default RecordItem;
