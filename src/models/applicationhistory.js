import { DataTypes } from "sequelize";

export default (sequelize) => {
  const ApplicationHistory = sequelize.define(
    "ApplicationHistory",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      applicationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      changedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: "ApplicationHistories", // 🔥 THIS IS THE FIX
      timestamps: true,
    }
  );

  return ApplicationHistory;
};
