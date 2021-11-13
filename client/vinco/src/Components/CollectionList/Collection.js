import './Collection.css';
import React from 'react';
import RecordItem from '../RecordItem/RecordItem';

function Collection ({ collectionListRecs }) {

  if (collectionListRecs) {
    console.log('RECORDS', collectionListRecs)
    return collectionListRecs.map(record => <RecordItem record={record} key={record.id} />);
  }
  
  return (
    <div id="list">
      <RecordItem />
    </div>
  )
}

export default Collection;
