'use strict';
const db= require('../config/database')
module.exports = (db, DataTypes) => {
  const Cab = db.define('Cab', {
    name: DataTypes.STRING,
    lag: DataTypes.DOUBLE,
    lon: DataTypes.DOUBLE,
    available: DataTypes.BOOLEAN,
    label: DataTypes.STRING
  }, {});
  Cab.associate = function(models) {
    // associations can be defined here
  };
  return Cab;
};