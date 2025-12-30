import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Application = sequelize.define(
    "Application",
    {
      stage: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Applied",
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      jobId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "Applications",
      timestamps: true,
    }
  );

  return Application;
};
