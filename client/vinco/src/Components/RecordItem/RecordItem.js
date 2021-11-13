import './RecordItem.css';
import React from 'react';
import ReactStars from "react-rating-stars-component";

function RecordItem ({ record }) {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  
  console.log("RECORD ITEM", record)
  return (
    <div className="record-item">
      <img src={record.image} className="record-image" alt="album cover" />
      <p className="record-artist">{record.artist}</p>
      <p className="record-title">{record.title}</p>
      <p className="record-year">{record.year}</p>
      <p className="record-format">{record.format}</p>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#FFDB65"
      />
      <div>
        <button className="delete-record" type="submit">Delete</button>
      </div>
    </div>
  )
}

export default RecordItem;
