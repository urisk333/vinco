import './AddToCollection.css';
import React from 'react';
import { useState } from 'react';
import { WebcamCapture } from './Webcam/Webcam';
import { useContext } from 'react';
import { RecAddContext } from '../../Context';

function AddToCollection () {

  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [format, setFormat] = useState('');
  const [image, setImage] = useState('');

  const addToCollection = useContext(RecAddContext);

  function handleArtistChange (e) {
    setArtist(e.target.value);
  }

  function handleTitleChange (e) {
    setTitle(e.target.value);
  }

  function handleYearChange (e) {
    setYear(e.target.value);
  }

  function handleFormatChange (e) {
    setFormat(e.target.value);
  }

  function handleAddButton (e) {
    e.preventDefault();

    if (!(artist && title && year && format)) {
      return alert('Please fill in all fields.');
    } else {
      addToCollection({artist, title, year, format, image});
      setArtist('');
      setTitle('');
      setYear('');
      setFormat('');
      setImage('');
    }
  }

  return (
    <div className="add-container">
      <div className="add-container-top">
        <form className="add-information">
          <div className="input-order">
            <label className="add-label">Artist:</label>
            <input className="add-input-information" type="text" placeholder="Enter artist..." value={artist} onChange={handleArtistChange}></input>     
          </div>
          <div className="input-order">
            <label className="add-label">Album:</label>
            <input className="add-input-information" type="text" placeholder="Enter album title..." value={title} onChange={handleTitleChange}></input>
          </div>
          <div className="input-order">
            <label className="add-label">Year:</label>
            <input className="add-input-information" type="text" placeholder="Enter release year..." value={year} onChange={handleYearChange}></input>     
          </div>
          <div className="input-order">
            <label className="add-label">Format:</label>
            <input className="add-input-information" type="text" placeholder="Enter record format..." value={format} onChange={handleFormatChange}></input>
          </div>
        </form>
        <div className="webcam-window">
          <div className="webcam"> 
            <WebcamCapture setImage={setImage} image={image}/> 
          </div>
        </div>
      </div>
      <div className="add-container-bottom">
        <button className="add-collection-button" type="submit" onClick={handleAddButton}>Add record</button>
      </div>
    </div>
  )
}

export default AddToCollection;
