import React from 'react';
import RecordItem from '../RecordItem/RecordItem';

function Collection ({ collectionListRecs }) {

  if (collectionListRecs) {
    return collectionListRecs.map(record => <RecordItem record={record} key={record.id} isCollection={true}/>);
  }
  
  return (
    <div id="list">
      <RecordItem isCollection={true}/>
    </div>
  )
}

export default Collection;
