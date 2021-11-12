'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  User.associate = model => {
    User.hasOne(model.Collection);
    User.hasOne(model.Wishlist);
  };

  return User;
};
