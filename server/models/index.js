'use strict';

const fs = require('fs');
const path = require('path');
require('dotenv').config();
const connectionString = process.env.DATABASE_CONNECTION;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(connectionString, {
  host: '127.0.0.1',
  dialect: 'postgres',
});
const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
