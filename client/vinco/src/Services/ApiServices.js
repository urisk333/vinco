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
  removeFromCollection,
  addToWishlist,
  getAllFromWishlist,
  getOneFromWishlist,
  removeFromWishlist
}

export default ApiService;
