'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ITEMS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ITEMS.init({
    UUID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    BARCODE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CAT_ID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ITEM_STATUS: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ENTRY_DATE: DataTypes.TIME,
    ENTRY_BY: DataTypes.STRING,
    SELL_DATE: DataTypes.TIME,
    SELL_BY: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ITEMS',
  });
  return ITEMS;
};