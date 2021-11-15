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
import { RecRatingContext, RecRemoveContext } from './Context';

function App() {

  const [user, setUser] = useState('');
  const [collectionListRecs, setCollectionListRecs] = useState([]);
  const [wishlistListRecs, setWishlistListRecs] = useState([]);
  const [updateRecRatingCollection, setUpdateRecRatingCollection] = useState({});
  const [updateRecRatingWishlist, setUpdateRecRatingWishlist] = useState({});


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

  // console.log('COLLECTION', collectionListRecs)
  // console.log('WISHLIST', wishlistListRecs)


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
          collectionListRecs
            .sort(function (a, b) {
              if (a.artist < b.artist) return -1;
              if (a.artist > b.artist) return 1;
              return 0;
            });
            setCollectionListRecs(collectionListRecs);
        });
    }, []);


  function updateRatingFromCollection (id, rating) {

    ApiService.updateRatingFromCollection(id, rating)
      .then(record => {
        setUpdateRecRatingCollection({...updateRecRatingCollection, [record.rating]: rating})
      });
  }

  
  async function removeFromCollection (id) {

    await ApiService.removeFromCollection(id);
    const filteredCollection = collectionListRecs.filter(record => record.id !== id);
    setCollectionListRecs(filteredCollection);
  }
    

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
            setWishlistListRecs(wishlistListRecs);
        });
    }, []);


  function updateRatingFromWishlist (id, rating) {

    ApiService.updateRatingFromWishlist(id, rating)
      .then(record => {
        setUpdateRecRatingWishlist({...updateRecRatingWishlist, [record.rating]: rating})
      });
  }


  async function removeFromWishlist (id) {

    await ApiService.removeFromWishlist(id);
    const filteredCollection = wishlistListRecs.filter(record => record.id !== id);
    console.log('FILTERED', filteredCollection)
    setWishlistListRecs(filteredCollection);
  }
    

  return (
    <div className="App">
      <RecRatingContext.Provider value={{updateRatingFromCollection, updateRatingFromWishlist}} >
      <RecRemoveContext.Provider value={{removeFromCollection, removeFromWishlist}} >
      <Router>
        <NavBar />
          <Routes>
            <Route path="/collections" element={<Collection collectionListRecs={collectionListRecs} />}></Route>
            <Route path="/favorites" element={<Favorites collectionListRecs={collectionListRecs} />}></Route>
            <Route path="/wishlists" element={<Wishlist wishlistListRecs={wishlistListRecs} />}></Route>
            <Route path="/users/:username" element={<Dashboard />}></Route>
            <Route path="/" element={<Dashboard getUser={getUser} user={user} />}></Route>
          </Routes>
      </Router>  
      </RecRemoveContext.Provider>
      </RecRatingContext.Provider>
    </div>
  );
}

export default App;
