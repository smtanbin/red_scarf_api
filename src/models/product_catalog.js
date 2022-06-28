'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PRODUCT_CATALOG extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PRODUCT_CATALOG.init({
    UUID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    CAT_ID: DataTypes.STRING,
    NAME: DataTypes.STRING,
    LEVEL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PRODUCT_CATALOG',
  });
  return PRODUCT_CATALOG;
};