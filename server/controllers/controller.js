'use strict';

const db = require('../models/index');

const getLogin = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await db.User.findOne({where: {username: username}});
    res.status(200);
    res.send(user);
  } catch (err) {
    console.error('error', err);
    res.sendStatus(500);
  }
}

const addToCollection = async (req, res) => {
  try {
    const rec = await db.Collection.create(req.body);
    res.status(201);
    res.send(rec);
  } catch (err) {
    console.error('error', err);
    res.sendStatus(500);
  }
}

const getAllFromCollection = async (req, res) => {
  try {
    const recs = await db.Collection.findAll();
    res.status(200);
    res.send(recs);
  } catch (err) {
    console.error('error', err);
    res.sendStatus(500);
  }
}

const getOneFromCollection = async (req, res) => {
  try {
    const id = req.params.id;
    const rec = await db.Collection.findOne({where: {id: id}});
    res.status(200);
    res.send(rec);
  } catch (err) {
    console.error('error', err);
    res.sendStatus(500);
  }
}

const removeFromCollection = async (req, res) => {
  try {
    const id = req.params.id;
    await db.Collection.destroy({where: {id: id}});
    res.status(200);
    res.send();
  } catch (err) {
    console.error('error', err);
    res.sendStatus(500);
  }
}

const addToWishlist = async (req, res) => {
  try {
    const rec = await db.Wishlist.create(req.body);
    res.status(201);
    res.send(rec);
  } catch (err) {
    console.error('error', err);
    res.sendStatus(500);
  }
}

const getAllFromWishlist = async (req, res) => {
  try {
    const recs = await db.Wishlist.findAll();
    res.status(200);
    res.send(recs);
  } catch (err) {
    console.error('error', err);
    res.sendStatus(500);
  }
}

const getOneFromWishlist = async (req, res) => {
  try {
    const id = req.params.id;
    const rec = await db.Wishlist.findOne({where: {id: id}});
    res.status(200);
    res.send(rec);
  } catch (err) {
    console.error('error', err);
    res.sendStatus(500);
  }
}

const removeFromWishlist = async (req, res) => {
  try {
    const id = req.params.id;
    await db.Wishlist.destroy({where: {id: id}});
    res.status(200);
    res.send();
  } catch (err) {
    console.error('error', err);
    res.sendStatus(500);
  }
}

module.exports = { 
  getLogin, 
  addToCollection,
  getAllFromCollection,
  getOneFromCollection,
  removeFromCollection,
  addToWishlist,
  getAllFromWishlist,
  getOneFromWishlist,
  removeFromWishlist
 };
