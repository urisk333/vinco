'use strict';

module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
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
      allowNull: false
    },
    rating: DataTypes.DECIMAL
  });

  return Collection;
};
