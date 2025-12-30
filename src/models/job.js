import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Job = sequelize.define(
    "Job",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "open",
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "Jobs",
      timestamps: true,
    }
  );

  return Job;
};
