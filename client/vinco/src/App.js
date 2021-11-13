import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import ApiService from './Services/ApiServices';
import Dashboard from './Components/Dashboard/Dashboard';
import NavBar from './Components/Navbar/NavBar';

function App() {

  const [collectionListRecs, setCollectionRecs] = useState([]);
  const [wishlistListRecs, setWishlistRecs] = useState([]);

  useEffect(() => {
      
    ApiService.getAllFromCollection()
        .then(collectionRecs => {
          console.log('records', collectionRecs)
          collectionRecs
            .sort(function (a, b) {
              if (a.artist < b.artist) return -1;
              if (a.artist > b.artist) return 1;
              return 0;
            });
            setCollectionRecs(collectionListRecs);
        });
    }, []);

    useEffect(() => {
      
      ApiService.getAllFromWishlist()
          .then(wishlistRecs => {
            wishlistRecs
              .sort(function (a, b) {
                if (a.artist < b.artist) return -1;
                if (a.artist > b.artist) return 1;
                return 0;
              });
                console.log('records', wishlistRecs)
              setWishlistRecs(wishlistListRecs);
          });
      }, []);


  return (
    <div className="App">
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
