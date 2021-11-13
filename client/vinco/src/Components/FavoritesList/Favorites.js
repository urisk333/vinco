import './Favorites.css';
import React from 'react';
import RecordItem from '../RecordItem/RecordItem';

function Favorites ({ collectionListRecs }) {

  if (collectionListRecs) {
    // console.log('RECORDS', collectionListRecs)
    return collectionListRecs
      .filter(record => record.rating > 4)
      .map(record => <RecordItem record={record} key={record.id} />) 
  }
  
  return (
    <div id="list">
      <RecordItem />
    </div>
  )
}

export default Favorites;
