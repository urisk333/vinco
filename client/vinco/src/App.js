import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApiService from './Services/ApiServices';
import Dashboard from './Components/Dashboard/Dashboard';
import NavBar from './Components/Navbar/NavBar';
import Collection from './Components/CollectionList/Collection';
import Wishlist from './Components/WishlistList/Wishlist';
import Favorites from './Components/FavoritesList/Favorites';

function App() {
  
  const [user, setUser] = useState('');
  const [collectionListRecs, setCollectionListRecs] = useState([]);
  const [wishlistListRecs, setWishlistListRecs] = useState([]);
  

  const getUser = (username) => {
    
    if (username !== '') {
      ApiService.getLogin(username)
        .then(user => {
          setUser(user.username)
        })
    } else {
      console.log('Please fill in all form fields.');
    }
  }


  // function addToCollection (record) {

  //   ApiService.addToCollection(record)
  //     .then(newRecord => setCollectionListRecs([...collectionListRecs, newRecord]
  //       .sort(function (a, b) {
  //         if (a.artist < b.artist) return -1;
  //         if (a.artist > b.artist) return 1;
  //         return 0;
  //       })));
  // }


  useEffect(() => {
      
    ApiService.getAllFromCollection()
        .then(collectionListRecs => {
          console.log('records', collectionListRecs)
          collectionListRecs
            .sort(function (a, b) {
              if (a.artist < b.artist) return -1;
              if (a.artist > b.artist) return 1;
              return 0;
            });
            setCollectionListRecs(collectionListRecs);
        });
    }, []);


  // function removeFromCollection (id) {

  //   ApiService.removeFromCollection({id})
  //     .then(collectionListRecs => {
  //       return collectionListRecs
  //         .filter(record => record.id !== id);
  //     })
  //     .then(records => setCollectionListRecs(records));  
  // }
    

  // function addToWishlist (record) {
  
  //   ApiService.addToWishlist(record)
  //     .then(newRecord => setCollectionListRecs([...wishlistListRecs, newRecord]
  //       .sort(function (a, b) {
  //         if (a.artist < b.artist) return -1;
  //         if (a.artist > b.artist) return 1;
  //         return 0;
  //       })));
  // }


  useEffect(() => {
    
    ApiService.getAllFromWishlist()
        .then(wishlistListRecs => {
          wishlistListRecs
            .sort(function (a, b) {
              if (a.artist < b.artist) return -1;
              if (a.artist > b.artist) return 1;
              return 0;
            });
              console.log('records', wishlistListRecs)
            setWishlistListRecs(wishlistListRecs);
        });
    }, []);


    // function removeFromWishlist (id) {

    //   ApiService.removeFromWishlist({id})
    //     .then(wishlistListRecs => {
    //       return wishlistListRecs
    //         .filter(record => record.id !== id);
    //     })
    //     .then(records => setCollectionListRecs(records));  
    // }
    

  return (
    <div className="App">
      <Router>
        <NavBar />
          <Routes>
            <Route path="/collections" element={<Collection collectionListRecs={collectionListRecs} />}></Route>
            <Route path="/favorites" element={<Favorites collectionListRecs={collectionListRecs} />}></Route>
            <Route path="/wishlists" element={<Wishlist wishlistListRecs={wishlistListRecs} />}></Route>
            <Route path="/users/:username" element={<Dashboard />}></Route>
            <Route path="/homepage" element={<Dashboard getUser={getUser} user={user} />}></Route>
          </Routes>
      </Router>  
    </div>
  );
}

export default App;
