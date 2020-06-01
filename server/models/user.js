'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    lag: DataTypes.DOUBLE,
    lon: DataTypes.DOUBLE,
    in_raids: DataTypes.BOOLEAN,
    cab_id: DataTypes.NUMBER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};