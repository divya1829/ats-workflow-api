import Sequelize from "sequelize";
import dotenv from "dotenv";

import UserModel from "./user.js";
import CompanyModel from "./company.js";
import JobModel from "./job.js";
import ApplicationModel from "./application.js";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false,
  }
);

const User = UserModel(sequelize, Sequelize.DataTypes);
const Company = CompanyModel(sequelize, Sequelize.DataTypes);
const Job = JobModel(sequelize, Sequelize.DataTypes);
const Application = ApplicationModel(sequelize, Sequelize.DataTypes);

/* Associations */
User.hasMany(Company, { foreignKey: "userId" });
Company.belongsTo(User, { foreignKey: "userId" });

Company.hasMany(Job, { foreignKey: "companyId" });
Job.belongsTo(Company, { foreignKey: "companyId" });

User.hasMany(Application, { foreignKey: "userId" });
Application.belongsTo(User, { foreignKey: "userId" });

Job.hasMany(Application, { foreignKey: "jobId" });
Application.belongsTo(Job, { foreignKey: "jobId" });

export { sequelize, User, Company, Job, Application };
