import React from 'react';
import RecordItem from '../RecordItem/RecordItem';

function Wishlist ({ wishlistListRecs }) {

  if (wishlistListRecs) {
    return wishlistListRecs.map(record => <RecordItem record={record} key={record.id} isCollection={false} />);
  }

  return (
    <div id="list">
      <RecordItem isCollection={false} />
    </div>
  )
}

export default Wishlist;
