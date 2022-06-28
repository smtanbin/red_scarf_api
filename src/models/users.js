'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class USERS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  USERS.init({
    UUID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    USERNAME: DataTypes.STRING,
    NAME: DataTypes.STRING,
    HASH: DataTypes.STRING,
    ROLE: DataTypes.STRING,
    STATUS: DataTypes.STRING,
    EMAIL: DataTypes.STRING,
    MOBILE: DataTypes.STRING,
    ADDRESS: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'USERS',
  });
  return USERS;
};