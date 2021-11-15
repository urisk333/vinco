const BASE_URL = 'http://localhost:3001';

function fetchRecords (path, options) {
  return fetch(BASE_URL + path, options)
    .then(res => res.status < 400 ? res : Promise.reject())
    .then(res => res.status !== 204 ? res.json() : res)
    .catch(err => console.log('Error: ', err));
}

function getLogin (username) {
  return fetchRecords(`/users/${username}`);
}  

function addToCollection (record) {
  return fetchRecords('/collections', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record)
  });
}

function getAllFromCollection () {
  return fetchRecords('/collections');
}

function getOneFromCollection (id) {
  return fetchRecords(`/collections/${id}`);
}

function updateRatingFromCollection (id, rating) {
  return fetchRecords(`/collections/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      rating: rating
    })
  });
}

function removeFromCollection (id) {
  return fetchRecords(`/collections/${id}`, {
    method: "DELETE"
  });
}

function addToWishlist (record) {
  return fetchRecords('/wishlists', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record)
  });
}

function getAllFromWishlist () {
  return fetchRecords('/wishlists');
}

function getOneFromWishlist (id) {
  return fetchRecords(`/wishlists/${id}`)
}

function updateRatingFromWishlist (id, rating) {
  return fetchRecords(`/wishlists/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      rating: rating
    })
  });
}

function removeFromWishlist (id) {
  return fetchRecords(`/wishlists/${id}`, {
    method: "DELETE"
  });
}

const ApiService = {
  getLogin,
  addToCollection,
  getAllFromCollection,
  getOneFromCollection,
  updateRatingFromCollection,
  removeFromCollection,
  addToWishlist,
  getAllFromWishlist,
  getOneFromWishlist,
  updateRatingFromWishlist,
  removeFromWishlist
}

export default ApiService;
