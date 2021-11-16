'use strict';

module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define('Wishlist', {
    artist: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    format: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rating: DataTypes.DECIMAL
  });

  return Wishlist;
};
