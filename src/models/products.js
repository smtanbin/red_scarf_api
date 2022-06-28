'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PRODUCTS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PRODUCTS.init({
    UUID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    CAT_ID: DataTypes.STRING,
    NAME: DataTypes.STRING,
    MRP: DataTypes.STRING,
    VENDOR_PRICE: DataTypes.STRING,
    COMMISSION: DataTypes.STRING,
    COMI_RATE: DataTypes.STRING,
    DISCOUNT: DataTypes.STRING,
    VAT: DataTypes.STRING,
    STATUS: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'PRODUCTS',
  });
  return PRODUCTS;
};