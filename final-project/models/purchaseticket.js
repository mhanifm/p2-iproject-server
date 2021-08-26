'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PurchaseTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PurchaseTicket.belongsTo(models.User,{foreignKey: "userId"})
      PurchaseTicket.belongsTo(models.Flight,{foreignKey: "flightId"})
    }
  };
  PurchaseTicket.init({
    userId: DataTypes.INTEGER,
    flightId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PurchaseTicket',
  });
  return PurchaseTicket;
};