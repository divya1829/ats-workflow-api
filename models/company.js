import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Company extends Model {}

  Company.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Company",
    }
  );

  return Company;
};
