import './Favorites.css';
import React from 'react';
import RecordItem from '../RecordItem/RecordItem';

function Favorites ({ collectionListRecs }) {

  if (collectionListRecs) {

    return collectionListRecs
      .filter(record => record.rating > 4)
      .map(record => <RecordItem record={record} key={record.id} isCollection={true}/>) 
  }
  
  return (
    <div id="list">
      <RecordItem isCollection={true}/>
    </div>
  )
}

export default Favorites;
