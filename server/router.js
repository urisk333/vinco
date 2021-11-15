'use strict';

const express = require('express');
const router = express.Router();
const record = require('./controllers/controller');

router.get('/users/:username', record.getLogin);
router.post('/collections', record.addToCollection);
router.get('/collections', record.getAllFromCollection);
router.get('/collections/:id', record.getOneFromCollection);
router.put('/collections/:id', record.updateRatingFromCollection);
router.delete('/collections/:id', record.removeFromCollection);
router.post('/wishlists', record.addToWishlist);
router.get('/wishlists', record.getAllFromWishlist);
router.get('/wishlists/:id', record.getOneFromWishlist);
router.put('/wishlists/:id', record.updateRatingFromWishlist);
router.delete('/wishlists/:id', record.removeFromWishlist);

module.exports = router;
