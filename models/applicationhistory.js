'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApplicationHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ApplicationHistory.init({
    stage: DataTypes.STRING,
    changedBy: DataTypes.INTEGER,
    applicationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ApplicationHistory',
  });
  return ApplicationHistory;
};