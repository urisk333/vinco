import './Wishlist.css';
import React from 'react';
import RecordItem from '../RecordItem/RecordItem';

function Wishlist ({ wishlistListRecs }) {

  if (wishlistListRecs) {

    return wishlistListRecs.map(record => <RecordItem record={record} key={record.id} />);
  }

  return (
    <div id="list">
      <RecordItem />
    </div>
  )
}

export default Wishlist;
